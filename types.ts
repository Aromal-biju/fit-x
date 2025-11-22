export type MuscleGroup = 'Chest' | 'Back' | 'Shoulders' | 'Arms' | 'Legs' | 'Abs';
export type WorkoutType = 'Gym' | 'Home';

export interface Exercise {
  id: string;
  title: string;
  muscleGroup: MuscleGroup;
  type: WorkoutType;
  description: string;
  instructions: string[];
  sets: string;
  reps: string;
  imageUrl: string;
}

export type DietCategory = 'Weight Loss' | 'Muscle Gain' | 'Balanced' | 'Vegetarian';

export interface Meal {
  name: string;
  items: string[];
  calories: number;
}

export interface DietPlan {
  id: string;
  category: DietCategory;
  description: string;
  meals: {
    breakfast: Meal;
    lunch: Meal;
    dinner: Meal;
    snack?: Meal;
  };
  totalCalories: number;
  macros: {
    protein: string;
    carbs: string;
    fats: string;
  };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

// New Types for Custom Diet
export interface FoodItem {
  id: string;
  name: string;
  calories: number; // per 100g or 1 unit
  protein: number;
  carbs: number;
  fats: number;
  unit: 'g' | 'unit' | 'ml';
  defaultPortion: number;
}

export interface PlanItem extends FoodItem {
  portion: number; // User defined amount
  uid: string; // unique id for the list item
}

export type MealType = 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack';

// New Types for Workout Log
export interface WorkoutSet {
  id: string;
  exercise: string;
  sets: number;
  reps: number;
  weight: number;
}

export interface WorkoutLogEntry {
  id: string;
  date: string;
  name: string; // e.g., "Leg Day"
  exercises: WorkoutSet[];
  notes?: string;
}