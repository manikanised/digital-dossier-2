"use client";

import HeroBox from "@/components/hero-box/HeroBox";
import SkillsBox from "@/components/skills-box/SkillsBox";
import Tooltip from "@/components/tooltip/Tooltip";
import { Roboto_Mono } from "next/font/google";
import { useState } from "react";

const robotoMono = Roboto_Mono({ subsets: ["latin"], weight: ["400", "500"] });

export default function Home() {
  const [startNavigation, setStartNavigation] = useState<boolean>(false);
  return (
    <main
      className={`flex min-h-screen w-screen justify-center bg-indigo-950  ${robotoMono.className}`}
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
            <div className="flex flex-col w-full h-28 mt-12 bg-fuchsia-400 rounded-2xl">
              <div className="flex h-3/5 w-full text-center text-white justify-center items-center text-lg">
                I admire web interfaces and like to build them.
              </div>
              <div className="flex w-full h-2/5 bg-fuchsia-600 rounded-b-2xl"></div>
            </div>
            <SkillsBox />
          </>
        )}
      </div>
    </main>
  );
}
