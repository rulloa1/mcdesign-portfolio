import React from "react";

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div
        className="relative overflow-hidden aspect-[4/5] tablet:aspect-[3/4] laptop:aspect-[16/11] bg-gray-50 dark:bg-[#111]"
      >
        <img
          alt={name}
          className="h-full w-full object-cover transition-transform duration-[1.5s] cubic-bezier(0.2, 1, 0.3, 1) group-hover:scale-110"
          src={img}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-700" />
        
        {/* Overlay Info for Mobile/Hover */}
        <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hidden laptop:block">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white font-bold">View Case Study</span>
        </div>
      </div>
      
      <div className="mt-10 space-y-4">
        <div className="flex items-baseline gap-4">
          <span className="text-[10px] font-bold opacity-30 tracking-widest">01</span>
          <h3 className="text-3xl laptop:text-4xl font-playfair font-bold tracking-tight group-hover:text-luxury-gold transition-colors duration-500">
            {name ? name : "Project Name"}
          </h3>
        </div>
        <p className="text-lg font-inter font-light opacity-50 line-clamp-2 leading-relaxed max-w-xl ml-8">
          {description ? description : "Description"}
        </p>
        <div className="pt-4 ml-8">
          <div className="h-px w-12 bg-black dark:bg-white group-hover:w-24 group-hover:bg-luxury-gold transition-all duration-700" />
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
