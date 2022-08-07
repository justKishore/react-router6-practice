import { Outlet } from "react-router-dom";
// Outlet for shared componets to nest routes

const SharedProductLayout = () => {
  return (
    <section className="section">
      <h2>products</h2>
      <Outlet />
    </section>
  );
};
export default SharedProductLayout;
