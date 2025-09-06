import React from 'react';
import Profile from '../assets/profilepic.JPG';

export default function ProfileCard() {
  return (
    <div>
      <img src={Profile} alt='profile' className='profile' />
    </div>
  );
}
