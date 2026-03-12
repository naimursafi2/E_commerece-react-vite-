import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function NextArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-white  absolute top-1/2 -translate-y-1/2 -right-7 z-20 cursor-pointer"
    >
      <div className="bg-secondary w-12 h-12 rounded-full  flex items-center justify-center">
        <BiChevronRight className=" text-brand text-3xl" />
      </div>
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-white absolute top-1/2 -translate-y-1/2 -left-7 z-20 cursor-pointer"
    >
      <div className="bg-secondary w-12 h-12 rounded-full  flex items-center justify-center">
        <BiChevronLeft className="text-4xl text-brand" />
      </div>
    </div>
  );
}

export { NextArrow, PrevArrow };