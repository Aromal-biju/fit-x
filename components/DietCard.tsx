import React from 'react';
import { DietPlan, Meal } from '../types';
import { Utensils, Flame, Wheat, Egg, Droplets } from 'lucide-react';

interface Props {
  plan: DietPlan;
}

const MealRow: React.FC<{ label: string; meal: Meal }> = ({ label, meal }) => (
  <div className="mb-4 last:mb-0 border-b border-slate-50 last:border-0 pb-3 last:pb-0">
    <div className="flex justify-between items-center mb-1">
      <h5 className="text-sm font-semibold text-slate-800 uppercase tracking-wide">{label}</h5>
      <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded">{meal.calories} kcal</span>
    </div>
    <p className="text-sm font-medium text-blue-700 mb-1">{meal.name}</p>
    <p className="text-xs text-slate-500">{meal.items.join(', ')}</p>
  </div>
);

const DietCard: React.FC<Props> = ({ plan }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg hover:border-blue-100 transition-all duration-300">
      <div className="bg-slate-900 p-6 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
          <Utensils className="w-32 h-32" />
        </div>
        <div className="relative z-10">
          <span className="inline-block bg-blue-600 text-xs font-bold px-2 py-1 rounded mb-2">
            {plan.category}
          </span>
          <h3 className="text-2xl font-bold mb-1">{plan.totalCalories} kcal</h3>
          <p className="text-slate-300 text-sm">{plan.description}</p>
        </div>
      </div>

      {/* Macros */}
      <div className="grid grid-cols-3 divide-x divide-slate-100 border-b border-slate-100 bg-slate-50">
        <div className="p-3 text-center">
          <div className="flex items-center justify-center gap-1 text-xs text-slate-500 mb-1">
            <Egg className="w-3 h-3" /> Protein
          </div>
          <span className="font-bold text-slate-800">{plan.macros.protein}</span>
        </div>
        <div className="p-3 text-center">
          <div className="flex items-center justify-center gap-1 text-xs text-slate-500 mb-1">
            <Wheat className="w-3 h-3" /> Carbs
          </div>
          <span className="font-bold text-slate-800">{plan.macros.carbs}</span>
        </div>
        <div className="p-3 text-center">
          <div className="flex items-center justify-center gap-1 text-xs text-slate-500 mb-1">
            <Droplets className="w-3 h-3" /> Fats
          </div>
          <span className="font-bold text-slate-800">{plan.macros.fats}</span>
        </div>
      </div>

      <div className="p-6">
        <MealRow label="Breakfast" meal={plan.meals.breakfast} />
        <MealRow label="Lunch" meal={plan.meals.lunch} />
        <MealRow label="Dinner" meal={plan.meals.dinner} />
        {plan.meals.snack && <MealRow label="Snack" meal={plan.meals.snack} />}
      </div>
    </div>
  );
};

export default DietCard;