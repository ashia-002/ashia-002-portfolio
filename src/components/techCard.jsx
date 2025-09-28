// src/components/TechCard.jsx
import React from 'react';

const TechCard = ({
  title,
  technologies,
  width = 'w-full',
  bgColor = 'bg-black',
  textColor = 'text-white/70',
  strokeColor = 'shadow-md hover:shadow-lg',
  border = 'border border-white/60'
}) => {
  return (
    <div
      className={`
        ${width} 
        max-w-3xl 
        ${bgColor} 
        ${textColor}
        ${border} 
        rounded-3xl 
        px-6 py-5 
        transition-transform duration-300 ease-in-out 
        hover:scale-[1.02] 
        ${strokeColor}
        font-inter 
        text-sm
      `}
    >
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <div className="flex flex-wrap text-base leading-relaxed">
        {technologies.map((tech, index) => (
          <span key={index} className="mr-1 whitespace-nowrap">
            {tech}
            {index < technologies.length - 1 && ' / '}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechCard;
