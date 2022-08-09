import { useState } from "react";
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

function App() {
  console.log("App.js running");
  const [user, setUser] = useState(null);
  const [loginStatus, setLoginStatus] = useState(null);
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
                setUser={setUser}
                setLoginStatus={setLoginStatus}
              ></NewLogin>
            }
          />
          {/* Dashboard is protected */}
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user} loginStatus={loginStatus}>
                <Dashboard user={user} loginStatus={loginStatus} />
              </ProtectedRoute>
            }
          />
          {/* Handle error pages */}
          <Route path="/access-denied" element={<LoginError />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      {/* <footer>Our footer</footer> */}
    </BrowserRouter>
  );
}

export default App;
