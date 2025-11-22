import React from 'react';
import { Exercise } from '../types';
import { CheckCircle2, Home, Dumbbell } from 'lucide-react';

interface Props {
  exercise: Exercise;
}

const ExerciseCard: React.FC<Props> = ({ exercise }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden bg-slate-100">
        <img 
          src={exercise.imageUrl} 
          alt={exercise.title} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <div className={`text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1 ${
            exercise.type === 'Home' ? 'bg-green-500 text-white' : 'bg-slate-800 text-white'
          }`}>
            {exercise.type === 'Home' ? <Home className="w-3 h-3" /> : <Dumbbell className="w-3 h-3" />}
            {exercise.type}
          </div>
          <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            {exercise.muscleGroup}
          </div>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{exercise.title}</h3>
        <p className="text-slate-600 text-sm mb-4 flex-grow">{exercise.description}</p>
        
        <div className="flex justify-between items-center text-sm font-medium text-slate-500 mb-4 bg-slate-50 p-3 rounded-lg">
          <div>
            <span className="block text-xs text-slate-400 uppercase tracking-wider">Sets</span>
            <span className="text-slate-900">{exercise.sets}</span>
          </div>
          <div className="w-px h-8 bg-slate-200"></div>
          <div>
            <span className="block text-xs text-slate-400 uppercase tracking-wider">Reps</span>
            <span className="text-slate-900">{exercise.reps}</span>
          </div>
        </div>

        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full text-center py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-blue-600 hover:border-blue-200 transition-all text-sm font-medium"
        >
          {isExpanded ? 'Hide Instructions' : 'View Instructions'}
        </button>

        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-slate-100 animate-in fade-in slide-in-from-top-2 duration-200">
            <h4 className="text-sm font-semibold text-slate-900 mb-3">How to perform:</h4>
            <ul className="space-y-2">
              {exercise.instructions.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExerciseCard;