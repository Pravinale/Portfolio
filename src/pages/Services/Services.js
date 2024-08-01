import React from 'react';
import './Services.css'
import { FaLaptopCode, FaPaintBrush, FaMobileAlt, FaSearch } from 'react-icons/fa';

const Services = () => {
  return (
    <div className='services-container'>
      <h1>Services</h1>
      <div className='services-content'>

        <div className='services'>
          <span><FaLaptopCode/></span>
          <h2>Web Development</h2>
          <p>Creating dynamic and responsive websites using the latest technologies.</p>
        </div>

        <div className='services'>
          <span><FaPaintBrush/></span>
          <h2>Web Design</h2>
          <p>Designing visually appealing and user-friendly web interfaces.</p>
        </div>

        <div className='services'>
          <span><FaMobileAlt/></span>
          <h2>Responsive Web Design</h2>
          <p>Ensuring websites are optimized for all devices and screen sizes.</p>
        </div>

        {/* <div className='services'>
          <span><FaSearch/></span>
          <h2>SEO Optimization</h2>
          <p>Improving website visibility and search engine rankings.</p>
        </div> */}

      </div>
    </div>
  );
};

export default Services;
