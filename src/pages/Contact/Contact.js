import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">

      {/* LEFT SIDE MAP */}
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.764105592278!2d80.15656580000002!3d12.922877400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f1a738eb109%3A0x3fbf73b8f12f0b5b!2sTAZA%20HENNA!5e0!3m2!1sen!2sin!4v1764670617854!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="contact-form">
        <h2>Contact / Book Henna Service</h2>

        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Your Phone Number" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

    </div>
  );
}

export default Contact;
