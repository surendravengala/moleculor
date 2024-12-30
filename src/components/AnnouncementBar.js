// src/components/AnnouncementBar.js
import React, { useState, useEffect } from "react";

const AnnouncementBar = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { text: "Welcome to Our Store!" },
    { text: "Get 'Free' Delivery On First 3 Orders" },
    { text: "Get Discount upto '50%' Off On Premium Products" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  // Carousel styles
  const barStyle = {
    background: "linear-gradient(45deg, #ff6b6b, #4ecdc4)",
    color: "white",
    padding: "10px 0",
    overflow: "hidden",
    position: "relative",
    width: "100%",
  };

  const carouselContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    position: "relative",
  };

  const slidesContainerStyle = {
    display: "flex",
    flexDirection: "row",
    transition: "transform 0.5s ease",
    transform: `translateX(-${currentSlide * 100}%)`,
    width: "100%",
  };

  const slideStyle = {
    flex: "0 0 100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  };

  const textStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    maxWidth: "100%",
  };

  return (
    <div style={barStyle}>
      <div style={carouselContainerStyle}>
        <div style={slidesContainerStyle}>
          {slides.map((slide, index) => (
            <div key={index} style={slideStyle}>
              <p style={textStyle}>{slide.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
