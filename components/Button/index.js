import React from "react";
import { useTheme } from "next-themes";
import data from "../../data/portfolio.json";

const Button = ({ children, type, onClick, classes, ...otherProps }) => {
  const { theme } = useTheme();
  const { className: customClassName, ...rest } = otherProps;

  // Determine if this is a link or a button
  const isLink = typeof otherProps.href !== "undefined";
  const Component = isLink ? "a" : "button";

  // Base styles
  let baseClass = "";
  if (type === "primary") {
    baseClass =
      "px-8 py-4 text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-500 ease-out border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black";
  } else {
    baseClass =
      "px-4 py-2 text-xs uppercase tracking-widest font-medium transition-all duration-300 ease-out hover:text-luxury-gold";
  }

  // Combine classes
  const cursorClass = data.showCursor ? "cursor-none" : "";
  const finalClassName = `${baseClass} ${cursorClass} ${classes || ""} ${
    customClassName || ""
  }`.trim();

  return (
    <Component
      onClick={onClick}
      type={!isLink ? "button" : undefined}
      className={finalClassName}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Button;
