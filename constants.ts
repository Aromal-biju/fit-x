import { Exercise, DietPlan, FoodItem } from './types';

export const FOOD_DATABASE: FoodItem[] = [
  { id: 'f1', name: 'Chicken Breast (Grilled)', calories: 165, protein: 31, carbs: 0, fats: 3.6, unit: 'g', defaultPortion: 100 },
  { id: 'f2', name: 'White Rice (Cooked)', calories: 130, protein: 2.7, carbs: 28, fats: 0.3, unit: 'g', defaultPortion: 100 },
  { id: 'f3', name: 'Egg (Large)', calories: 72, protein: 6, carbs: 0.4, fats: 5, unit: 'unit', defaultPortion: 1 },
  { id: 'f4', name: 'Oats', calories: 389, protein: 16.9, carbs: 66, fats: 6.9, unit: 'g', defaultPortion: 50 },
  { id: 'f5', name: 'Banana', calories: 89, protein: 1.1, carbs: 22.8, fats: 0.3, unit: 'unit', defaultPortion: 1 },
  { id: 'f6', name: 'Almonds', calories: 579, protein: 21, carbs: 22, fats: 50, unit: 'g', defaultPortion: 30 },
  { id: 'f7', name: 'Greek Yogurt (Non-fat)', calories: 59, protein: 10, carbs: 3.6, fats: 0.4, unit: 'g', defaultPortion: 150 },
  { id: 'f8', name: 'Salmon (Raw)', calories: 208, protein: 20, carbs: 0, fats: 13, unit: 'g', defaultPortion: 100 },
  { id: 'f9', name: 'Sweet Potato (Boiled)', calories: 86, protein: 1.6, carbs: 20, fats: 0.1, unit: 'g', defaultPortion: 150 },
  { id: 'f10', name: 'Broccoli', calories: 34, protein: 2.8, carbs: 7, fats: 0.4, unit: 'g', defaultPortion: 100 },
  { id: 'f11', name: 'Olive Oil', calories: 884, protein: 0, carbs: 0, fats: 100, unit: 'ml', defaultPortion: 15 },
  { id: 'f12', name: 'Whey Protein Powder', calories: 370, protein: 80, carbs: 4, fats: 2, unit: 'g', defaultPortion: 30 },
  { id: 'f13', name: 'Avocado', calories: 160, protein: 2, carbs: 8.5, fats: 15, unit: 'g', defaultPortion: 100 },
  { id: 'f14', name: 'Whole Wheat Bread', calories: 265, protein: 9, carbs: 49, fats: 3, unit: 'g', defaultPortion: 40 },
  { id: 'f15', name: 'Peanut Butter', calories: 588, protein: 25, carbs: 20, fats: 50, unit: 'g', defaultPortion: 30 },
];

export const WORKOUTS: Exercise[] = [
  // --- GYM WORKOUTS ---
  {
    id: 'gym_c1',
    title: 'Barbell Bench Press',
    muscleGroup: 'Chest',
    type: 'Gym',
    description: 'The king of upper body exercises for building size and strength.',
    instructions: [
      'Lie back on a flat bench.',
      'Grip the bar slightly wider than shoulder-width.',
      'Lower the bar slowly to your mid-chest.',
      'Press the bar back up explosively.'
    ],
    sets: '3-4',
    reps: '8-12',
    imageUrl: 'https://images.ctfassets.net/8urtyqugdt2l/4wPk3KafRwgpwIcJzb0VRX/4894054c6182c62c1d850628935a4b0b/desktop-best-chest-exercises.jpg'
  },
  {
    id: 'gym_c2',
    title: 'Incline Dumbbell Fly',
    muscleGroup: 'Chest',
    type: 'Gym',
    description: 'Isolates the upper chest muscles and provides a deep stretch.',
    instructions: [
      'Set bench to 30-45 degrees incline.',
      'Hold dumbbells above chest with palms facing each other.',
      'Lower weights in an arc motion until chest is stretched.',
      'Bring them back together at the top.'
    ],
    sets: '3',
    reps: '12-15',
    imageUrl: 'https://hortonbarbell.com/wp-content/uploads/2022/11/Dumbbell-Incline-Bench-Press-Alternatives.png'
  },
  {
    id: 'gym_c3',
    title: 'Cable Crossover',
    muscleGroup: 'Chest',
    type: 'Gym',
    description: 'Excellent isolation exercise for the inner chest.',
    instructions: [
      'Set cables to high position.',
      'Step forward with one leg for stability.',
      'Bring handles together in front of chest with slight bend in elbows.',
      'Control the weight back to starting position.'
    ],
    sets: '3',
    reps: '12-15',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0618/9462/3460/files/stock-photo-beautiful-young-caucasian-female-athlete-exercising-with-cable-crossover-machine-in-fitness-gym-1846648126-800x571.jpg'
  },
  {
    id: 'gym_b1',
    title: 'Deadlift',
    muscleGroup: 'Back',
    type: 'Gym',
    description: 'A compound movement that works the entire posterior chain.',
    instructions: [
      'Stand with feet hip-width apart, barbell over mid-foot.',
      'Hinge at hips to grip the bar.',
      'Keep back straight and chest up.',
      'Drive through heels to stand up straight.'
    ],
    sets: '3',
    reps: '5-8',
    imageUrl: 'https://it.nutrimuscle.com/cdn/shop/articles/Blog_article-Sumo_deadlift-1000x635_d22cea08-30b7-4383-a875-9d6b25e72142.jpg?v=1753085959'
  },
  {
    id: 'gym_b2',
    title: 'Pull-Ups',
    muscleGroup: 'Back',
    type: 'Gym',
    description: 'Essential bodyweight exercise for back width (requires pull-up bar).',
    instructions: [
      'Grip the bar wider than shoulders.',
      'Pull your body up until chin clears the bar.',
      'Lower yourself down with control.',
      'Avoid swinging your legs.'
    ],
    sets: '3',
    reps: 'Failure',
    imageUrl: 'https://images.ctfassets.net/0k812o62ndtw/5NuCplQIQtWN7cQMgoEtXf/0ab832bf7faf755ef47fc9e413300db3/2023.11.17_SWEAT_LAURA05320-1024x683-27c3a53.jpg'
  },
  {
    id: 'gym_b3',
    title: 'Lat Pulldown',
    muscleGroup: 'Back',
    type: 'Gym',
    description: 'Builds back width, targeting the latissimus dorsi.',
    instructions: [
      'Sit down and adjust knee pads.',
      'Grip the bar wider than shoulder width.',
      'Pull bar down to upper chest.',
      'Squeeze lats at the bottom and return slowly.'
    ],
    sets: '3-4',
    reps: '10-12',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/5750d5129f72662d66448028/1484548314797-17MUSPPZNGTMUTEDF8ES/Lat+Pulldown+%28Bodybuilder%29.jpg?format=500w'
  },
  {
    id: 'gym_b4',
    title: 'Seated Cable Row',
    muscleGroup: 'Back',
    type: 'Gym',
    description: 'Targets back thickness and middle back.',
    instructions: [
      'Sit with feet on platform, knees slightly bent.',
      'Keep back straight and pull handle to stomach.',
      'Squeeze shoulder blades together.',
      'Extend arms fully to stretch lats.'
    ],
    sets: '3',
    reps: '10-12',
    imageUrl: 'https://sportpower.ir/wp-content/uploads/2023/06/2-min-12.jpg'
  },
  {
    id: 'gym_s1',
    title: 'Overhead Press',
    muscleGroup: 'Shoulders',
    type: 'Gym',
    description: 'Builds massive shoulders and triceps strength.',
    instructions: [
      'Stand with bar at collarbone height.',
      'Press bar vertically until arms are locked.',
      'Lower carefully to starting position.',
      'Keep core tight throughout.'
    ],
    sets: '4',
    reps: '8-10',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/5750d5129f72662d66448028/1516601347742-NU3F90DT62A0KBWTRQAH/Shoulder+Press.jpg?format=1500w'
  },
  {
    id: 'gym_s2',
    title: 'Dumbbell Lateral Raise',
    muscleGroup: 'Shoulders',
    type: 'Gym',
    description: 'The best exercise for medial deltoid development (shoulder width).',
    instructions: [
      'Stand holding dumbbells at sides.',
      'Raise arms to sides until parallel with floor.',
      'Lead with elbows.',
      'Lower slowly.'
    ],
    sets: '3-4',
    reps: '12-15',
    imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/fai-6871-jpg-1646751792.jpg?crop=1xw:0.84375xh;0,0.149xh'
  },
  {
    id: 'gym_s3',
    title: 'Face Pulls',
    muscleGroup: 'Shoulders',
    type: 'Gym',
    description: 'Great for rear delts and rotator cuff health.',
    instructions: [
      'Set rope attachment to face height.',
      'Pull rope towards face, separating hands.',
      'Externally rotate shoulders at the end.',
      'Squeeze rear delts.'
    ],
    sets: '3',
    reps: '15-20',
    imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/man-training-royalty-free-image-1751985265.pjpeg?crop=0.88889xw:1xh;center,top&resize=1200:*'
  },
  {
    id: 'gym_a1',
    title: 'Barbell Curls',
    muscleGroup: 'Arms',
    type: 'Gym',
    description: 'Classic bicep builder.',
    instructions: [
      'Stand straight holding a barbell.',
      'Keep elbows close to torso.',
      'Curl weights while contracting biceps.',
      'Lower slowly.'
    ],
    sets: '3',
    reps: '10-12',
    imageUrl: 'https://barbend.com/wp-content/uploads/2024/01/barbell-curl-336330392.jpg'
  },
  {
    id: 'gym_a2',
    title: 'Tricep Rope Pushdown',
    muscleGroup: 'Arms',
    type: 'Gym',
    description: 'Isolates the triceps.',
    instructions: [
      'Attach rope to high pulley.',
      'Keep elbows tucked at sides.',
      'Push down and spread rope at bottom.',
      'Return to 90 degrees.'
    ],
    sets: '3',
    reps: '12-15',
    imageUrl: 'https://imagely.mirafit.co.uk/wp/wp-content/uploads/2022/11/tricep-pushdown-with-Mirafit-Cable-Machine.jpg'
  },
  {
    id: 'gym_a3',
    title: 'Hammer Curls',
    muscleGroup: 'Arms',
    type: 'Gym',
    description: 'Targets biceps and brachialis (forearms).',
    instructions: [
      'Hold dumbbells with neutral grip (palms facing body).',
      'Curl weights keeping elbows still.',
      'Squeeze at the top.',
      'Lower under control.'
    ],
    sets: '3',
    reps: '10-12',
    imageUrl: 'https://www.trainheroic.com/wp-content/uploads/2023/02/AdobeStock_417412809-TH-jpg.webp'
  },
  {
    id: 'gym_l1',
    title: 'Barbell Squat',
    muscleGroup: 'Legs',
    type: 'Gym',
    description: 'The primary exercise for lower body development.',
    instructions: [
      'Place bar on upper back (traps).',
      'Squat down by pushing hips back.',
      'Keep knees in line with toes.',
      'Go parallel or deeper, then drive up.'
    ],
    sets: '4',
    reps: '6-10',
    imageUrl: 'https://cdn.muscleandstrength.com/sites/default/files/barbell-back-squat.jpg'
  },
  {
    id: 'gym_l2',
    title: 'Leg Press',
    muscleGroup: 'Legs',
    type: 'Gym',
    description: 'Heavy compound movement for quads and glutes without loading the spine.',
    instructions: [
      'Sit in the machine and place feet shoulder-width apart.',
      'Lower the platform until knees are at 90 degrees.',
      'Press back up, keeping knees slightly soft at the top.',
    ],
    sets: '3',
    reps: '10-15',
    imageUrl: 'https://cdn.muscleandstrength.com/sites/default/files/leg-press.jpg'
  },
  {
    id: 'gym_l3',
    title: 'Leg Extension',
    muscleGroup: 'Legs',
    type: 'Gym',
    description: 'Isolation exercise for the quadriceps.',
    instructions: [
      'Adjust seat so knees align with pivot point.',
      'Extend legs until straight.',
      'Squeeze quads at the top.',
      'Lower slowly.'
    ],
    sets: '3',
    reps: '12-15',
    imageUrl: 'https://intowellness.in/wp-content/uploads/2024/12/Leg-Extension-Machine.jpg'
  },
  {
    id: 'gym_l4',
    title: 'Seated Leg Curl',
    muscleGroup: 'Legs',
    type: 'Gym',
    description: 'Isolation exercise for hamstrings.',
    instructions: [
      'Adjust pads to fit legs comfortably.',
      'Curl legs down and back.',
      'Squeeze hamstrings at the bottom.',
      'Return slowly.'
    ],
    sets: '3',
    reps: '12-15',
    imageUrl: 'https://intowellness.in/wp-content/uploads/2024/10/Seated_Leg_Curl-2.jpg'
  },
  {
    id: 'gym_l5',
    title: 'Romanian Deadlift',
    muscleGroup: 'Legs',
    type: 'Gym',
    description: 'Hip hinge movement for hamstrings and glutes.',
    instructions: [
      'Hold barbell at hip level.',
      'Push hips back while keeping legs slightly bent.',
      'Lower bar until hamstring stretch is felt.',
      'Drive hips forward to return.'
    ],
    sets: '3-4',
    reps: '8-12',
    imageUrl: 'https://images.ctfassets.net/8urtyqugdt2l/7BbRGqwGuCSrkkVXbSELg5/e74283e5d48437abbbcc5bf6a1f010a7/desktop-romanian-deadlift.jpg'
  },
  {
    id: 'gym_ab_gym1',
    title: 'Hanging Leg Raise',
    muscleGroup: 'Abs',
    type: 'Gym',
    description: 'Advanced core exercise targeting lower abs.',
    instructions: [
      'Hang from a pull-up bar.',
      'Keep legs straight or knees bent.',
      'Raise legs until parallel to floor or higher.',
      'Lower slowly without swinging.'
    ],
    sets: '3',
    reps: '10-15',
    imageUrl: 'https://athleanx.com/wp-content/uploads/2018/10/abdominals.png'
  },

  // --- HOME WORKOUTS ---
  {
    id: 'home_c1',
    title: 'Push-Ups',
    muscleGroup: 'Chest',
    type: 'Home',
    description: 'Classic bodyweight exercise for chest and triceps.',
    instructions: [
      'Start in a plank position, hands slightly wider than shoulders.',
      'Lower your body until chest nearly touches floor.',
      'Push back up to starting position.',
      'Keep core tight and back flat.'
    ],
    sets: '3-4',
    reps: '15-20',
    imageUrl: 'https://fitnessfaqs.com/wp-content/uploads/2023/12/Normal-Push-ups.gif'
  },
  {
    id: 'home_s1',
    title: 'Pike Push-Ups',
    muscleGroup: 'Shoulders',
    type: 'Home',
    description: 'Bodyweight vertical pressing movement for shoulders.',
    instructions: [
      'Start in a downward dog position.',
      'Bend elbows to lower head towards the floor.',
      'Press back up to the inverted V position.',
      'Keep legs straight if possible.'
    ],
    sets: '3',
    reps: '8-12',
    imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/pikepushup-1456956895.gif?resize=640:*'
  },
  {
    id: 'home_l1',
    title: 'Bodyweight Squats',
    muscleGroup: 'Legs',
    type: 'Home',
    description: 'Fundamental lower body movement achievable anywhere.',
    instructions: [
      'Stand with feet shoulder-width apart.',
      'Lower hips back and down as if sitting in a chair.',
      'Keep chest up and heels on the ground.',
      'Return to standing.'
    ],
    sets: '4',
    reps: '20-25',
    imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/bodyweightsquat-1457041691.gif'
  },
  {
    id: 'home_l2',
    title: 'Walking Lunges',
    muscleGroup: 'Legs',
    type: 'Home',
    description: 'Dynamic leg exercise for quads and glutes.',
    instructions: [
      'Step forward with one leg.',
      'Lower hips until both knees are at 90 degrees.',
      'Push off front foot to bring back foot forward.',
      'Alternate legs while walking forward.'
    ],
    sets: '3',
    reps: '12 per leg',
    imageUrl: 'https://cdn.jefit.com/assets/img/exercises/gifs/1222.gif'
  },
  {
    id: 'home_ab1',
    title: 'Plank',
    muscleGroup: 'Abs',
    type: 'Home',
    description: 'Core stability isometric exercise.',
    instructions: [
      'Get into a pushup position but on elbows.',
      'Keep body in a straight line.',
      'Engage core and glutes.',
      'Hold for time.'
    ],
    sets: '3',
    reps: '60 sec',
    imageUrl: 'https://gymnation.com/media/jpbjzofv/plank2.webp?width=956&height=675&v=1da85a0bb1f4060'
  },
  {
    id: 'home_ab2',
    title: 'Bicycle Crunches',
    muscleGroup: 'Abs',
    type: 'Home',
    description: 'Dynamic core exercise targeting obliques and rectus abdominis.',
    instructions: [
      'Lie on back, hands behind head.',
      'Bring right elbow to left knee while extending right leg.',
      'Switch sides in a pedaling motion.',
      'Keep lower back pressed to floor.'
    ],
    sets: '3',
    reps: '20 reps',
    imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/08/bicycle-1472058017.gif?resize=980:'
  },
  {
    id: 'home_a1',
    title: 'Diamond Push-Ups',
    muscleGroup: 'Arms',
    type: 'Home',
    description: 'Tricep-focused variation of the push-up.',
    instructions: [
      'Place hands close together forming a diamond shape.',
      'Lower chest to hands.',
      'Press back up, focusing on triceps.',
    ],
    sets: '3',
    reps: '8-12',
    imageUrl: 'https://images.ctfassets.net/6ilvqec50fal/3hTY3FIEwYdNloN5V3HL7G/26e28de169b01e5e79332e5418803470/Diamond_Push-Up_GIF.gif'
  },
  {
    id: 'home_b1',
    title: 'Superman',
    muscleGroup: 'Back',
    type: 'Home',
    description: 'Lower back strengthening exercise.',
    instructions: [
      'Lie face down on the floor, arms extended forward.',
      'Simultaneously lift arms, chest, and legs off the floor.',
      'Hold for 2 seconds.',
      'Lower back down.'
    ],
    sets: '3',
    reps: '12-15',
    imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/08/supermany-1472154643.gif'
  }
];

export const DIET_PLANS: DietPlan[] = [
  {
    id: 'd1',
    category: 'Weight Loss',
    description: 'A calorie-deficit plan focused on high protein and fiber to keep you full.',
    totalCalories: 1800,
    macros: { protein: '160g', carbs: '120g', fats: '60g' },
    meals: {
      breakfast: { name: 'Oatmeal & Berries', items: ['50g Oats', '1 scoop Whey Protein', '100g Blueberries'], calories: 350 },
      lunch: { name: 'Chicken Salad', items: ['150g Grilled Chicken Breast', 'Mixed Greens', '1 tbsp Olive Oil'], calories: 450 },
      dinner: { name: 'Salmon & Asparagus', items: ['150g Salmon', '200g Asparagus', 'Small Sweet Potato'], calories: 500 },
      snack: { name: 'Greek Yogurt', items: ['1 cup Greek Yogurt', 'Almonds'], calories: 200 }
    }
  },
  {
    id: 'd2',
    category: 'Muscle Gain',
    description: 'High calorie, high carb plan to fuel intense workouts and recovery.',
    totalCalories: 3000,
    macros: { protein: '220g', carbs: '350g', fats: '80g' },
    meals: {
      breakfast: { name: 'Power Eggs & Toast', items: ['4 Eggs', '2 slices Whole Wheat Toast', 'Avocado'], calories: 600 },
      lunch: { name: 'Steak & Rice', items: ['200g Sirloin Steak', '1.5 cups White Rice', 'Broccoli'], calories: 800 },
      dinner: { name: 'Pasta & Turkey', items: ['200g Ground Turkey', '2 cups Pasta', 'Marinara Sauce'], calories: 900 },
      snack: { name: 'Mass Shake', items: ['Oats', 'Banana', 'Peanut Butter', 'Protein Powder', 'Milk'], calories: 700 }
    }
  },
  {
    id: 'd3',
    category: 'Vegetarian',
    description: 'Plant-based nutrition focusing on complete protein sources.',
    totalCalories: 2200,
    macros: { protein: '140g', carbs: '250g', fats: '70g' },
    meals: {
      breakfast: { name: 'Tofu Scramble', items: ['200g Tofu', 'Spinach', 'Turmeric', 'Toast'], calories: 400 },
      lunch: { name: 'Lentil Curry', items: ['1 cup Lentils', 'Basmati Rice', 'Coconut Milk'], calories: 600 },
      dinner: { name: 'Quinoa Bowl', items: ['1 cup Quinoa', 'Black Beans', 'Avocado', 'Salsa'], calories: 550 },
      snack: { name: 'Protein Smoothie', items: ['Pea Protein', 'Banana', 'Almond Milk'], calories: 300 }
    }
  }
];