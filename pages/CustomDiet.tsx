import React, { useState, useMemo } from 'react';
import { FOOD_DATABASE } from '../constants';
import { FoodItem, PlanItem, MealType } from '../types';
import { Plus, Trash2, ChefHat, Utensils, PieChart } from 'lucide-react';

const CustomDiet: React.FC = () => {
  const [plan, setPlan] = useState<{ [key in MealType]: PlanItem[] }>({
    Breakfast: [],
    Lunch: [],
    Dinner: [],
    Snack: []
  });
  const [selectedMeal, setSelectedMeal] = useState<MealType>('Breakfast');
  const [selectedFoodId, setSelectedFoodId] = useState<string>('');
  const [amount, setAmount] = useState<number>(100);

  const selectedFood = useMemo(() => 
    FOOD_DATABASE.find(f => f.id === selectedFoodId), 
  [selectedFoodId]);

  const handleAddFood = () => {
    if (!selectedFood) return;
    
    const newItem: PlanItem = {
      ...selectedFood,
      portion: amount,
      uid: Date.now().toString() + Math.random()
    };

    setPlan(prev => ({
      ...prev,
      [selectedMeal]: [...prev[selectedMeal], newItem]
    }));

    // Reset
    setAmount(selectedFood.defaultPortion);
  };

  const removeFood = (meal: MealType, uid: string) => {
    setPlan(prev => ({
      ...prev,
      [meal]: prev[meal].filter(item => item.uid !== uid)
    }));
  };

  const calculateMacros = (items: PlanItem[]) => {
    return items.reduce((acc, item) => {
      const ratio = item.portion / 100; // Assuming base is 100g/unit for simplicity in logic, though constants vary.
      // Correct calculation based on unit. Constants are per 100g or 1 unit. 
      // If unit is 'unit', portion is count. If 'g' or 'ml', portion is amount.
      
      let factor = 0;
      if (item.unit === 'g' || item.unit === 'ml') {
        factor = item.portion / 100; // DefaultPortion isn't strictly 100 in DB but standard nutritional data is usually per 100g.
        // Actually, let's assume the DB values are per 100g/ml or per 1 unit.
        // For simplicity in this demo, we treat values in DB as "Per 100g/ml" or "Per 1 Unit".
      } else {
        factor = item.portion; // portion is number of units
      }

      // Special handling if our DB values are "per defaultPortion".
      // Let's standardise: DB values are per 100 units of weight/volume OR per 1 item.
      // Re-reading constant.ts: e.g. Egg is 72kcal per unit. Chicken is 165 per 100g.
      // My calc logic needs to respect that.
      
      let nutrientsMultiplier = 0;
      if (item.unit === 'unit') {
        nutrientsMultiplier = item.portion;
      } else {
         // weight based
         nutrientsMultiplier = item.portion / 100;
         // Note: The DB values for weight items are per 100g.
      }
      
      return {
        calories: acc.calories + item.calories * nutrientsMultiplier,
        protein: acc.protein + item.protein * nutrientsMultiplier,
        carbs: acc.carbs + item.carbs * nutrientsMultiplier,
        fats: acc.fats + item.fats * nutrientsMultiplier,
      };
    }, { calories: 0, protein: 0, carbs: 0, fats: 0 });
  };

  const totalMacros = useMemo(() => {
    const allItems = Object.values(plan).flat();
    return calculateMacros(allItems);
  }, [plan]);

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Custom Meal Planner</h1>
          <p className="text-slate-600">Build your perfect diet plan and let us handle the math.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Food Selector */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Utensils className="w-5 h-5 text-blue-600" /> Add Food
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Meal</label>
                  <div className="grid grid-cols-4 gap-2">
                    {(['Breakfast', 'Lunch', 'Dinner', 'Snack'] as MealType[]).map(m => (
                      <button
                        key={m}
                        onClick={() => setSelectedMeal(m)}
                        className={`px-2 py-2 rounded-lg text-xs font-medium transition-all ${
                          selectedMeal === m 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Food Item</label>
                  <select
                    className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-slate-50"
                    value={selectedFoodId}
                    onChange={(e) => {
                      setSelectedFoodId(e.target.value);
                      const food = FOOD_DATABASE.find(f => f.id === e.target.value);
                      if (food) setAmount(food.defaultPortion);
                    }}
                  >
                    <option value="">Select a food...</option>
                    {FOOD_DATABASE.map(food => (
                      <option key={food.id} value={food.id}>
                        {food.name} ({food.calories}kcal/{food.unit === 'unit' ? '1' : '100g'})
                      </option>
                    ))}
                  </select>
                </div>

                {selectedFood && (
                  <div className="animate-in fade-in slide-in-from-top-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Quantity ({selectedFood.unit})
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        min="0"
                        value={amount}
                        onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                        className="flex-grow p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-slate-50"
                      />
                      <button 
                        onClick={handleAddFood}
                        disabled={amount <= 0}
                        className="bg-blue-600 text-white px-4 rounded-xl hover:bg-blue-700 disabled:opacity-50 transition-colors"
                      >
                        <Plus className="w-6 h-6" />
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">
                      Macros for this portion: 
                      <span className="font-semibold text-slate-700 ml-1">
                         {Math.round(selectedFood.calories * (selectedFood.unit === 'unit' ? amount : amount/100))} kcal
                      </span>
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Daily Summary Card - Desktop sticky */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg sticky top-24 hidden lg:block">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <PieChart className="w-5 h-5" /> Daily Targets
              </h3>
              <div className="space-y-4">
                <div className="text-center p-4 bg-slate-800 rounded-xl">
                  <span className="text-slate-400 text-xs uppercase tracking-wider">Total Calories</span>
                  <div className="text-4xl font-bold text-white mt-1">{Math.round(totalMacros.calories)}</div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-slate-800 p-3 rounded-lg text-center">
                    <div className="text-xs text-slate-400 mb-1">Protein</div>
                    <div className="font-bold text-blue-400">{Math.round(totalMacros.protein)}g</div>
                  </div>
                  <div className="bg-slate-800 p-3 rounded-lg text-center">
                    <div className="text-xs text-slate-400 mb-1">Carbs</div>
                    <div className="font-bold text-green-400">{Math.round(totalMacros.carbs)}g</div>
                  </div>
                  <div className="bg-slate-800 p-3 rounded-lg text-center">
                    <div className="text-xs text-slate-400 mb-1">Fats</div>
                    <div className="font-bold text-yellow-400">{Math.round(totalMacros.fats)}g</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Meal Plan Display */}
          <div className="lg:col-span-2 space-y-6">
             {/* Mobile Summary */}
             <div className="bg-slate-900 text-white p-4 rounded-2xl shadow-lg lg:hidden">
               <div className="flex justify-between items-center">
                 <div>
                   <span className="text-slate-400 text-xs uppercase">Calories</span>
                   <div className="text-2xl font-bold">{Math.round(totalMacros.calories)}</div>
                 </div>
                 <div className="flex gap-4 text-sm">
                    <div><span className="text-blue-400 font-bold">{Math.round(totalMacros.protein)}g</span> P</div>
                    <div><span className="text-green-400 font-bold">{Math.round(totalMacros.carbs)}g</span> C</div>
                    <div><span className="text-yellow-400 font-bold">{Math.round(totalMacros.fats)}g</span> F</div>
                 </div>
               </div>
             </div>

             {(['Breakfast', 'Lunch', 'Dinner', 'Snack'] as MealType[]).map(mealType => {
               const items = plan[mealType];
               const mealMacros = calculateMacros(items);

               return (
                 <div key={mealType} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                   <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                     <h3 className="font-bold text-slate-800">{mealType}</h3>
                     <span className="text-sm font-medium text-slate-500">{Math.round(mealMacros.calories)} kcal</span>
                   </div>
                   
                   <div className="p-2">
                     {items.length === 0 ? (
                       <div className="text-center py-6 text-slate-400 text-sm italic">
                         No items added yet.
                       </div>
                     ) : (
                       <ul className="space-y-1">
                         {items.map(item => (
                           <li key={item.uid} className="flex justify-between items-center p-3 hover:bg-slate-50 rounded-lg group transition-colors">
                             <div className="flex items-center gap-3">
                               <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
                                 {item.name.charAt(0)}
                               </div>
                               <div>
                                 <div className="font-medium text-slate-900">{item.name}</div>
                                 <div className="text-xs text-slate-500">
                                   {item.portion}{item.unit} • P: {Math.round(item.protein * (item.unit === 'unit' ? item.portion : item.portion/100))}g
                                 </div>
                               </div>
                             </div>
                             <button 
                               onClick={() => removeFood(mealType, item.uid)}
                               className="text-slate-300 hover:text-red-500 transition-colors p-2"
                             >
                               <Trash2 className="w-4 h-4" />
                             </button>
                           </li>
                         ))}
                       </ul>
                     )}
                   </div>
                 </div>
               );
             })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDiet;