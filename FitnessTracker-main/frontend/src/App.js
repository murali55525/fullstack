import React, { useState } from 'react';
import WorkoutForm from './components/WorkoutForm';
import WorkoutHistory from './components/WorkoutHistory';
import WorkoutStats from './components/WorkoutStats';
import ExploreExercises from './components/ExploreExercises';
import VideoTutorials from './components/VideoTutorials';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('logWorkout');

  return (
    <div>
      <div>
        <header className="app-header">
          <h1 className="app-title">Fit Track</h1>
          <nav className="nav-buttons">
            <button onClick={() => setActiveTab('logWorkout')}>Workout Log</button>
            <button onClick={() => setActiveTab('workoutHistory')}>View History</button>
            <button onClick={() => setActiveTab('workoutStats')}>Statistics & Analytics</button>
            <button onClick={() => setActiveTab('exploreExercises')}>Explore Exercises</button>
            <button onClick={() => setActiveTab('videoTutorials')}>Video Tutorials</button>
          </nav>
        </header>

        {/* Conditionally render components based on the activeTab */}
        {activeTab === 'logWorkout' && <WorkoutForm />}
        {activeTab === 'workoutHistory' && <WorkoutHistory />}
        {activeTab === 'workoutStats' && <WorkoutStats />}
        {activeTab === 'exploreExercises' && <ExploreExercises />}
        {activeTab === 'videoTutorials' && <VideoTutorials />}
      </div>
    </div>
  );
}

export default App;
