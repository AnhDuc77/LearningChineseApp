import React, { useState, useEffect } from "react";
import Image1 from "../../assets/hero/Banner-web-khoi-d4.jpg";
import Image2 from "../../assets/hero/banner-web-lich-khai-giang-thang-1.jpg";
import Image3 from "../../assets/hero/banner-web-thanhmai-07.jpg";

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
    </div>
  );
};

export default Hero;
