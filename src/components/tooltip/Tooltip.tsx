import "./Tooltip.css";

type TooltipProps = {
  peerDiffClassName?: string;
  direction?: "left" | "top" | "right";
  content: string;
};

export default function Tooltip({
  peerDiffClassName,
  direction = "left",
  content,
}: TooltipProps) {
  return (
    <div
      className={`flex w-28 h-fit absolute 
      ${direction === "left" && "-translate-x-1/2 translate-y-[40%]"}
      ${direction === "top" && "-translate-y-[70%] -translate-x-2 flex-col"} 
      ${
        direction === "right" &&
        "translate-x-1/2 flex-row-reverse translate-y-[40%]"
      }
       tran z-20 justify-center hover:flex items-center ${
         peerDiffClassName ? peerDiffClassName : "peer-hover:flex"
       } hidden`}
    >
      <span className="text-white p-2 text-xs bg-black rounded-lg">
        {content}
      </span>
      <svg
        className={`w-4 
        ${direction === "left" && "move-up-container"}
        ${direction === "top" && "move-right-container"}
        ${direction === "right" && "move-down-container"}
        `}
        viewBox="0 0 18 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 0L17.6603 15H0.339746L9 0Z" fill="#000" />
      </svg>
    </div>
  );
}
