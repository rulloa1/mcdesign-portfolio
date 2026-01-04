import React from "react";
import Button from "../Button";
import yourData from "../../data/portfolio.json";

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap gap-2`}>
      {yourData.socials.map((social, index) => (
        <Button 
          key={index} 
          onClick={() => window.open(social.link)}
          classes="!px-0 mr-6 last:mr-0"
        >
          {social.title}
        </Button>
      ))}
    </div>
  );
};

export default Socials;
