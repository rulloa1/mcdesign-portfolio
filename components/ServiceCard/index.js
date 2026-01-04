import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ name, description }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="p-12 laptop:p-16 border border-gray-100 dark:border-gray-900 bg-white/30 dark:bg-white/5 backdrop-blur-xl hover:border-luxury-gold/40 transition-all duration-700 group relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-0 bg-luxury-gold group-hover:h-full transition-all duration-700" />
      
      <h3 className="text-3xl laptop:text-4xl font-playfair font-bold mb-8 group-hover:text-luxury-gold transition-colors duration-500">
        {name ? name : "Heading"}
      </h3>
      <p className="text-xl font-inter font-light opacity-60 leading-relaxed">
        {description
          ? description
          : "Crafting exceptional experiences through visionary design and technical excellence."}
      </p>
      
      <div className="mt-12 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="h-px w-8 bg-luxury-gold" />
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gold">Excellence</span>
      </div>
    </div>
  );
};

export default ServiceCard;
