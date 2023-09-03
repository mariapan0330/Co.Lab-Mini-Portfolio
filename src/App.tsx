import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar'
import { Landing } from './components/Landing'
import { TechStack } from './components/TechStack';

function App() {
  return (
    <div className="App bg-cover">
      <NavBar />
      <Landing />
      <TechStack />
      <Landing />
    </div>
  );
}

export default App;
