import React from 'react';
import JS from '../assets/java-script.png';
import Reactlogo from '../assets/reactlogo.png';
import TS from '../assets/typescript.png';
import PG from '../assets/postgre.png';

export default function Skills() {
  return (
    <div className='skills'>
      <img src={JS} alt='javascript'></img>
      <img src={Reactlogo} alt='react'></img>
      <img src={TS} alt='typescript'></img>
      <img src={PG} alt='postgre'></img>
    </div>
  );
}
