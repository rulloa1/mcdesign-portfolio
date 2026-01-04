import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop - 100,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop - 100,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1 }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"} min-h-screen`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name} | Visionary Designer & Developer</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto px-6 laptop:px-0">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        
        <main>
          {/* Hero Section */}
          <section className="min-h-[80vh] flex flex-col justify-center mt-10 laptop:mt-0">
            <div className="max-w-6xl">
              <div className="overflow-hidden">
                <h1
                  ref={textOne}
                  className="text-5xl tablet:text-8xl laptop:text-9xl font-playfair font-bold leading-[0.9] tracking-tighter"
                >
                  {data.headerTaglineOne}
                </h1>
              </div>
              <div className="overflow-hidden mt-2">
                <h1
                  ref={textTwo}
                  className="text-5xl tablet:text-8xl laptop:text-9xl font-playfair font-bold leading-[0.9] tracking-tighter text-luxury-gold italic"
                >
                  {data.headerTaglineTwo}
                </h1>
              </div>
              
              <div className="mt-16 grid grid-cols-1 laptop:grid-cols-2 gap-10 items-end">
                <div className="space-y-4">
                  <h2
                    ref={textThree}
                    className="text-xl tablet:text-2xl font-inter font-light opacity-70 leading-relaxed"
                  >
                    {data.headerTaglineThree}
                  </h2>
                  <h2
                    ref={textFour}
                    className="text-xl tablet:text-2xl font-inter font-light opacity-70 leading-relaxed"
                  >
                    {data.headerTaglineFour}
                  </h2>
                </div>
                <div className="flex laptop:justify-end">
                  <Socials />
                </div>
              </div>
            </div>
          </section>

          {/* Work Section */}
          <section className="mt-40 laptop:mt-60" ref={workRef}>
            <div className="flex flex-col laptop:flex-row laptop:items-end justify-between border-b border-gray-100 dark:border-gray-900 pb-8 mb-20">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.4em] font-bold text-luxury-gold">Portfolio</span>
                <h2 className="text-4xl laptop:text-7xl font-playfair font-bold">Selected Works</h2>
              </div>
              <p className="mt-6 laptop:mt-0 max-w-xs text-sm opacity-50 font-inter leading-relaxed">
                A curated selection of luxury residential and commercial projects showcasing visionary design.
              </p>
            </div>

            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-x-12 gap-y-24 laptop:gap-x-20 laptop:gap-y-32">
              {data.projects.map((project, index) => (
                <div key={project.id} className={index % 2 !== 0 ? "laptop:mt-32" : ""}>
                  <WorkCard
                    img={project.imageSrc}
                    name={project.title}
                    description={project.description}
                    onClick={() => window.open(project.url)}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Expertise Section */}
          <section className="mt-40 laptop:mt-60">
            <div className="grid grid-cols-1 laptop:grid-cols-3 gap-20">
              <div className="laptop:col-span-1 space-y-6">
                <span className="text-xs uppercase tracking-[0.4em] font-bold text-luxury-gold">Expertise</span>
                <h2 className="text-4xl laptop:text-6xl font-playfair font-bold leading-tight">Services & <br/>Capabilities</h2>
                <p className="text-lg opacity-60 font-inter font-light leading-relaxed">
                  Delivering excellence across the full spectrum of design and development.
                </p>
                <div className="pt-6">
                  <Button type="primary" onClick={handleAboutScroll}>Learn More</Button>
                </div>
              </div>
              <div className="laptop:col-span-2 grid grid-cols-1 tablet:grid-cols-2 gap-6">
                {data.services.map((service, index) => (
                  <ServiceCard
                    key={index}
                    name={service.title}
                    description={service.description}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="mt-40 laptop:mt-60" ref={aboutRef}>
            <div className="max-w-5xl mx-auto text-center space-y-12">
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-luxury-gold">Our Vision</span>
              <h2 className="text-3xl tablet:text-5xl laptop:text-6xl font-playfair font-medium leading-snug">
                {data.aboutpara}
              </h2>
              <div className="pt-10 flex justify-center gap-10 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                <span className="text-sm tracking-widest uppercase">Excellence</span>
                <div className="h-px w-12 bg-current"></div>
                <span className="text-sm tracking-widest uppercase">Innovation</span>
                <div className="h-px w-12 bg-current"></div>
                <span className="text-sm tracking-widest uppercase">Craftsmanship</span>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
