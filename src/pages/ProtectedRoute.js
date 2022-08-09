import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children, user, loginStatus }) => {
  console.log("Protected route running");
  console.log(user, loginStatus);
  if (user.length === 0 || loginStatus === false) {
    console.log("Failed case: Your login details");
    console.log("name: ", user?.name, " login status: ", loginStatus);
    return <Navigate to="/access-denied" />;
  }
  console.log("name: ", user?.name, " login status: ", loginStatus);
  console.log("children", children);
  return children;
};
export default ProtectedRoute;
