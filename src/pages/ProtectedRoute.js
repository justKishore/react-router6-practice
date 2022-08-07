import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children, user }) => {
  if (!user) {
    return <Navigate to="/" />;
  }
  console.log("children", children);
  return children;
};
export default ProtectedRoute;
