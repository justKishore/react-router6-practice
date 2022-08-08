import { Outlet } from "react-router-dom";
// Outlet for shared componets to nest routes
// import Navbar from "../components/NavBar";
import StyledNavBar from "../components/StyledNavBar";

// Outlet for shared componets to nest routes
const SharedLayout = () => {
  console.log("SharedLayout.js running");
  return (
    <>
      <StyledNavBar />
      <Outlet />
    </>
  );
};
export default SharedLayout;
