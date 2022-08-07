const Dashboard = ({ user }) => {
  return (
    <section className="section">
      <h4>Hello, {user?.name}</h4>
    </section>
  );
};
export default Dashboard;

// The optional chaining operator (?.) enables you to read the value of a property located deep within
// a chain of connected objects without having to check that each reference in the chain is valid.
