import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Learnings from './components/Learnings';
import Projects from './components/Projects';
import Reports from './components/Reports';
import Achievements from './components/Achievements';
import './components/styles/App.css';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Learnings />
        <Projects />
        <Reports />
        <Achievements />
      </main>
    </>
  );
}

export default App;
