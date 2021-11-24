import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar">
      <h1>{title}</h1>
      <div className="links">
        <Link
          to="/"
          style={{
            color: "green",
            background: "yellow",
            borderRadius: "8px",
          }}
        >
          Home
        </Link>
        <Link
          to="/create"
          style={{
            color: "green",
            backgroundColor: "yellow",
            borderRadius: "8px",
          }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
