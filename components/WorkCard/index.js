import React from "react";

const WorkCard = ({ img, name, description, onClick, href }) => {
  const Component = href ? "a" : "div";
  const props = href
    ? {
        href,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {
        onClick,
      };

  return (
    <Component
      className="group cursor-pointer block"
      {...props}
    >
      <div
        className="relative overflow-hidden aspect-[4/5] tablet:aspect-[3/4] laptop:aspect-[16/11] bg-gray-50 dark:bg-[#111] image-reveal"
      >
        <img
          alt={name}
          className="h-full w-full object-cover transition-transform duration-[2s] cubic-bezier(0.2, 1, 0.3, 1) group-hover:scale-110"
          src={img}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-1000" />
      </div>
      
      <div className="mt-12 space-y-6">
        <div className="flex items-baseline gap-6">
          <span className="text-[10px] font-bold opacity-20 tracking-[0.5em]">PROJECT</span>
          <h3 className="text-3xl laptop:text-5xl font-playfair font-bold tracking-tight group-hover:text-luxury-gold transition-colors duration-700 text-underline-effect">
            {name ? name : "Project Name"}
          </h3>
        </div>
        <p className="text-xl font-inter font-light opacity-40 line-clamp-2 leading-relaxed max-w-2xl ml-14">
          {description ? description : "Description"}
        </p>
        <div className="pt-4 ml-14 flex items-center gap-4 opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-700">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-luxury-gold">Explore Details</span>
          <div className="h-px w-12 bg-luxury-gold" />
        </div>
      </div>
    </Component>
  );
};

export default WorkCard;
