import React from "react";

const Loading = () => {
  return (
    <div className="h-full w-full grid grid-cols-4 gap-10">
      <div className="bg-secondary h-40 animate-pulse"></div>
      <div className="bg-secondary h-40 animate-pulse"></div>
      <div className="bg-secondary h-40 animate-pulse"></div>
      <div className="bg-secondary h-40 animate-pulse"></div>
      <div className="bg-secondary h-40 animate-pulse"></div>
      <div className="bg-secondary h-40 animate-pulse"></div>
      <div className="bg-secondary h-40 animate-pulse"></div>
      <div className="bg-secondary h-40 animate-pulse"></div>
    </div>
  );
};

export default Loading;
