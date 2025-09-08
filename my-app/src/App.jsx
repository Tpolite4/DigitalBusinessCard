import React from 'react';
import './App.css';
import ProfileCard from './components/ProfileCard';
import Buttons from './components/Buttons';
import Header from './components/Header';
import Content from './components/Content';
import Skills from './components/SkillsIcon';

function App() {
  return (
    <div className='page'>
      <ProfileCard />
      <Header />
      <Skills />
      <Content />
      <Buttons />

    </div>
  );
}

export default App;
