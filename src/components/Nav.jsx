import React, { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/#about-us" },
  { name: "Donate", path: "/#donate" },
  { name: "Event", path: "/#event" },
];

const Nav = ({ isHome }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="w-full flex flex-col md:flex-row justify-between items-center pt-6 px-4 md:px-8 z-40">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/images/logo.png"
                alt="app logo"
                className="md:h-[80px] md:w-[80px] h-10 w-10"
              />
            </Link>
            <Link to="/">
              <h3 className="px-2 font-cardo font-bold text-main_dark md:leading-10 md:text-4xl text-xl">
                EmpowerCare
              </h3>
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-expanded={isOpen} role="button">
              <img src="/images/menu-icon.svg" alt="Menu" className="w-8 h-8" />
            </button>
          </div>
        </div>
        <nav
          className={`absolute md:relative w-full md:w-auto bg-white md:bg-transparent left-0 md:left-auto top-[80px] md:top-auto transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <div className="bg-main_light">
            <ul className="flex flex-col md:flex-row md:justify-between md:items-center w-full">
              {navItems.map((item, index) => (
                <li key={index} className="md:mr-6 last:mr-0">
                  <Link
                    className="block p-4 text-center md:text-left hover:border-main_text_3 hover:border-b-2 cursor-pointer transition-all font-josefin_sans md:text-2xl text-xl text-main_dark font-medium"
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex md:hidden w-full md:w-1/3 justify-center items-center mt-4 md:mt-0 ">
              {isHome ? (
                <Link
                  to="community"
                  className="bg-main_dark text-main_text rounded-md p-2 font-josefin_sans font-medium text-lg md:w-auto text-center"
                >
                  Join our community
                </Link>
              ) : (
                <div className="w-1/2 flex justify-between">
                  <button className="bg-main_dark text-main_text rounded-md px-4 py-2 font-josefin_sans font-medium text-lg  md:w-auto text-center">
                    Sign up
                  </button>
                  <button className="mt-2 md:mt-0 md:ml-2 text-main_dark rounded-md px-4 py-2 border-2 font-josefin_sans font-medium text-lg md:w-auto text-center">
                    Log in
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>
        <div className="hidden md:flex w-full md:w-1/3 justify-end items-center mt-4 md:mt-0">
          {isHome ? (
            <Link
              to="community"
              className="bg-main_dark text-main_text rounded-md p-2 font-josefin_sans font-medium text-lg w-full md:w-auto text-center"
            >
              Join our community
            </Link>
          ) : (
            <div className="flex space-x-10">
              <button className="bg-main_dark text-main_text rounded-md px-4 py-2 font-josefin_sans font-medium text-lg w-full md:w-auto text-center">
                Sign up
              </button>
              <button className="mt-2 md:mt-0 md:ml-2 text-main_dark rounded-md px-4 py-2 border-2 font-josefin_sans font-medium text-lg w-full md:w-auto text-center">
                Log in
              </button>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Nav;
