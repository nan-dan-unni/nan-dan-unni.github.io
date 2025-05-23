import React from "react";

const Section = ({ title, children, fullScreen = true, className }) => {
  return (
    <div
      className={`flex flex-col items-center justify-start ${
        fullScreen ? "min-h-[100vh]" : ""
      } ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <div className="w-24 h-1 bg-primary mx-auto mb-10" />
      {children}
    </div>
  );
};

export default Section;
