import React, { useState, useEffect } from 'react';
import { WorkoutLogEntry, WorkoutSet } from '../types';
import { Calendar, Plus, Save, Trash2, ClipboardList, Dumbbell, X } from 'lucide-react';

const WorkoutLog: React.FC = () => {
  const [logs, setLogs] = useState<WorkoutLogEntry[]>([]);
  const [isAdding, setIsAdding] = useState(false);

  // Form State
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [workoutName, setWorkoutName] = useState('');
  const [currentSets, setCurrentSets] = useState<WorkoutSet[]>([]);
  
  // Temp Set Input
  const [exerciseInput, setExerciseInput] = useState('');
  const [setsInput, setSetsInput] = useState('');
  const [repsInput, setRepsInput] = useState('');
  const [weightInput, setWeightInput] = useState('');

  useEffect(() => {
    const savedLogs = localStorage.getItem('fitx_workout_logs');
    if (savedLogs) {
      try {
        setLogs(JSON.parse(savedLogs));
      } catch (e) {
        console.error("Failed to parse workout logs");
      }
    }
  }, []);

  const saveToStorage = (newLogs: WorkoutLogEntry[]) => {
    setLogs(newLogs);
    localStorage.setItem('fitx_workout_logs', JSON.stringify(newLogs));
  };

  const addSet = () => {
    if (!exerciseInput || !setsInput || !repsInput) return;
    
    const newSet: WorkoutSet = {
      id: Date.now().toString(),
      exercise: exerciseInput,
      sets: parseInt(setsInput),
      reps: parseInt(repsInput),
      weight: parseFloat(weightInput) || 0
    };

    setCurrentSets([...currentSets, newSet]);
    setExerciseInput('');
    setSetsInput('');
    setRepsInput('');
    setWeightInput('');
  };

  const removeSet = (id: string) => {
    setCurrentSets(currentSets.filter(s => s.id !== id));
  };

  const saveWorkout = () => {
    if (!date || !workoutName || currentSets.length === 0) {
      alert("Please fill in the date, workout name, and add at least one exercise.");
      return;
    }

    const newLog: WorkoutLogEntry = {
      id: Date.now().toString(),
      date,
      name: workoutName,
      exercises: currentSets
    };

    const updatedLogs = [newLog, ...logs]; // Newest first
    saveToStorage(updatedLogs);
    
    // Reset Form
    setIsAdding(false);
    setWorkoutName('');
    setCurrentSets([]);
    setDate(new Date().toISOString().split('T')[0]);
  };

  const deleteLog = (id: string) => {
    if (confirm("Are you sure you want to delete this workout log?")) {
      saveToStorage(logs.filter(log => log.id !== id));
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">My Fitness Journal</h1>
          <p className="text-slate-600">Track your progress, one rep at a time.</p>
        </div>

        {/* Action Bar */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <ClipboardList className="w-6 h-6 text-blue-600" /> Recent Logs
          </h2>
          <button 
            onClick={() => setIsAdding(!isAdding)}
            className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg shadow-blue-600/20"
          >
            {isAdding ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
            {isAdding ? 'Cancel' : 'Log Workout'}
          </button>
        </div>

        {/* Add Entry Form */}
        {isAdding && (
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 mb-8 animate-in slide-in-from-top-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
                <input 
                  type="date" 
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-slate-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Workout Name</label>
                <input 
                  type="text" 
                  placeholder="e.g., Chest & Triceps"
                  value={workoutName}
                  onChange={(e) => setWorkoutName(e.target.value)}
                  className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-slate-50"
                />
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl mb-6 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-700 mb-3">Add Exercise</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                <div className="col-span-2">
                  <input 
                    type="text" 
                    placeholder="Exercise Name"
                    value={exerciseInput}
                    onChange={(e) => setExerciseInput(e.target.value)}
                    className="w-full p-2 border border-slate-200 rounded-lg text-sm bg-slate-50"
                  />
                </div>
                <div>
                  <input 
                    type="number" 
                    placeholder="Sets"
                    value={setsInput}
                    onChange={(e) => setSetsInput(e.target.value)}
                    className="w-full p-2 border border-slate-200 rounded-lg text-sm bg-slate-50"
                  />
                </div>
                <div>
                  <input 
                    type="number" 
                    placeholder="Reps"
                    value={repsInput}
                    onChange={(e) => setRepsInput(e.target.value)}
                    className="w-full p-2 border border-slate-200 rounded-lg text-sm bg-slate-50"
                  />
                </div>
                <div>
                  <input 
                    type="number" 
                    placeholder="Kg"
                    value={weightInput}
                    onChange={(e) => setWeightInput(e.target.value)}
                    className="w-full p-2 border border-slate-200 rounded-lg text-sm bg-slate-50"
                  />
                </div>
              </div>
              <button 
                onClick={addSet}
                className="mt-3 w-full py-2 bg-slate-800 text-white rounded-lg text-sm font-medium hover:bg-slate-700 transition-colors"
              >
                Add to List
              </button>
            </div>

            {currentSets.length > 0 && (
              <div className="mb-6">
                <ul className="space-y-2">
                  {currentSets.map((set, idx) => (
                    <li key={set.id} className="flex justify-between items-center bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">{idx + 1}</span>
                        <div>
                          <div className="font-medium text-slate-900">{set.exercise}</div>
                          <div className="text-xs text-slate-500">{set.sets} sets × {set.reps} reps @ {set.weight}kg</div>
                        </div>
                      </div>
                      <button onClick={() => removeSet(set.id)} className="text-slate-400 hover:text-red-500">
                        <X className="w-4 h-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button 
              onClick={saveWorkout}
              className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors flex justify-center items-center gap-2"
            >
              <Save className="w-5 h-5" /> Save Workout
            </button>
          </div>
        )}

        {/* Log History */}
        <div className="space-y-4">
          {logs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 border-dashed">
              <Dumbbell className="w-12 h-12 text-slate-200 mx-auto mb-3" />
              <p className="text-slate-500">No logs yet. Start tracking your workouts today!</p>
            </div>
          ) : (
            logs.map(log => (
              <div key={log.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-50 text-blue-600 p-3 rounded-xl text-center min-w-[4rem]">
                      <div className="text-xs font-bold uppercase">{new Date(log.date).toLocaleString('default', { month: 'short' })}</div>
                      <div className="text-xl font-bold">{new Date(log.date).getDate()}</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{log.name}</h3>
                      <p className="text-sm text-slate-500">{log.exercises.length} Exercises</p>
                    </div>
                  </div>
                  <button onClick={() => deleteLog(log.id)} className="text-slate-300 hover:text-red-500 p-2">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-2 border-t border-slate-50 pt-4">
                  {log.exercises.map(exercise => (
                    <div key={exercise.id} className="flex justify-between text-sm">
                      <span className="text-slate-700 font-medium">{exercise.exercise}</span>
                      <span className="text-slate-500 font-mono">
                        {exercise.sets} × {exercise.reps} {exercise.weight > 0 && `(${exercise.weight}kg)`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkoutLog;