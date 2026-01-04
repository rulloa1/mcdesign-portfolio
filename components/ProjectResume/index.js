import React from "react";

const ProjectResume = ({ dates, type, position, bullets }) => {
  const bulletsList = bullets ? bullets.split(",") : [];

  return (
    <div className="space-y-4">
      <div className="flex flex-col tablet:flex-row justify-between items-baseline gap-2">
        <h3 className="text-2xl font-playfair font-semibold">{position}</h3>
        <span className="text-sm uppercase tracking-widest opacity-50">{dates}</span>
      </div>
      <p className="text-xs uppercase tracking-[0.2em] font-bold text-luxury-gold/80">{type}</p>
      {bulletsList.length > 0 && (
        <ul className="space-y-3 pt-2">
          {bulletsList.map((bullet, index) => (
            <li key={index} className="text-lg font-inter font-light opacity-70 leading-relaxed flex items-start gap-4">
              <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-luxury-gold shrink-0"></span>
              {bullet.trim()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectResume;
