import React from 'react';
import Navbar from './Navbar';

function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className="about-us">
        <h1>About Us</h1>
        <p>Welcome to our organization! Here, we strive to make a positive impact on society...</p>
        {/* Add more content as needed */}
      </div>
    </div>
  );
}

export default AboutUs;
