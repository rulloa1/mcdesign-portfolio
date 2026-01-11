import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import Link from "next/link";
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
      <Popover className="block tablet:hidden mt-8">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-4">
              <h1 className="font-playfair font-bold text-2xl tracking-tighter">
                <Link href="/">
                  <a className="hover:text-luxury-gold transition-all duration-500">
                    {name.toUpperCase()}
                  </a>
                </Link>
              </h1>

              <div className="flex items-center gap-6">
                {data.darkMode && mounted && (
                  <button
                    aria-label="Toggle Dark Mode"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="p-2"
                  >
                    <img
                      className="h-5 w-5 opacity-60 hover:opacity-100 transition-opacity"
                      src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                      alt="Toggle Theme"
                    />
                  </button>
                )}

                <Popover.Button className="p-2" aria-label="Toggle Menu">
                  <img
                    className="h-6"
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
              className={`absolute right-0 z-50 w-full p-12 ${
                theme === "dark" ? "bg-[#0a0a0a]" : "bg-white"
              } shadow-2xl border-b border-gray-100 dark:border-gray-900`}
            >
              <div className="flex flex-col gap-10 text-center">
                {!isBlog ? (
                  <>
                    <button onClick={() => { handleWorkScroll(); }} className="text-3xl font-playfair font-bold">Work</button>
                    <button onClick={() => { handleAboutScroll(); }} className="text-3xl font-playfair font-bold">About</button>
                    {showBlog && <button onClick={() => router.push("/blog")} className="text-3xl font-playfair font-bold">Blog</button>}
                    {showResume && <button onClick={() => router.push("/resume")} className="text-3xl font-playfair font-bold">Resume</button>}
                    <button onClick={() => window.open(`mailto:${data.socials.find(s => s.title === "Email")?.link.replace("mailto:", "")}`)} className="text-3xl font-playfair font-bold text-luxury-gold">Contact</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => router.push("/")} className="text-3xl font-playfair font-bold">Home</button>
                    {showBlog && <button onClick={() => router.push("/blog")} className="text-3xl font-playfair font-bold">Blog</button>}
                    {showResume && <button onClick={() => router.push("/resume")} className="text-3xl font-playfair font-bold">Resume</button>}
                    <button onClick={() => window.open(`mailto:${data.socials.find(s => s.title === "Email")?.link.replace("mailto:", "")}`)} className="text-3xl font-playfair font-bold text-luxury-gold">Contact</button>
                  </>
                )}
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>

      <nav
        className={`py-12 hidden tablet:flex flex-row items-center justify-between sticky top-0 z-50 bg-white/60 dark:bg-[#0a0a0a]/60 backdrop-blur-2xl border-b border-transparent hover:border-gray-100 dark:hover:border-gray-900 transition-all duration-700`}
      >
        <h1 className="font-playfair font-bold text-3xl tracking-tighter">
          <Link href="/">
            <a className="hover:text-luxury-gold transition-all duration-500">
              {name.toUpperCase()}
            </a>
          </Link>
        </h1>
        <div className="flex items-center gap-12">
          {!isBlog ? (
            <>
              <button onClick={handleWorkScroll} className="text-[10px] uppercase tracking-[0.4em] font-bold hover:text-luxury-gold transition-colors">Work</button>
              <button onClick={handleAboutScroll} className="text-[10px] uppercase tracking-[0.4em] font-bold hover:text-luxury-gold transition-colors">About</button>
              {showBlog && <button onClick={() => router.push("/blog")} className="text-[10px] uppercase tracking-[0.4em] font-bold hover:text-luxury-gold transition-colors">Blog</button>}
              {showResume && <button onClick={() => router.push("/resume")} className="text-[10px] uppercase tracking-[0.4em] font-bold hover:text-luxury-gold transition-colors">Resume</button>}
            </>
          ) : (
            <>
              <button onClick={() => router.push("/")} className="text-[10px] uppercase tracking-[0.4em] font-bold hover:text-luxury-gold transition-colors">Home</button>
              {showBlog && <button onClick={() => router.push("/blog")} className="text-[10px] uppercase tracking-[0.4em] font-bold hover:text-luxury-gold transition-colors">Blog</button>}
              {showResume && <button onClick={() => router.push("/resume")} className="text-[10px] uppercase tracking-[0.4em] font-bold hover:text-luxury-gold transition-colors">Resume</button>}
            </>
          )}
          <button 
            onClick={() => window.open(`mailto:${data.socials.find(s => s.title === "Email")?.link.replace("mailto:", "")}`)}
            className="px-10 py-3 bg-black text-white dark:bg-white dark:text-black text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-luxury-gold dark:hover:bg-luxury-gold hover:text-white transition-all duration-500"
          >
            Contact
          </button>
          {mounted && theme && data.darkMode && (
            <button
              aria-label="Toggle Dark Mode"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2"
            >
              <img
                className="h-5 w-5 opacity-40 hover:opacity-100 transition-opacity"
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
