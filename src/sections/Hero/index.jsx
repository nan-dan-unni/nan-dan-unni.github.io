import { Download, Phone } from "lucide-react";
import React from "react";
import "./index.css";

const Hero = () => {
  return (
    <section className="flex items-center justify-evenly text-light-100 flex-1">
      <article className="flex flex-col items-center justify-center text-center h-full pb-24 gap-y-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I'm <span className="text-primary">Nandan.unni</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300">
          Full Stack Developer
        </h2>
        <p className="text-gray-400 max-w-2xl my-6">
          I'm a full stack developer with a passion for building web
          applications that are both functional and user-friendly.
        </p>
        <div className="flex items-center gap-x-4">
          <button className="bg-primary border-2 border-primary text-dark-100 rounded-md flex items-center justify-center gap-x-2 px-6 py-2 font-medium">
            <Phone className="w-4 h-4" />
            <p>Contact Me</p>
          </button>
          <button className="bg-dark-100 border-2 border-primary text-primary rounded-md flex items-center justify-center gap-x-2 px-6 py-2 font-medium">
            <Download className="w-4 h-4" />
            <p>Download CV</p>
          </button>
        </div>
      </article>
      {/* <div className="blob flex items-end h-[500px] w-[500px] bg-primary overflow-hidden">
        <img src="/me.png" alt="hero" className="h-[450px]" />
      </div> */}
      <div className="w-[400px] h-[500px]"></div>
      <div className="absolute -top-32 -right-32">
        <div className="blob flex items-end h-[700px] w-[640px] bg-primary overflow-hidden">
          <img src="/me.png" alt="hero" className="h-[450px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
