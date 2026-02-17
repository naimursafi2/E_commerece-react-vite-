import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function NextArrow({ className, onClick }) {
  return (
    <div
      className={`hidden md:block ${className} cursor-pointer w-20 h-20 z-10 shadow-2xl absolute top-1/2 -translate-y-1/2 -right-10 bg-red-600 rounded-full p-2.5`}
      onClick={onClick}
    >
      <div className="w-full h-full  rounded-full flex items-center justify-center">
        <BiChevronRight className="w-10 h-10 text-brand" />
      </div>
    </div>
  );
}

function PrevArrow({ className, onClick }) {
  return (
    <div
      className={`hidden md:block ${className} cursor-pointer w-20 h-20 absolute top-1/2 z-20 -translate-y-1/2 -left-10 bg-theme rounded-full p-2.5`}
      onClick={onClick}
    >
      <div className="w-full h-full bg-[#F3F9FB] rounded-full flex items-center justify-center">
        <BiChevronLeft className="w-10 h-10 text-brand" />
      </div>
    </div>
  );
}

export { NextArrow, PrevArrow };
