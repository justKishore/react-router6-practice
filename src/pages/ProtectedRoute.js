import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children, name, loginStatus }) => {
  console.log("Protected route running");
  console.log("localStorage", localStorage.getItem("loginStatus"));
  // if (user.length === 0 || loginStatus === false) {
  if (
    localStorage.getItem("loginStatus") === false ||
    localStorage.getItem("name") === null
  ) {
    console.log("Failed case: Your login details");
    console.log("name: ", name, " login status: ", loginStatus);
    return <Navigate to="/access-denied" />;
  } else {
    console.log("hi--");
    console.log(
      "name: ",
      localStorage.getItem("name"),
      " login status: ",
      loginStatus
    );
    console.log("children", children);
    return children;
  }
};
export default ProtectedRoute;
