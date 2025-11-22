import React, { useState } from 'react';
import { WORKOUTS } from '../constants';
import { MuscleGroup, WorkoutType } from '../types';
import ExerciseCard from '../components/ExerciseCard';
import { Search, Filter, Dumbbell, Home } from 'lucide-react';

const MUSCLE_GROUPS: MuscleGroup[] = ['Chest', 'Back', 'Shoulders', 'Arms', 'Legs', 'Abs'];

const Workouts: React.FC = () => {
  const [selectedType, setSelectedType] = useState<WorkoutType>('Gym');
  const [selectedGroup, setSelectedGroup] = useState<MuscleGroup | 'All'>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredWorkouts = WORKOUTS.filter(workout => {
    const matchesType = workout.type === selectedType;
    const matchesGroup = selectedGroup === 'All' || workout.muscleGroup === selectedGroup;
    const matchesSearch = workout.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          workout.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesGroup && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        
        {/* Header & Type Toggle */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Choose Your Arena</h1>
          <p className="text-slate-600 mb-8">Select your preferred workout environment.</p>
          
          <div className="inline-flex bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm mb-8">
            <button
              onClick={() => { setSelectedType('Gym'); setSelectedGroup('All'); }}
              className={`flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all ${
                selectedType === 'Gym' 
                  ? 'bg-slate-900 text-white shadow-md' 
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Dumbbell className="w-5 h-5" /> Gym
            </button>
            <button
              onClick={() => { setSelectedType('Home'); setSelectedGroup('All'); }}
              className={`flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all ${
                selectedType === 'Home' 
                  ? 'bg-green-500 text-white shadow-md' 
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Home className="w-5 h-5" /> Home
            </button>
          </div>
        </div>

        {/* Search & Filter Row */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6 border-t border-slate-200 pt-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              {selectedType} Exercises <span className="text-slate-400 text-lg font-normal">({filteredWorkouts.length})</span>
            </h2>
          </div>
          
          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm shadow-sm"
              placeholder="Search exercises..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Muscle Group Filters */}
        <div className="mb-10 overflow-x-auto hide-scrollbar pb-2">
          <div className="flex space-x-2">
            <button
              onClick={() => setSelectedGroup('All')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                selectedGroup === 'All' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Muscles
            </button>
            {MUSCLE_GROUPS.map(group => (
              <button
                key={group}
                onClick={() => setSelectedGroup(group)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  selectedGroup === group 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {group}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filteredWorkouts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorkouts.map(workout => (
              <ExerciseCard key={workout.id} exercise={workout} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 border-dashed">
            <div className="inline-block p-4 bg-slate-50 rounded-full mb-4">
              <Filter className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-medium text-slate-900">No exercises found</h3>
            <p className="text-slate-500">Try adjusting your search or selecting a different muscle group.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Workouts;