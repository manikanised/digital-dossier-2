import HeroBox from "@/components/hero-box/HeroBox";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({ subsets: ["latin"], weight: ["400", "500"] });

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-start p-24 bg-indigo-950">
      <HeroBox />
      <div className="flex flex-col w-1/2 max-w-[700px] h-28 mt-10 bg-fuchsia-400 rounded-2xl">
        <div
          className={`flex h-3/5 w-full text-center text-white justify-center items-center text-lg ${robotoMono.className}`}
        >
          I build full stack web applications when I am bored.
        </div>
        <div className="flex w-full h-2/5 bg-fuchsia-600 rounded-b-2xl"></div>
      </div>
    </main>
  );
}
