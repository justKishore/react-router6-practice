import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children, user, loginStatus }) => {
  console.log("Protected route running");
  if (!user || loginStatus.status === false) {
    console.log("Your login details");
    console.log("name: ", user?.name, " login status: ", loginStatus?.status);
    return <Navigate to="/error" />;
  }
  console.log("name: ", user?.name, " login status: ", loginStatus?.status);
  console.log("children", children);
  return children;
};
export default ProtectedRoute;
