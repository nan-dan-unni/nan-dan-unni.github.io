import React from "react";
import Blob from "./components/Blob";
import "./styles.css";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Blob container */}
      <div className="absolute top-0 right-0 w-1/6 h-1/6 z-10">
        <Blob className="w-full h-full" />
      </div>

      {/* Image overlay */}
      <div className="absolute top-0 right-0 w-1/6 h-1/6 z-20">
        <div className="relative w-full h-full">
          <img
            src="/me.png"
            alt="Profile"
            className="absolute bottom-0 left-0 w-3/4 h-3/4 object-cover blob-clip"
          />
        </div>
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 pt-32">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl">
          I'm a passionate developer creating amazing digital experiences.
        </p>
      </div>
    </section>
  );
};

export default Hero;
