import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  const [user, setUser] = useState(null);
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
          <Route path="products" element={<Products />} />
          {/* :productID is param */}
          <Route path="products/:productID" element={<SingleProduct />} />
          <Route path="login" element={<Login setUser={setUser}></Login>} />
          {/* Dashboard is protected */}
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          {/* Handle error pages */}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      {/* <footer>Our footer</footer> */}
    </BrowserRouter>
  );
}

export default App;
