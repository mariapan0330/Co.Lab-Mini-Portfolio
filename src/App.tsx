import React from 'react';
import { NavBar } from './components/NavBar'
import { Landing } from './components/Landing'
import './App.css';

function App() {
  return (
    <div className="App bg-cover">
      <NavBar />
      <Landing />
      <Landing />
      <Landing />
    </div>
  );
}

export default App;
