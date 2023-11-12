import React, { useState } from "react";
import { FaBars, FaRegTimesCircle } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const MobileMenuSidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div className="mobile-menu-wrapper">
      <div
        className={`mobile-menu-overlay ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      />
      <div className={`mobile-menu-sidebar ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header bg-[#f3f8f6]  ">
          <img
            src="src\assets\images\logo.png"
            className="w-[110px] px-1 "
            alt=""
          />
          <button className="mobile-menu-close" onClick={toggleMenu}>
            <FaRegTimesCircle className="mx-auto" />
          </button>
        </div>
        <ul className="mobile-menu-links px-[25px] pt-[18px] text-[#1C231F]">
          <li>
            <NavLink onClick={toggleMenu} className="py-3" to={'/'}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink onClick={toggleMenu} to={'/tours-page'}>Tours page</NavLink>
          </li>
          <li>
            <NavLink onClick={toggleMenu} to={'/destination'}>Destination</NavLink>
          </li>
          <li>
            <div
              className="mobile-menu-submenu-header flex items-center justify-between"
              onClick={toggleSubMenu}
            >
              <span>Pages</span>
              {isSubMenuOpen ? (
                <FiMinus className=" cursor-pointer" />
              ) : (
                <FiPlus className=" cursor-pointer" />
              )}
            </div>
            {isSubMenuOpen && (
              <ul
                className={`mobile-menu-submenu-links w-[80%] ml-[20px] mt-3 open  flex flex-col gap-2 ${
                  isSubMenuOpen ? "open" : ""
                }`}
              >
                <span>
                  <NavLink onClick={toggleMenu} to={"/about"}>About</NavLink>
                </span>
                <span>
                  <NavLink onClick={toggleMenu} to={"/team"}>Team Grid</NavLink>
                </span>
                <span>
                  <NavLink onClick={toggleMenu} to={"/team-carousel"}>Team Carousel</NavLink>
                </span>
                <span>
                  <NavLink onClick={toggleMenu} to={"/gallery"}>Gallery</NavLink>
                </span>
              </ul>
            )}
          </li>
          <li>
            <NavLink onClick={toggleMenu} to={'/news01'}>News</NavLink>
          </li>
          <li>
            <NavLink onClick={toggleMenu} to={'/contact'}>Contact</NavLink>
          </li>
        </ul>
      </div>
      <button className="mobile-menu-toggle" onClick={toggleMenu}>
        <FaBars />
      </button>
    </div>
  );
};

export default MobileMenuSidebar;
