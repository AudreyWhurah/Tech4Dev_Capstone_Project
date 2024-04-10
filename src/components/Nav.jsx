import React from "react";
import { Link } from "react-router-dom";
const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About us",
    path: "/#about-us",
  },
  {
    name: "Donate",
    path: "/#donate",
  },
  {
    name: "Event",
    path: "/#event",
  },
];
const Nav = ({ isHome }) => {
  return (
    <>
      <header className="w-full flex justify-between items-center pt-6 z-40">
        <div className="flex items-center  w-2/6">
          <img
            src="/images/logo.png"
            alt="app logo"
            className="h-[80px] w-[80px]"
          />
          <div>
            <h3 className=" px-2 font-cardo font-bold text-main_dark leading-10 text-4xl">
              EmpowerCare
            </h3>
          </div>
        </div>
        <nav className="w-2/6 flex">
          <ul className=" w-full flex justify-between ">
            {navItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    className=" hover:border-main_text_3 hover:border-b-2 cursor-pointer transition-all font-josefin_sans text-2xl text-main_dark font-medium "
                    to={item.path}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="w-2/6 ">
          {isHome ? (
            <div className="flex justify-end bg- ">
              <Link
                to="community"
                className="bg-main_dark text-main_text rounded-md w-[216px] h-[65px] p-1 font-josefin_sans font-medium text-xl justify-center items-center flex"
              >
                Join our community
              </Link>
            </div>
          ) : (
            <div className="flex justify-between pl-10">
              <button className="bg-main_dark text-main_text rounded-md w-[160px] h-[65px] p-1 font-josefin_sans font-medium text-xl">
                Sign up
              </button>
              <button className=" text-main_dark rounded-md w-[160px] h-[65px] p-1 border-2 font-josefin_sans font-medium text-xl">
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
