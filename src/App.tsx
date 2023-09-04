import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar'
import { Landing } from './components/Landing'
import { TechStack } from './components/TechStack';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Projects } from './components/Projects';
import { Riddle } from './components/Riddle';

function App() {
  return (
    <>
    <div className="App bg-cover font-[Poppins]">
      <NavBar />
      <Landing />
      <TechStack />
      <Experience />
      <Projects />
      <Riddle/>
    </div>
    <div>
      <Footer />
    </div>
    </>
  );
}

export default App;
