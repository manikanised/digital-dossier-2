"use client";

import TitleText from "@/components/title-text/TitleText";
import HiddenPackage from "../../assets/pictures/hidden-package.png";
import Image from "next/image";

type HeroBoxProps = {
  startNavigation: boolean;
  setStartNavigation: (e: boolean) => void;
};

export default function HeroBox({
  startNavigation,
  setStartNavigation,
}: HeroBoxProps) {
  return (
    <div
      onClick={() => setStartNavigation(!startNavigation)}
      className={`flex w-full rounded-2xl transition-all duration-500 ${
        startNavigation
          ? "w-screen h-screen top-0 bg-slate-600"
          : "max-w-[700px] h-60 animated-header-pattern"
      }`}
    >
      {startNavigation ? (
        <div className="flex h-full w-full justify-center items-center">
          <Image src={HiddenPackage} height={100} width={100} alt="" />
        </div>
      ) : (
        <>
          <div
            className={`flex w-full md:w-1/2 justify-center transition-all duration-1000 `}
          >
            <Image
              className="min-w-fit"
              src={"/icons/avatar.png"}
              alt="avatar"
              width={250}
              height={100}
            />
          </div>
          <div
            className={`w-1/2 hidden md:flex justify-center ${
              startNavigation && "hidden"
            }`}
          >
            <TitleText />
          </div>
        </>
      )}
    </div>
  );
}
