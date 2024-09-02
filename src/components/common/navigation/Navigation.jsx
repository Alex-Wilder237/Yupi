import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import './Style.css';
import {  FullscreenExitRounded, Menu } from "@mui/icons-material";



const Navbar = () => {
  let navLinks = [
    {
      linkName: "Accueil",
      linkUrl: "/",
    },
    {
      linkName: "À Propos",
      linkUrl: "/a-propos",
    },
    {
      linkName: "Abonnement",
      linkUrl: "/Abonnement",
    },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [slideOut, setSlideOut] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const scrollThreshold = 10; 
    setScrolling(scrollPosition > scrollThreshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    if (mobileMenuOpen) {
      setSlideOut(true);
      setTimeout(() => {
        setMobileMenuOpen(false);
        setSlideOut(false);
      }, 300);
    } else {
      setMobileMenuOpen(true);
    }
  };

  return (
    <div
      className={`${
        scrolling ? "drop-shadow-xl" : "drop-shadow-none"
      } bg-white text-black z-50 flex w-full fixed justify-between px-5 lg:px-[4%] py-5  items-center 2xl:px-[20%]`}
    ><div className="flex gap-10 align-middle items-center">
   
      <a className="w-fit flex items-center" href="/">
        <img
          className="object-cover w-[12vw] lg:w-[4vw] 2xl:w-[4vw]"
          src="./assets/img/logo/logo.svg"
          alt="Aerial yoga experience"
        />
      </a>

      {/* Desktop Navigation Links */}
      <ul className="flex  max-sm:hidden items-center ">
        {navLinks.map((link, index) => (
          <li key={index} >
            <NavLink
              to={link.linkUrl}
              className={
                location.pathname === link.linkUrl
                  ? " bg-orange-100 text-orange-400 rounded-full max-sm:pb-2 font-bold px-6 py-2 text-md"
                  : " text-md hover:bg-orange-50 px-6 py-2 hover:rounded-full"
              }
            >
              {link.linkName}
            </NavLink>
          </li>
        ))}
      </ul>
      </div>




      {/* Mobile Icon */}
      <div className="flex">
            {/* traduction*/}
            <div className="flex slide-in gap-8 bg-orange-200 items-center justify-center rounded-full p-2 ">
  <FullscreenExitRounded className="p-2 text-black rounded-full bg-white"/>
  <h1 className="font-bold text-md text-orange-500 px-2 ">Bienvenu Chez yupi</h1>
</div>
     <div onClick={toggleMobileMenu} className=" bg-orange-200 p-10 rounded-full text-sm not-italic leading-[normal] whitespace-nowrap justify-center items-stretch flex flex-col px-2 py-1.5 md:hidden cursor-pointer"
        >
<Menu/>
     </div>
     </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className={`fixed flex-col top-0 py-[100px]  px-[50px] left-0 w-full items-center h-[100vh] z-[1000] bg-white text-black flex justify-between ${slideOut ? 'slide-out' : 'slide-in'}`}>
               <div className="flex flex-col gap-10">
               
               
                <a className="w-fit flex items-center" href="/">
        <img
          className="object-cover w-[45vw] lg:w-[4vw] 2xl:w-[4vw]"
          src="./assets/img/logo/logo.svg"
          alt="Aerial yoga experience"
        />
      </a>

          <ul className=" text-center">
            {navLinks.map((link, index) => (
              <li key={index} className="py-4">
                <NavLink
                  to={link.linkUrl}
                  onClick={toggleMobileMenu}
                  className={
                    location.pathname === link.linkUrl
                      ? "bg-orange-100 text-orange-400 rounded-full px-8 py-2 font-extrabold text-xl"
                      : " text-xl text-gray-700 px-8 py-2"
                  }
                >
                  {link.linkName}
                </NavLink>
              </li>
            ))}
          </ul>
          </div>

          <div
            className="p-5 cursor-pointer bg-orange-100 rounded-full"
            onClick={toggleMobileMenu}
          >
            <FullscreenExitRounded className="text-xl" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
