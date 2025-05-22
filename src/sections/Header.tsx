import React, { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed h-[8vh] w-[95vw] mx-auto rounded-xl px-10 top-6 left-0 right-0 z-50 flex items-center justify-between transition-all duration-200 ${
        isScrolled ? "glass-effect" : ""
      }`}
    >
      <h1 className="text-light-100 font-semibold">
        <span className="text-primary"></span>
        <span className="text-light-100">nandan.</span>
        <span className="text-primary">unni</span>
      </h1>
      <nav className="flex items-center justify-center gap-x-16">
        {/* <menu className="text-light-100 hover:text-primary cursor-pointer">
          About
        </menu> */}
        <menu className="text-light-100 cursor-pointer">About</menu>
        <menu className="text-light-100 cursor-pointer">Skills</menu>
        <menu className="text-light-100 cursor-pointer">Projects</menu>
        <menu className="text-light-100 cursor-pointer">Work</menu>
      </nav>
    </header>
  );
};

export default Header;
