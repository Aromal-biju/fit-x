import React from 'react';
import { DIET_PLANS } from '../constants';
import DietCard from '../components/DietCard';

const Diets: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nutrition Plans</h1>
          <p className="text-slate-600 text-lg">
            Fuel your body with our expertly crafted meal plans designed for specific fitness goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {DIET_PLANS.map(plan => (
            <DietCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Motivation Block */}
        <div className="mt-16 bg-blue-600 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">"Abs are made in the kitchen."</h3>
            <p className="max-w-xl mx-auto text-blue-100 mb-8">
              Consistency with your nutrition is just as important as your workout routine. Stick to the plan and see the results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diets;