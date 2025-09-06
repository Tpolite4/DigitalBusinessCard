import React from 'react';
import Linkedin from '../assets/linkedin.png';
import Email from '../assets/mail.png';

export default function Buttons() {
  return (
    <div className='buttons'>
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
    </div>
  );
}
