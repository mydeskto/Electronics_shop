import React from 'react';
import './About.scss';

const About = () => {

  const email = 'zabicontact3@gmail.com'
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to [Your Company Name], your number one source for all things electronics.
        We’re dedicated to providing you the very best of electronic products, with an emphasis on quality, customer service, and uniqueness.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is to bring the latest and greatest electronics to your doorstep. We believe in the power of technology to enhance everyday life and strive to make it accessible to everyone.
      </p>
      <h2>Our Values</h2>
      <ul>
        <li>Quality: We believe in offering only the best products.</li>
        <li>Customer Satisfaction: Your happiness is our priority.</li>
        <li>Innovation: We are always on the lookout for the latest trends and technologies.</li>
      </ul>
      <h2>Contact Us</h2>
      <p>
        If you have any questions or comments, feel free to reach out to us at <a href={`mailto:${email}`} style={{ marginLeft: '5px' }}>
          {email}
        </a> .
      </p>
    </div>
  );
};

export default About;