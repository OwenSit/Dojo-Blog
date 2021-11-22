const Navbar = ({ title }) => {
  return (
    <nav className="navbar">
      <h1>{title}</h1>
      <div className="links">
        <a
          href="/"
          style={{
            color: "green",
            background: "yellow",
            borderRadius: "8px",
          }}
        >
          Home
        </a>
        <a
          href="/create"
          style={{
            color: "green",
            backgroundColor: "yellow",
            borderRadius: "8px",
          }}
        >
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
