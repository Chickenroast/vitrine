// Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="hover-text text-xs ml-auto px-5 flex space-x-5 mt-5 md:text-lg md:text-right self-end justify-end">
      <Link to="/" className="hover:text-bold">
        Home
      </Link>
      <Link to="/about">/ About</Link>
      {/* Add more links as needed */}
    </nav>
  );
};

export default Navbar;
