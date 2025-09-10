import React from 'react';
import './App.css';
import ProfileCard from './components/ProfileCard';
import Footer from './components/Footer';
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
      <div className='footer-wrapper'>
        <div className='footer'></div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
