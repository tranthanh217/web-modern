import { useState } from "react";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle((prev) => !prev);
  };
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="logo" className="w-[124px] h-[32px]" />
      <ul className="  list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white  ${ index === navLinks.length - 1 ? "mr-0" : "mr-10" }`} >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex justify-end items-center">
        <img src={toggle ? close : menu} onClick={handleClick} alt="menu" className="w-[28px] h-[28px] object-contain" />
        <div className={`${ toggle ? "flex" : " hidden" } absolute top-20  right-0 mx-4 p-5 bg-black-gradient min-w-[140px] rounded-xl sidebar `} >
          <ul className="list-none sm:hidden flex justify-start items-center flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white  ${ index === navLinks.length - 1 ? "mb-0" : "mb-2" }`} >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
