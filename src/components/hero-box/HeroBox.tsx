import TitleText from "@/components/title-text/TitleText";
import Image from "next/image";

export default function HeroBox() {
  return (
    <div className="flex w-1/2 max-w-[700px] h-60 animated-header-pattern rounded-2xl">
      <div className="flex w-1/2 justify-center">
        <Image
          src={"/icons/avatar.png"}
          alt="avatar"
          width={250}
          height={100}
        />
      </div>
      <div className="flex w-1/2">
        <TitleText />
      </div>
    </div>
  );
}
