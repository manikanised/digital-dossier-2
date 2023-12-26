"use client";

import HeroBox from "@/components/hero-box/HeroBox";
import SkillsBox from "@/components/skills-box/SkillsBox";
import SloganBox from "@/components/slogan-box/SloganBox";
import Tooltip from "@/components/tooltip/Tooltip";
import WorkExpBox from "@/components/work-exp-box/WorkExpBox";
import { Roboto_Mono } from "next/font/google";
import { useState } from "react";

const robotoMono = Roboto_Mono({ subsets: ["latin"], weight: ["400", "500"] });

export default function Home() {
  const [startNavigation, setStartNavigation] = useState<boolean>(false);
  return (
    <main
      className={`flex h-screen w-screen justify-center bg-indigo-950  ${robotoMono.className}`}
    >
      <div
        className={`flex flex-col justify-start items-center ${
          startNavigation ? "w-full h-full" : "max-w-[700px] w-1/2"
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
    </main>
  );
}
