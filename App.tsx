import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Workouts from './pages/Workouts';
import Diets from './pages/Diets';
import BMI from './pages/BMI';
import Login from './pages/Login';
import CustomDiet from './pages/CustomDiet';
import WorkoutLog from './pages/WorkoutLog';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/diets" element={<Diets />} />
          <Route path="/bmi" element={<BMI />} />
          <Route path="/login" element={<Login />} />
          <Route path="/custom-diet" element={<CustomDiet />} />
          <Route path="/workout-log" element={<WorkoutLog />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;