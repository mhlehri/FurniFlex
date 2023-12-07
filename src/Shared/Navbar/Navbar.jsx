import { NavLink } from "react-router-dom";
import NavIcons from "./NavIcons";
const Navbar = () => {
  return (
    <div className="py-6 flex items-center justify-between">
      {/* logo */}
      <div className="flex gap-3">
        <img src="public/assets/Logo.png" alt="" />{" "}
        <h4 className="text-4xl font-bold">FurniFlex</h4>
      </div>

      {/* menu routes */}
      <div>
        <ul className="flex lg:gap-16 font-medium">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </ul>
      </div>

      {/* icons */}
      <div>
        <NavIcons />
      </div>
    </div>
  );
};

export default Navbar;
