// A <NavLink> is a special kind of <Link>
// that knows whether or not it is "active".

import { NavLink } from "react-router-dom";

const StyledNavBar = () => {
  console.log("StyledNavbar.js running");
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? " active" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? " active" : "link")}
      >
        About
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? " active" : "link")}
      >
        Products
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? " active" : "link")}
      >
        Login
      </NavLink>
    </nav>
  );
};
export default StyledNavBar;

// insted of className we can inline like in NavLink
// style={({ isActive }) => {
//     return { color: isActive ? "red" : "grey" };
//   }}
