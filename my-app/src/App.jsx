import React from 'react';
import './App.css';
import ProfileCard from './components/ProfileCard';
import Buttons from './components/Buttons';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <div className='page'>
      <ProfileCard />
      <Header />
      <Buttons />
      <Content />
    </div>
  );
}

export default App;
