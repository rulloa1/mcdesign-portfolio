import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";
import data from "../../data/portfolio.json";

const Footer = ({}) => {
  return (
    <footer className="mt-60 pb-20">
      <div className="border-t border-gray-100 dark:border-gray-900 pt-32">
        <div className="grid grid-cols-1 laptop:grid-cols-12 gap-24">
          <div className="laptop:col-span-7 space-y-12">
            <h2 className="text-5xl laptop:text-8xl font-playfair font-bold leading-[1.1] tracking-tight">
              Let's create something <br />
              <span className="text-luxury-gold italic">extraordinary</span> together.
            </h2>
            <div className="pt-8">
              <Button 
                type="primary" 
                onClick={() => window.open(`mailto:${data.socials.find(s => s.title === "Email")?.link.replace("mailto:", "")}`)}
                classes="!px-12 !py-6 !text-sm"
              >
                Start a Conversation
              </Button>
            </div>
          </div>
          <div className="laptop:col-span-5 flex flex-col justify-between items-start laptop:items-end text-left laptop:text-right">
            <div className="space-y-10">
              <h3 className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-30">The Network</h3>
              <Socials className="laptop:justify-end" />
            </div>
            <div className="mt-24 laptop:mt-0 space-y-4">
              <p className="text-[10px] font-bold opacity-20 tracking-[0.4em] uppercase">
                Visionary Design & Technical Excellence
              </p>
              <p className="text-[10px] font-bold opacity-40 tracking-[0.2em] uppercase">
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
