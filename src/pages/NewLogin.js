import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewLogin = ({ setUser, setLoginStatus }) => {
  console.log("NewLogin.js running");
  //   console.log("type is", typeof setLoginStatus);
  const [formName, setName] = useState("");
  const [formEmail, setEmail] = useState("");
  let status = false;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formName, formEmail);
    if (!formName || !formEmail) return;
    status = true;
    setUser({ name: formName, email: formEmail });
    setLoginStatus({ status: status });
    navigate("/dashboard");
  };

  return (
    <section className="section">
      <form className="form" onSubmit={handleSubmit}>
        <h5>login</h5>
        <div className="form-row">
          <label htmlFor="formName" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="formName"
            value={formName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="formEmail" className="form-label">
            email
          </label>
          <input
            type="email"
            className="form-input"
            id="formEmail"
            value={formEmail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          login
        </button>
      </form>
    </section>
  );
};
export default NewLogin;

// The useNavigate hook returns a function that lets you navigate programmatically
