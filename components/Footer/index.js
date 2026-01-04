import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";
import data from "../../data/portfolio.json";

const Footer = ({}) => {
  return (
    <footer className="mt-32 laptop:mt-48 pb-10">
      <div className="border-t border-gray-100 dark:border-gray-900 pt-20">
        <div className="grid grid-cols-1 laptop:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl laptop:text-6xl font-playfair font-bold leading-tight">
              Let's create something <br />
              <span className="text-luxury-gold italic">extraordinary</span> together.
            </h2>
            <div className="mt-10">
              <Button 
                type="primary" 
                onClick={() => window.open(`mailto:${data.socials.find(s => s.title === "Email")?.link.replace("mailto:", "")}`)}
              >
                Start a Conversation
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-sm uppercase tracking-[0.3em] font-semibold opacity-50">Connect</h3>
              <Socials />
            </div>
            <div className="mt-12 laptop:mt-0">
              <p className="text-sm font-inter opacity-40 tracking-wide">
                © {new Date().getFullYear()} {data.name.toUpperCase()}. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
