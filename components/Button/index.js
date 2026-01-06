import React from "react";
import { useTheme } from "next-themes";
import data from "../../data/portfolio.json";

const Button = ({ children, type, onClick, classes, href, ...otherProps }) => {
  const { theme } = useTheme();

  // Common classes logic
  const commonClasses = data.showCursor && "cursor-none";
  
  if (type === "primary") {
    const primaryClasses = `px-8 py-4 text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-500 ease-out border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black ${commonClasses} ${classes}`;

    if (href) {
      return (
        <a href={href} className={primaryClasses} {...otherProps}>
          {children}
        </a>
      );
    }

    return (
      <button
        onClick={onClick}
        type="button"
        className={primaryClasses}
        {...otherProps}
      >
        {children}
      </button>
    );
  }
  
  const defaultClasses = `px-4 py-2 text-xs uppercase tracking-widest font-medium transition-all duration-300 ease-out hover:text-luxury-gold ${commonClasses} ${classes}`;

  if (href) {
    return (
      <a href={href} className={defaultClasses} {...otherProps}>
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      type="button"
      className={defaultClasses}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
