import React, { useState } from 'react';
import { Calculator, RefreshCw, Info } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const BMI: React.FC = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (!height || !weight) return;
    
    const h = parseFloat(height) / 100; // cm to m
    const w = parseFloat(weight);
    const bmiValue = w / (h * h);
    const roundedBmi = parseFloat(bmiValue.toFixed(1));
    
    setBmi(roundedBmi);

    if (roundedBmi < 18.5) setCategory('Underweight');
    else if (roundedBmi < 24.9) setCategory('Normal Weight');
    else if (roundedBmi < 29.9) setCategory('Overweight');
    else setCategory('Obese');
  };

  const reset = () => {
    setHeight('');
    setWeight('');
    setAge('');
    setBmi(null);
    setCategory('');
  };

  const getCategoryColor = (cat: string) => {
    switch(cat) {
      case 'Underweight': return '#3b82f6'; // blue
      case 'Normal Weight': return '#22c55e'; // green
      case 'Overweight': return '#eab308'; // yellow
      case 'Obese': return '#ef4444'; // red
      default: return '#cbd5e1';
    }
  };

  // Data for Recharts (Dummy visualization of the scale)
  const data = [
    { name: 'Underweight', value: 18.5, color: '#3b82f6' },
    { name: 'Normal', value: 6.4, color: '#22c55e' },
    { name: 'Overweight', value: 5, color: '#eab308' },
    { name: 'Obese', value: 10, color: '#ef4444' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">BMI Calculator</h1>
            <p className="text-slate-600">Calculate your Body Mass Index to understand your health status.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Input Form */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Age</label>
                  <input 
                    type="number" 
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="e.g., 25"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Height (cm)</label>
                  <input 
                    type="number" 
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="e.g., 175"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Weight (kg)</label>
                  <input 
                    type="number" 
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="e.g., 70"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button 
                    onClick={calculateBMI}
                    className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
                  >
                    <Calculator className="w-5 h-5" /> Calculate
                  </button>
                  <button 
                    onClick={reset}
                    className="px-6 py-3 bg-slate-100 text-slate-600 rounded-xl font-semibold hover:bg-slate-200 transition-colors"
                  >
                    <RefreshCw className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Result Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center relative overflow-hidden">
              {bmi ? (
                <div className="w-full animate-in fade-in zoom-in duration-300">
                  <span className="text-sm font-bold tracking-wider text-slate-400 uppercase mb-2 block">Your BMI Score</span>
                  <div className="text-6xl font-extrabold text-slate-900 mb-2">{bmi}</div>
                  <div 
                    className="inline-block px-4 py-1 rounded-full text-white font-bold text-sm mb-8"
                    style={{ backgroundColor: getCategoryColor(category) }}
                  >
                    {category}
                  </div>

                  {/* Chart */}
                  <div className="h-48 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={data}
                          cx="50%"
                          cy="100%"
                          startAngle={180}
                          endAngle={0}
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={2}
                          dataKey="value"
                        >
                          {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="text-xs text-slate-400 mt-[-20px]">BMI Scale</div>

                  <p className="mt-6 text-slate-600 text-sm">
                    Healthy BMI range: 18.5 kg/m² - 25 kg/m². <br/>
                    Consult a healthcare provider for accurate advice.
                  </p>
                </div>
              ) : (
                <div className="text-slate-400 flex flex-col items-center">
                  <Info className="w-16 h-16 mb-4 opacity-20" />
                  <p>Enter your details to see your result.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMI;