import Image from "next/image";
import GithubLogo from "../../assets/logos/github-logo.svg";
import LinkedinLogo from "../../assets/logos/linkedin-logo.svg";
import ProfileIcon from "../../assets/logos/profile.svg";
import Tooltip from "../tooltip/Tooltip";

export default function SloganBox() {
  return (
    <div className="flex flex-col w-full h-28 mt-12 bg-fuchsia-400 rounded-2xl">
      <div className="flex h-3/5 w-full text-center text-white justify-center items-center text-lg">
        I admire web interfaces and like to build them.
      </div>
      <div className="flex w-full h-2/5 bg-fuchsia-600 rounded-b-2xl justify-center space-x-4">
        <div
          onClick={() =>
            window.open("https://github.com/manikanised", "_blank")
          }
          className="flex w-14 hover:bg-fuchsia-700 justify-center cursor-pointer"
        >
          <Image
            className="py-2 peer/github w-1/2 h-auto"
            src={GithubLogo}
            alt="html5"
          />
          <Tooltip
            peerDiffClassName="peer-hover/github:flex"
            direction="top"
            content="Github"
          />
        </div>
        <div
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/manik-manik-603b5b218/",
              "_blank"
            )
          }
          className="flex w-14 hover:bg-fuchsia-700 justify-center cursor-pointer"
        >
          <Image
            className="py-2 peer/linkedin w-1/2 h-auto"
            src={LinkedinLogo}
            alt="html5"
          />
          <Tooltip
            peerDiffClassName="peer-hover/linkedin:flex"
            direction="top"
            content="LinkedIn"
          />
        </div>
        <div
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1riJ6txAtjEyYT9N3zGcVCOhuL79-uRH6/view?usp=sharing",
              "_blank"
            )
          }
          className="flex w-14 hover:bg-fuchsia-700 justify-center cursor-pointer"
        >
          <Image
            className="py-2 peer/profile w-1/2 h-auto"
            src={ProfileIcon}
            alt="html5"
          />
          <Tooltip
            peerDiffClassName="peer-hover/profile:flex"
            direction="top"
            content="Resume"
          />
        </div>
      </div>
    </div>
  );
}
