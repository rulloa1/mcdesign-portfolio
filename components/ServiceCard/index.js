import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ name, description }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="p-8 laptop:p-12 border border-gray-100 dark:border-gray-900 bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:border-luxury-gold/30 transition-all duration-500 group">
      <h3 className="text-2xl laptop:text-3xl font-playfair font-semibold mb-6 group-hover:text-luxury-gold transition-colors duration-300">
        {name ? name : "Heading"}
      </h3>
      <p className="text-lg font-inter font-light opacity-70 leading-relaxed">
        {description
          ? description
          : "Crafting exceptional experiences through visionary design and technical excellence."}
      </p>
    </div>
  );
};

export default ServiceCard;
