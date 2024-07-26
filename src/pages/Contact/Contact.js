import React, { useState } from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [notification, setNotification] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const data = {
      ...formData,
      access_key: '7c936835-1016-48ec-a03e-6dd08bbc88e9'
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    }).then((res) => res.json());

    if (res.success) {
      setNotification('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } else {
      setNotification('Failed to send message. Please try again.');
    }
    setTimeout(() => setNotification(''), 3000);
  };

  return (
    <div className='contact-container'>
      <h1>Contact</h1>
      <div className='contact-content'>
        <div className='contact-left'>
          <div className='address'>
            <span><FaMapMarkerAlt /></span>
            <div className='content'>
              <h1>Address:</h1>
              <p>Ramkot, Kathmandu</p>
              <p>Nepal</p>
            </div>
          </div>

          <div className='phone-no'>
            <span><FaPhone /></span>
            <div className='content'>
              <h1>Phone:</h1>
              <p>9818913355</p>
            </div>
          </div>

          <div className='email'>
            <span><FaEnvelope /></span>
            <div className='content'>
              <h1>Email:</h1>
              <p>pravinale80@gmail.com</p>
            </div>
          </div>
        </div>
        <div className='contact-right'>
        {notification && <div className="notification">{notification}</div>}
          <form onSubmit={onSubmit}>
            <h1>Send Message</h1>

            <h2>Full Name</h2>
            <input
              name="name"
              placeholder='Your Name'
              value={formData.name}
              onChange={handleChange}
              required
            />

            <h2>Email</h2>
            <input
              name="email"
              type="email"
              placeholder='Your Email'
              value={formData.email}
              onChange={handleChange}
              required
            />

            <h2>Type Your Message</h2>
            <textarea
              name="message"
              placeholder='Write message...'
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit">Send</button>
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default Contact;
