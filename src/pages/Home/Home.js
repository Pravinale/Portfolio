import React, { useState } from 'react';
import './Home.css';
import Face from '../../components/Face/Face';
import About from '../About/About';
import Project from '../Projects/Project';
import Contact from '../Contact/Contact';
import Services from '../../pages/Services/Services'

const Home = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <>
      <div className={`home-container ${activeComponent ? 'blurred' : ''}`}>
        <div className='heading'>
          <h1>Portfolio</h1>
        </div>
        <div className='face-component'>
          <Face />
        </div>
        <div className='home-content'>
          <ul>
            <li onClick={() => handleClick(null)}>Home</li>
            <li onClick={() => handleClick('about')}>About</li>
            <li onClick={() => handleClick('project')}>Projects</li>
            <li onClick={() => handleClick('contact')}>Contact</li>
            <li onClick={() => handleClick('service')}>Services</li>
          </ul>
        </div>
      </div>

      {activeComponent && (
        <div className='popup'>
            <div className='close-page'>
              <h1 onClick={() => handleClick(null)}>Close</h1>
            </div>
            <div className='popup-content'>
              {activeComponent === 'about' && <About />}
              {activeComponent === 'project' && <Project />}
              {activeComponent === 'contact' && <Contact />}
              {activeComponent === 'service' && <Services />}
            </div>
        </div>
      )}
    </>
  );
}

export default Home;
