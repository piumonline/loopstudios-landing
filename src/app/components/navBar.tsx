"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";

const NavBar = () => {
  let Links = [
    { name: "ABOUT", link: "/" },
    { name: "CAREERS", link: "/" },
    { name: "EVENTS", link: "/" },
    { name: "PRODUCTS", link: "/" },
    { name: "SUPPORT", link: "/" },
  ];
  let [open, setOpen] = useState(false);

//   <div className="w-full top-8 right-0 bg-transparent z-10 text-white px-6 md:px-28 absolute left-0">


  return (
    <div className={`w-full pt-6 right-0 z-10 text-white px-6 md:px-28 absolute left-0${
        open ? " bg-black" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between  md:items-center py-4 md:px-10">
        <div className="font-bold text-2xl cursor-pointer">
          loopstudio
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-6 top-11 cursor-pointer md:hidden"
        >
          <div>
            <img
              src={
                open ? "/images/icon-close.svg" : "/images/icon-hamburger.svg"
              }
              alt={open ? "Close" : "Menu"}
              width="24"
              height="24"
            />
          </div>
        </div>

        <ul
          className={`flex flex-col md:flex-row justify-center md:flex md:items-center md:pb-0 absolute md:static  z-[-1] left-0 w-full md:w-auto md:pl-0 pl-8 transition-all duration-500 ease-in ${
            open ? "top-0 bg-black h-screen" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-md md:my-0 my-4">
              <a href={link.link} className=" hover:text-gray-400 duration-500">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
