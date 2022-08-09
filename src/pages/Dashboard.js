import { useNavigate } from "react-router-dom";

const Dashboard = ({ name, setLogout }) => {
  const navigate = useNavigate();
  const handleClick = async (e) => {
    // localStorage.setItem("loginStatus", false);
    // localStorage.clear();
    setLogout();
    navigate("/login");
  };
  return (
    <section className="section">
      <h4>Hello, {name}</h4>
      <button onClick={handleClick} className="btn">
        LogOut
      </button>
    </section>
  );
};
export default Dashboard;

// The optional chaining operator (?.) enables you to read the value of a property located deep within
// a chain of connected objects without having to check that each reference in the chain is valid.
