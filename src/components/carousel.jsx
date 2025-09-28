import React, { useState, useEffect } from "react";
import { Card } from "../components/card";

const Carousel = ({ skills }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === skills.length - (window.innerWidth >= 768 ? 3 : 1) ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [skills.length]);

  return (
    <div className="relative mt-16 w-full max-w-6xl">
      {/* Add extra top padding to prevent cutting */}
      <div className="py-8 md:py-12 w-full overflow-x-hidden overflow-y-visible"> {/* Added vertical padding */}
        <div className=" w-full">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / (window.innerWidth >= 768 ? 3 : 1))}%)` 
            }}
          >
            {skills.map((project, index) => {
              const position = index - currentIndex;
              const isCenter = window.innerWidth >= 768 ? position === 1 : position === 0;
              const isLeft = window.innerWidth >= 768 ? position === 0 : false;
              const isRight = window.innerWidth >= 768 ? position === 2 : false;
              
              return (
                <div 
                  key={index} 
                  className="w-full md:w-1/3 flex-shrink-0 flex justify-center px-2 md:px-4"
                >
                  <div 
                    className={`
                      transition-all duration-500 ease-out
                      ${isCenter ? 'scale-105 opacity-100 z-10' : ''}
                      ${isLeft ? 'scale-95 opacity-70 -translate-x-2 z-0' : ''}
                      ${isRight ? 'scale-95 opacity-70 translate-x-2 z-0' : ''}
                      ${Math.abs(position) > 1 ? 'scale-90 opacity-40' : ''}
                      ${window.innerWidth < 768 && position !== 0 ? 'opacity-40 scale-95' : ''}
                    `}
                  >
                    <Card {...project} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;