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
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1 }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"} min-h-screen`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name} | Visionary Designer</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto px-4 laptop:px-0">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        
        <main className="mt-20 laptop:mt-32">
          <section className="hero-section">
            <div className="max-w-5xl">
              <h1
                ref={textOne}
                className="text-4xl tablet:text-7xl laptop:text-8xl font-playfair font-bold leading-tight"
              >
                {data.headerTaglineOne}
              </h1>
              <h1
                ref={textTwo}
                className="text-4xl tablet:text-7xl laptop:text-8xl font-playfair font-bold leading-tight text-luxury-gold"
              >
                {data.headerTaglineTwo}
              </h1>
              <div className="mt-10 max-w-2xl">
                <h2
                  ref={textThree}
                  className="text-xl tablet:text-2xl laptop:text-3xl font-inter font-light opacity-80"
                >
                  {data.headerTaglineThree}
                </h2>
                <h2
                  ref={textFour}
                  className="text-xl tablet:text-2xl laptop:text-3xl font-inter font-light opacity-80"
                >
                  {data.headerTaglineFour}
                </h2>
              </div>
            </div>
            <Socials className="mt-10" />
          </section>

          <section className="mt-32 laptop:mt-48" ref={workRef}>
            <div className="flex items-baseline justify-between border-b border-gray-200 dark:border-gray-800 pb-4 mb-12">
              <h2 className="text-3xl laptop:text-5xl font-playfair font-semibold">Selected Works</h2>
              <span className="text-sm uppercase tracking-widest opacity-50">Portfolio 2026</span>
            </div>

            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-12 laptop:gap-16">
              {data.projects.map((project) => (
                <WorkCard
                  key={project.id}
                  img={project.imageSrc}
                  name={project.title}
                  description={project.description}
                  onClick={() => window.open(project.url)}
                />
              ))}
            </div>
          </section>

          <section className="mt-32 laptop:mt-48">
            <div className="flex items-baseline justify-between border-b border-gray-200 dark:border-gray-800 pb-4 mb-12">
              <h2 className="text-3xl laptop:text-5xl font-playfair font-semibold">Expertise</h2>
              <span className="text-sm uppercase tracking-widest opacity-50">Services</span>
            </div>
            <div className="grid grid-cols-1 laptop:grid-cols-2 gap-8">
              {data.services.map((service, index) => (
                <ServiceCard
                  key={index}
                  name={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </section>

          <section className="mt-32 laptop:mt-48 mb-20" ref={aboutRef}>
            <div className="flex items-baseline justify-between border-b border-gray-200 dark:border-gray-800 pb-4 mb-12">
              <h2 className="text-3xl laptop:text-5xl font-playfair font-semibold">Vision</h2>
              <span className="text-sm uppercase tracking-widest opacity-50">About</span>
            </div>
            <div className="max-w-4xl">
              <p className="text-2xl laptop:text-4xl font-cormorant leading-relaxed italic opacity-90">
                "{data.aboutpara}"
              </p>
            </div>
          </section>
        </main>

        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5 z-50">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}
        
        <Footer />
      </div>
    </div>
  );
}
