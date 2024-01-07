"use client";

import Footer from "@/components/footer/footer";
import HeroBox from "@/components/hero-box/HeroBox";
import SkillsBox from "@/components/skills-box/SkillsBox";
import SloganBox from "@/components/slogan-box/SloganBox";
import WorkExpBox from "@/components/work-exp-box/WorkExpBox";
import { Roboto_Mono } from "next/font/google";
import { useEffect, useState } from "react";

const robotoMono = Roboto_Mono({ subsets: ["latin"], weight: ["400", "500"] });

export default function Home() {
  const [startNavigation, setStartNavigation] = useState<boolean>(false);
  return (
    <main
      className={`flex flex-col px-4 md:px-0 min-h-screen h-full w-screen items-center md:overflow-hidden bg-indigo-950 ${
        !startNavigation && "pt-10"
      }  ${robotoMono.className}`}
    >
      <div
        className={`flex flex-col w-full md:flex-1 justify-start items-center space-y-6 ${
          startNavigation ? "w-full" : "max-w-[700px] w-1/2"
        }`}
      >
        <HeroBox
          startNavigation={startNavigation}
          setStartNavigation={setStartNavigation}
        />
        {!startNavigation && (
          <>
            <SloganBox />
            <SkillsBox />
            <WorkExpBox />
          </>
        )}
      </div>
      <div
        className={`${
          startNavigation && "hidden"
        } flex max-w-[700px] w-full mt-4`}
      >
        <Footer />
      </div>
    </main>
  );
}
