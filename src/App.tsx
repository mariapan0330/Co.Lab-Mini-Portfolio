import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar'
import { Landing } from './components/Landing'
import { TechStack } from './components/TechStack';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
    <div className="App bg-cover">
      <NavBar />
      <Landing />
      <TechStack />
      <Experience />
    </div>
    <div>
      {/* <Footer /> */}
    </div>
    </>
  );
}

export default App;
