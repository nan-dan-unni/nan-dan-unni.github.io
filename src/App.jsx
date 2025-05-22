import React from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

const App = () => {
  return (
    <div className="bg-dark-100 text-light-100">
      <Header />
      <div className="mt-16 flex min-h-[calc(92vh)]">
        <Hero />
      </div>
      <div className="max-w-7xl mx-auto py-8">
        <Skills />
        <Projects />
      </div>
    </div>
  );
};

export default App;
