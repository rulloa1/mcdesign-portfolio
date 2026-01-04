import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-playfair font-bold text-xl tracking-tighter cursor-pointer"
              >
                {name.toUpperCase()}
              </h1>

              <div className="flex items-center gap-4">
                {data.darkMode && mounted && (
                  <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <img
                      className="h-5 w-5"
                      src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                      alt="Toggle Theme"
                    />
                  </button>
                )}

                <Popover.Button className="p-2">
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                    alt="Menu"
                  />
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-50 w-full p-8 ${
                theme === "dark" ? "bg-[#0a0a0a]" : "bg-white"
              } shadow-2xl border-b border-gray-100 dark:border-gray-900`}
            >
              <div className="flex flex-col gap-6 text-center">
                {!isBlog ? (
                  <>
                    <button onClick={() => { handleWorkScroll(); }} className="text-2xl font-playfair">Work</button>
                    <button onClick={() => { handleAboutScroll(); }} className="text-2xl font-playfair">About</button>
                    {showBlog && <button onClick={() => router.push("/blog")} className="text-2xl font-playfair">Blog</button>}
                    {showResume && <button onClick={() => router.push("/resume")} className="text-2xl font-playfair">Resume</button>}
                    <button onClick={() => window.open(`mailto:${data.socials.find(s => s.title === "Email")?.link.replace("mailto:", "")}`)} className="text-2xl font-playfair">Contact</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => router.push("/")} className="text-2xl font-playfair">Home</button>
                    {showBlog && <button onClick={() => router.push("/blog")} className="text-2xl font-playfair">Blog</button>}
                    {showResume && <button onClick={() => router.push("/resume")} className="text-2xl font-playfair">Resume</button>}
                    <button onClick={() => window.open(`mailto:${data.socials.find(s => s.title === "Email")?.link.replace("mailto:", "")}`)} className="text-2xl font-playfair">Contact</button>
                  </>
                )}
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>

      <nav
        className={`py-10 hidden tablet:flex flex-row items-center justify-between sticky top-0 z-50 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-playfair font-bold text-2xl tracking-tighter cursor-pointer hover:text-luxury-gold transition-colors"
        >
          {name.toUpperCase()}
        </h1>
        <div className="flex items-center gap-8">
          {!isBlog ? (
            <>
              <button onClick={handleWorkScroll} className="text-sm uppercase tracking-[0.2em] font-medium hover:text-luxury-gold transition-colors">Work</button>
              <button onClick={handleAboutScroll} className="text-sm uppercase tracking-[0.2em] font-medium hover:text-luxury-gold transition-colors">About</button>
              {showBlog && <button onClick={() => router.push("/blog")} className="text-sm uppercase tracking-[0.2em] font-medium hover:text-luxury-gold transition-colors">Blog</button>}
              {showResume && <button onClick={() => router.push("/resume")} className="text-sm uppercase tracking-[0.2em] font-medium hover:text-luxury-gold transition-colors">Resume</button>}
            </>
          ) : (
            <>
              <button onClick={() => router.push("/")} className="text-sm uppercase tracking-[0.2em] font-medium hover:text-luxury-gold transition-colors">Home</button>
              {showBlog && <button onClick={() => router.push("/blog")} className="text-sm uppercase tracking-[0.2em] font-medium hover:text-luxury-gold transition-colors">Blog</button>}
              {showResume && <button onClick={() => router.push("/resume")} className="text-sm uppercase tracking-[0.2em] font-medium hover:text-luxury-gold transition-colors">Resume</button>}
            </>
          )}
          <button 
            onClick={() => window.open(`mailto:${data.socials.find(s => s.title === "Email")?.link.replace("mailto:", "")}`)}
            className="px-6 py-2 border border-black dark:border-white text-xs uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
          >
            Contact
          </button>
          {mounted && theme && data.darkMode && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <img
                className="h-5 w-5"
                src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                alt="Toggle Theme"
              />
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
