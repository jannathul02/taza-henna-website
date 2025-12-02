import React from "react";
import "./Gallery.css";

// Add your images here
import img1 from "../../assets/images/hatijahand.jpg";
import img2 from "../../assets/images/hatojahandbow.jpg";
import img3 from "../../assets/images/myhand.jpg";
import img4 from "../../assets/images/myhandfront.jpg";
import img5 from "../../assets/images/taskaleg.jpg";

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5]; // add more here

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Henna Gallery</h2>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt="Henna design" className="gallery-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
