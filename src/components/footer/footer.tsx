export default function Footer() {
  return (
    <div className="flex flex-col w-full h-fit bg-pink-400 rounded-t-2xl">
      <div className="flex w-full py-2 text-center text-white justify-center items-center text-lg">
        Made with
        <svg
          className="w-4 mx-3"
          fill="#fff"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 230 230"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M213.588,120.982L115,213.445l-98.588-92.463C-6.537,96.466-5.26,57.99,19.248,35.047l2.227-2.083 c24.51-22.942,62.984-21.674,85.934,2.842L115,43.709l7.592-7.903c22.949-24.516,61.424-25.784,85.936-2.842l2.227,2.083 C235.26,57.99,236.537,96.466,213.588,120.982z"></path>{" "}
          </g>
        </svg>
        by Manik
      </div>
    </div>
  );
}
