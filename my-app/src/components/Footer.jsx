import React from 'react';
import Linkedin from '../assets/linkedin.png';
import Email from '../assets/mail.png';
import GitHub from '../assets/github.png';

export default function Footer() {
  return (
    <div className='footer'>
      <a
        href='mailto:tpolite4@gmail.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={Email} alt='Email' className='email-img' />
      </a>
      <a
        href='https://www.linkedin.com/in/tylerpolite/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={Linkedin} alt='LinkedIn' className='linkedin-img' />
      </a>
      <a
        href='https://github.com/Tpolite4'
        target='_blank'
        rel='noopener  noreferrer'
      >
        <img src={GitHub} alt='Github'></img>
      </a>
    </div>
  );
}
