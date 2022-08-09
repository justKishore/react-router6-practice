import { Link } from "react-router-dom";
const LoginError = () => {
  return (
    <section className="section">
      <h2>Access Denied</h2>
      <p>please login</p>
      <Link to="/login" className="btn">
        Login
      </Link>
    </section>
  );
};
export default LoginError;
