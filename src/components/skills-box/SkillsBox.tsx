import Image from "next/image";
import Html4Logo from "../../assets/logos/html-5-logo.svg";
import CssLogo from "../../assets/logos/css-logo.svg";
import TailwindLogo from "../../assets/logos/tailwind-logo.svg";
import JsLogo from "../../assets/logos/js-logo.svg";
import NodeJsLogo from "../../assets/logos/nodejs-logo.svg";
import NextJsLogo from "../../assets/logos/nextjs-logo.svg";
import NestJsLogo from "../../assets/logos/nestjs-logo.svg";
import Tooltip from "../tooltip/Tooltip";

export default function SkillsBox() {
  return (
    <div className="flex w-full flex-col h-28 bg-sky-400 mt-12 rounded-2xl">
      <div className="flex w-full h-1/2 text-white justify-center items-center">
        Skills
      </div>
      <div className="flex w-full bg-sky-500 rounded-b-2xl h-1/2">
        <div className="flex w-full hover:bg-sky-600 rounded-bl-2xl">
          <Image className="py-2 peer/html" src={Html4Logo} alt="html5" />
          <Tooltip peerDiffClassName="peer-hover/html:flex" content="HTML5" />
        </div>
        <div className="flex w-full hover:bg-sky-600">
          <Image className="py-2 peer/css" src={CssLogo} alt="html5" />
          <Tooltip
            peerDiffClassName="peer-hover/css:flex"
            direction="top"
            content="css"
          />
        </div>
        <div className="flex w-full hover:bg-sky-600">
          <Image
            className="py-2 peer/tailwind"
            src={TailwindLogo}
            alt="html5"
          />
          <Tooltip
            peerDiffClassName="peer-hover/tailwind:flex"
            direction="top"
            content="tailwind-css"
          />
        </div>
        <div className="flex w-full hover:bg-sky-600">
          <Image className="py-2 peer/js" src={JsLogo} alt="html5" />
          <Tooltip
            peerDiffClassName="peer-hover/js:flex"
            direction="top"
            content="JavaScript"
          />
        </div>
        <div className="flex w-full hover:bg-sky-600">
          <Image className="py-2 peer/nodejs" src={NodeJsLogo} alt="html5" />
          <Tooltip
            peerDiffClassName="peer-hover/nodejs:flex"
            direction="top"
            content="NodeJs"
          />
        </div>
        <div className="flex w-full hover:bg-sky-600">
          <Image className="py-2 peer/nextjs" src={NextJsLogo} alt="html5" />
          <Tooltip
            peerDiffClassName="peer-hover/nextjs:flex"
            direction="top"
            content="NextJs"
          />
        </div>
        <div className="flex w-full hover:bg-sky-600 rounded-br-2xl">
          <Image className="py-2 peer/nestjs" src={NestJsLogo} alt="html5" />
          <Tooltip
            peerDiffClassName="peer-hover/nestjs:flex"
            direction="right"
            content="NestJs"
          />
        </div>
      </div>
    </div>
  );
}
