import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons
import Image1 from "../../assets/hero/banner1.png";
import Image2 from "../../assets/hero/banner2.png";
import Image3 from "../../assets/hero/banner3.png";

const ImageList = [Image1, Image2, Image3];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ImageList.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  // Handle next and previous buttons
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ImageList.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? ImageList.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-[8]"></div>

      {/* Image rotation */}
      <div className="relative w-full h-full flex justify-center items-center">
        {ImageList.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`absolute transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            } w-full h-auto object-cover`}
          />
        ))}
      </div>

      {/* Left and Right navigation buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-300 transition-all text-xl"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-300 transition-all text-xl"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Hero;
