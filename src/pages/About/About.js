import React from 'react';
import './About.css';
import myphoto from '../../assets/MyPhoto.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import cv from '../../CV/TestCV.pdf'

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-me'>
        <h2>About Me</h2>
        <p>Hi, I'm Pravin Ale, a front-end developer 
          with expertise in HTML, CSS, JavaScript, and React. 
          I specialize in creating dynamic and responsive web 
          experiences, combining my skills to build intuitive 
          and engaging interfaces.</p><br/>
        <p>My passion for front-end 
          development drives me to continuously explore new 
          technologies and improve my craft, ensuring that every 
          project I work on delivers both functionality and aesthetic 
          appeal.</p>
        <div className='skill-img'>
          <img src={html}/>
          <img src={css}/>
          <img src={js}/>
          <img src={react}/>
        </div>
        <a href={cv}><button>Download CV</button></a>
      </div>
      <div className='image'>
        <img src={myphoto} alt='img'/>
      </div>
    </div>
  );
};

export default About;


