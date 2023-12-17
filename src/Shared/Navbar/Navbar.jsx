import { NavLink } from "react-router-dom";
import NavIcons from "./NavIcons";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="py-6 flex items-center justify-between px-2">
        {/* logo */}
        <div className="flex gap-3 items-center">
          <img src="/assets/Logo.png" alt="" />{" "}
          <h4 className="text-4xl font-bold md:block hidden">FurniFlex</h4>
          <button
            onClick={() => {
              setOpen(!open);
            }}
            className="text-4xl font-bold md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          </button>
        </div>

        {/* menu routes */}
        <div className="hidden md:block">
          <ul className="flex md:gap-16 font-medium">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </ul>
        </div>
        {/* icons */}
        <div>
          <NavIcons />
        </div>
      </div>

      <div>
        <ul
          className={`flex flex-wrap text-center justify-center gap-4 ${
            open
              ? "duration-300 h-fit bg-white opacity-1 "
              : "h-0 duration-300 opacity-0  scale-0"
          }  font-medium md:hidden p-4 absolute ease-out z-[20000] w-full`}
        >
          <NavLink
            onClick={() => {
              setOpen(!open);
            }}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => {
              setOpen(!open);
            }}
            to="/shop"
          >
            Shop
          </NavLink>
          <NavLink
            onClick={() => {
              setOpen(!open);
            }}
            to="/blog"
          >
            Blog
          </NavLink>
          <NavLink
            onClick={() => {
              setOpen(!open);
            }}
            to="/contact"
          >
            Contact
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
