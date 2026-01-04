import React from "react";
import Button from "../Button";

import yourData from "../../data/portfolio.json";

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social, index) => (
        <Button
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.title}
        </Button>
      ))}
    </div>
  );
};

export default Socials;
