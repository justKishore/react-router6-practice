import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";
import SingleProduct from "./pages/SingleProduct";
// import Login from "./pages/Login";
import NewLogin from "./pages/NewLogin";
import ProtectedRoute from "./pages/ProtectedRoute";
import SharedProductLayout from "./pages/SharedProductLayout";
import LoginError from "./pages/LoginError";

class App extends Component {
  state = {
    // the componet that owns a piece of the state, should be the one modifying it
    name: "",
    email: "",
    loginStatus: false,
  };
  handlesetUser = (loginName, loginEmail) => {
    // const user = [...this.state.user];
    const name = loginName;
    const email = loginEmail;
    const loginStatus = true;
    localStorage.setItem("name", name);
    localStorage.setItem("loginStatus", true);
    this.setState({ name, email, loginStatus });
  };
  handleLogOut = () => {
    localStorage.clear();
    const name = "";
    const email = "";
    const loginStatus = false;
    // localStorage.setItem("loginStatus", false);
    this.setState({ name, email, loginStatus });
  };
  componentDidMount() {
    const currentState = this.state.loginStatus;
    console.log("component did mount", currentState);
    if (currentState === true) {
      // localStorage.setItem("loginstatus", "true");
      this.setState({ loginStatus: true });
    } else {
      // localStorage.setItem("loginstatus", "false");
      this.setState({ loginStatus: false });
    }
  }
  handleSetStatus = () => {};
  render() {
    console.log("App.js running");
    // const [user, setUser] = useState(null);
    // const [loginStatus, setLoginStatus] = useState(null);
    return (
      <BrowserRouter>
        {/* <nav>Our navbar</nav> */}
        {/* nested routes */}
        <Routes>
          {/* don't palce element inside routes expect route */}
          <Route path="/" element={<SharedLayout />}>
            {/* index takes parent's path */}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<SharedProductLayout />}>
              <Route index element={<Products />} />
              {/* :productID is a url param */}
              <Route path=":productID" element={<SingleProduct />} />
            </Route>
            <Route
              path="login"
              element={
                <NewLogin
                  setUser={this.handlesetUser}
                  setLoginStatus={this.handleSetStatus}
                ></NewLogin>
              }
            />
            {/* Dashboard is protected */}
            <Route
              path="dashboard"
              element={
                <ProtectedRoute
                  name={this.state.name}
                  loginStatus={this.state.loginStatus}
                  setLogout={this.handleLogOut}
                >
                  <Dashboard
                    name={localStorage.getItem("name")}
                    setLogout={this.handleLogOut}
                  />
                </ProtectedRoute>
              }
            />
            <Route path="/access-denied" element={<LoginError />} />
            {/* Handle error pages */}
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
        {/* <footer>Our footer</footer> */}
      </BrowserRouter>
    );
  }
}

export default App;
