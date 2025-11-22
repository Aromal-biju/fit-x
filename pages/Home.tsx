import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Activity, Utensils, Calculator } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleStartTraining = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
      navigate('/workouts');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-slate-900 h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://picsum.photos/1920/1080?random=gym" 
            alt="Gym Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white animate-in slide-in-from-bottom-10 duration-700 fade-in">
            <div className="inline-block bg-blue-600/20 border border-blue-500/50 backdrop-blur-sm rounded-full px-4 py-1 mb-6">
              <span className="text-blue-300 font-medium text-sm tracking-wide">REDEFINE YOUR LIMITS</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Dream Body</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
              Expert workout guides, tailored nutrition plans, and smart tools to track your progress. Start your transformation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleStartTraining}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
              >
                Start Training <ArrowRight className="w-5 h-5" />
              </button>
              <Link to="/diets" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 rounded-xl font-bold transition-all transform hover:-translate-y-1 flex items-center justify-center">
                View Diet Plans
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything you need to succeed</h2>
            <p className="text-slate-600">We provide the essential tools and knowledge base to help you reach your fitness goals faster and safer.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Activity className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Premium Workouts</h3>
              <p className="text-slate-600 mb-6">Access detailed exercises categorized by muscle groups with step-by-step instructions.</p>
              <button onClick={handleStartTraining} className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-1 text-sm">
                Explore Exercises <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Utensils className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Nutrition Plans</h3>
              <p className="text-slate-600 mb-6">Whether you want to lose fat or gain muscle, we have a plan tailored for you.</p>
              <Link to="/diets" className="text-green-600 font-semibold hover:text-green-800 flex items-center gap-1 text-sm">
                Find Your Plan <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Calculator className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Smart Tools</h3>
              <p className="text-slate-600 mb-6">Check your BMI and track your health metrics with our easy-to-use calculators.</p>
              <Link to="/bmi" className="text-purple-600 font-semibold hover:text-purple-800 flex items-center gap-1 text-sm">
                Calculate Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;