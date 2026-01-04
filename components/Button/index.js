import React from "react";
import { useTheme } from "next-themes";
import data from "../../data/portfolio.json";

const Button = ({ children, type, onClick, classes }) => {
  const { theme } = useTheme();
  
  if (type === "primary") {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`px-8 py-4 text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-500 ease-out border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black ${
          data.showCursor && "cursor-none"
        } ${classes}`}
      >
        {children}
      </button>
    );
  }
  
  return (
    <button
      onClick={onClick}
      type="button"
      className={`px-4 py-2 text-xs uppercase tracking-widest font-medium transition-all duration-300 ease-out hover:text-luxury-gold ${
        data.showCursor && "cursor-none"
      } ${classes}`}
    >
      {children}
    </button>
  );
};

export default Button;
