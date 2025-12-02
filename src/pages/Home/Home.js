import React from 'react';
import './Home.css';
import banner from '../../assets/images/banner.jpeg';

const Home = () => {
  return (
    <div className="home">

      <div className="home-left">
        <img src={banner} alt="Banner" className="home-banner" />
      </div>

      <div className="home-right">
        <h2>🌿 About Taza Henna</h2>

        <p>
          Welcome to <strong>Taza Henna</strong>, where tradition meets elegance.
          We believe that henna is more than art — it is beauty, culture, and celebration.
        </p>

        <p>
          At Taza Henna, we create fresh, natural, and beautifully detailed mehndi designs
          for every occasion. Our henna is 100% natural, hand-mixed for a deep stain
          and safe, skin-friendly experience.
        </p>

        <p>
          Whether it’s a bridal event, engagement, party, festival, or a simple personal moment,
          Taza Henna is here to make it special. Every design is crafted with patience,
          creativity, and love.
        </p>

        <h3>Our Mission</h3>
        <ul>
          <li>✔ Professional, comfortable, friendly service</li>
          <li>✔ Customized designs matching your style</li>
          <li>✔ Making your special moments memorable</li>
        </ul>
      </div>

    </div>
  );
};

export default Home;
