import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Taza Henna | Follow on Instagram:{" "}
        <a
          href="https://instagram.com/taza.henna"
          target="_blank"
          rel="noopener noreferrer"
        >
          @taza.henna
        </a>
      </p>
    </footer>
  );
};

export default Footer;
