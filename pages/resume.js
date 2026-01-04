import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
import Head from "next/head";
// Data
import data from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    if (!data.showResume) {
      router.push("/");
    }
  }, [router]);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"} min-h-screen`}>
      <Head>
        <title>Resume | {data.name}</title>
      </Head>
      {data.showCursor && <Cursor />}
      
      <div className="gradient-circle"></div>
      
      <div className="container mx-auto px-6 laptop:px-0 mb-20">
        <Header isBlog />
        
        {mount && (
          <div className="mt-20 flex flex-col items-center">
            <div className="w-full max-w-4xl bg-white/50 dark:bg-white/5 backdrop-blur-md p-10 tablet:p-20 border border-gray-100 dark:border-gray-900 shadow-2xl">
              <div className="flex flex-col tablet:flex-row justify-between items-start gap-10 border-b border-gray-100 dark:border-gray-900 pb-12">
                <div className="space-y-4">
                  <h1 className="text-5xl font-playfair font-bold tracking-tighter">{data.name.toUpperCase()}</h1>
                  <h2 className="text-xl font-inter font-light text-luxury-gold tracking-widest uppercase">{data.resume.tagline}</h2>
                  <p className="max-w-md text-lg font-inter font-light opacity-60 leading-relaxed">
                    {data.resume.description}
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xs uppercase tracking-[0.3em] font-bold opacity-40">Contact</h3>
                  <Socials />
                </div>
              </div>

              <div className="mt-16 grid grid-cols-1 laptop:grid-cols-3 gap-16">
                <div className="laptop:col-span-2 space-y-16">
                  <section>
                    <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-luxury-gold mb-10">Experience</h2>
                    <div className="space-y-12">
                      {data.resume.experiences.map(({ id, dates, type, position, bullets }) => (
                        <ProjectResume
                          key={id}
                          dates={dates}
                          type={type}
                          position={position}
                          bullets={bullets}
                        />
                      ))}
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-luxury-gold mb-10">Education</h2>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-playfair font-semibold">{data.resume.education.universityName}</h3>
                      <p className="text-sm uppercase tracking-widest opacity-60">{data.resume.education.universityDate}</p>
                      <p className="text-lg font-inter font-light opacity-70 leading-relaxed">
                        {data.resume.education.universityPara}
                      </p>
                    </div>
                  </section>
                </div>

                <div className="space-y-16">
                  <section>
                    <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-luxury-gold mb-10">Expertise</h2>
                    <div className="space-y-10">
                      {data.resume.languages && (
                        <div>
                          <h3 className="text-sm uppercase tracking-widest font-bold mb-4 opacity-40">Languages</h3>
                          <div className="flex flex-wrap gap-3">
                            {data.resume.languages.map((item, i) => (
                              <span key={i} className="px-3 py-1 border border-gray-200 dark:border-gray-800 text-xs uppercase tracking-widest">{item}</span>
                            ))}
                          </div>
                        </div>
                      )}
                      {data.resume.frameworks && (
                        <div>
                          <h3 className="text-sm uppercase tracking-widest font-bold mb-4 opacity-40">Tools</h3>
                          <div className="flex flex-wrap gap-3">
                            {data.resume.frameworks.map((item, i) => (
                              <span key={i} className="px-3 py-1 border border-gray-200 dark:border-gray-800 text-xs uppercase tracking-widest">{item}</span>
                            ))}
                          </div>
                        </div>
                      )}
                      {data.resume.others && (
                        <div>
                          <h3 className="text-sm uppercase tracking-widest font-bold mb-4 opacity-40">Specialties</h3>
                          <div className="flex flex-wrap gap-3">
                            {data.resume.others.map((item, i) => (
                              <span key={i} className="px-3 py-1 border border-gray-200 dark:border-gray-800 text-xs uppercase tracking-widest">{item}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resume;
