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
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1 }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"} min-h-screen selection:bg-luxury-gold selection:text-white`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name} | Visionary Designer & Developer</title>
        <meta name="description" content={data.aboutpara} />
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto px-8 laptop:px-12">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        
        <main>
          {/* Hero Section - Editorial Style */}
          <section className="min-h-[90vh] flex flex-col justify-center py-20">
            <div className="max-w-7xl">
              <div className="space-y-2">
                <div className="overflow-hidden">
                  <h1
                    ref={textOne}
                    className="text-6xl tablet:text-9xl laptop:text-[10rem] font-playfair font-bold leading-[0.85] tracking-tighter"
                  >
                    {data.headerTaglineOne}
                  </h1>
                </div>
                <div className="overflow-hidden">
                  <h1
                    ref={textTwo}
                    className="text-6xl tablet:text-9xl laptop:text-[10rem] font-playfair font-bold leading-[0.85] tracking-tighter text-luxury-gold italic"
                  >
                    {data.headerTaglineTwo}
                  </h1>
                </div>
              </div>
              
              <div className="mt-24 grid grid-cols-1 laptop:grid-cols-12 gap-12 items-end">
                <div className="laptop:col-span-7 space-y-8">
                  <h2
                    ref={textThree}
                    className="text-2xl tablet:text-3xl font-inter font-light opacity-80 leading-relaxed max-w-2xl"
                  >
                    {data.headerTaglineThree}
                  </h2>
                  <h2
                    ref={textFour}
                    className="text-2xl tablet:text-3xl font-inter font-light opacity-80 leading-relaxed max-w-2xl"
                  >
                    {data.headerTaglineFour}
                  </h2>
                </div>
                <div className="laptop:col-span-5 flex laptop:justify-end">
                  <div className="flex flex-col items-start laptop:items-end gap-6">
                    <span className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-40">Follow the Vision</span>
                    <Socials />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Work Section - Curated Gallery */}
          <section className="mt-60" ref={workRef}>
            <div className="flex flex-col laptop:flex-row laptop:items-end justify-between border-b border-gray-100 dark:border-gray-900 pb-12 mb-32">
              <div className="space-y-6">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-luxury-gold">Selected Portfolio</span>
                <h2 className="text-5xl laptop:text-8xl font-playfair font-bold tracking-tight">Curated Works</h2>
              </div>
              <div className="mt-8 laptop:mt-0 max-w-sm">
                <p className="text-base opacity-50 font-inter font-light leading-relaxed">
                  A collection of high-end residential and commercial projects, each defined by technical precision and artistic vision.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-x-16 gap-y-32 laptop:gap-x-24 laptop:gap-y-48">
              {data.projects.map((project, index) => (
                <div key={project.id} className={`${index % 2 !== 0 ? "laptop:mt-48" : ""} group`}>
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

          {/* Expertise Section - Refined Grid */}
          <section className="mt-60">
            <div className="grid grid-cols-1 laptop:grid-cols-12 gap-24">
              <div className="laptop:col-span-4 space-y-8 sticky top-32 h-fit">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-luxury-gold">Capabilities</span>
                <h2 className="text-5xl laptop:text-7xl font-playfair font-bold leading-[1.1]">Technical <br/>Artistry</h2>
                <p className="text-xl opacity-60 font-inter font-light leading-relaxed">
                  Bridging the gap between architectural precision and interior elegance.
                </p>
                <div className="pt-8">
                  <Button type="primary" onClick={handleAboutScroll}>The Philosophy</Button>
                </div>
              </div>
              <div className="laptop:col-span-8 grid grid-cols-1 tablet:grid-cols-2 gap-8">
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

          {/* About Section - Editorial Quote */}
          <section className="mt-60 mb-40" ref={aboutRef}>
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col items-center text-center space-y-16">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-luxury-gold">The Visionary</span>
                <h2 className="text-4xl tablet:text-6xl laptop:text-7xl font-playfair font-medium leading-[1.2] italic">
                  &quot;{data.aboutpara}&quot;
                </h2>
                <div className="flex items-center gap-12 opacity-30">
                  <div className="h-px w-24 bg-current"></div>
                  <span className="text-xs tracking-[0.4em] uppercase font-bold">Rory Roy Ulloa</span>
                  <div className="h-px w-24 bg-current"></div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
