import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="nav-home" to="/">
        Home
      </Link>
      <Link className="nav-list" to="/cars">
        Hundai Subcription
      </Link>
      <Link className="nav-list" to="/cars">
        Mahindra Subcription
      </Link>
      {/* Show Either logout or login based on auth context. DO NOT show both */}
      <Link className="nav-faq" to="/faqs">
        FAQ's
      </Link>

      <Link className="nav-login" to="/login">
        Login or Signup
      </Link>
    </div>
  );
};
