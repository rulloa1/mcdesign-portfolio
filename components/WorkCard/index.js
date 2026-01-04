import React from "react";

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div
      className="group cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      <div
        className="relative overflow-hidden aspect-[4/5] tablet:aspect-[3/4] laptop:aspect-[16/10] bg-gray-100 dark:bg-gray-900"
      >
        <img
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          src={img}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
      </div>
      <div className="mt-6 space-y-2">
        <h3 className="text-2xl laptop:text-3xl font-playfair font-medium tracking-tight group-hover:text-luxury-gold transition-colors duration-300">
          {name ? name : "Project Name"}
        </h3>
        <p className="text-lg font-inter font-light opacity-60 line-clamp-2 leading-relaxed">
          {description ? description : "Description"}
        </p>
        <div className="pt-2">
          <span className="text-xs uppercase tracking-[0.2em] font-medium border-b border-black dark:border-white pb-1 group-hover:border-luxury-gold group-hover:text-luxury-gold transition-all duration-300">
            View Project
          </span>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
