import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import car1 from "../assets/car1.png";
import car2 from "../assets/car2.png";
import car3 from "../assets/car3.png";
import car4 from "../assets/car4.png";
import car5 from "../assets/car5.png";

const images = [
  { id: 1, src: car1 },
  { id: 2, src: car2 },
  { id: 3, src: car3 },
  { id: 4, src: car4 },
  { id: 5, src: car5 },
];

export default function ProfessionalCarousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full overflow-hidden pt-20">
      <div className="relative w-full overflow-hidden">

        {/* Slider Container */}
        <div className="relative w-full aspect-[1672/613] overflow-hidden">

          {/* Image */}
          <img
            src={images[current].src}
            alt={`Slide ${current + 1}`}
            className="w-full h-full object-fill transition-all duration-700"
          />

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 sm:left-3 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-1.5 sm:p-2 rounded-full shadow-lg transition duration-300 z-10"
          >
            <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 sm:right-3 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-1.5 sm:p-2 rounded-full shadow-lg transition duration-300 z-10"
          >
            <ChevronRight size={18} className="sm:w-5 sm:h-5" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 sm:bottom-4 w-full flex justify-center gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition-all duration-300 rounded-full ${
                  current === index
                    ? "w-5 sm:w-6 h-2 bg-white"
                    : "w-2 h-2 bg-white/50"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}