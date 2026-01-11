import { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/images/WebsiteLogo.webp";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        
        {/* Logo Section */}
        <div className="navbar-logo">
          <img src={logo} alt="SPIC MACAY Logo" />
        </div>

        {/* Desktop Nav */}
        <nav className="navbar-links">
          <a href="#home">Home</a>
          <a href="#events">Events</a>
          <a href="#artists">Artists</a>
          <a href="#team">Team</a>
          <a href="#faqs">FAQs</a>
          <a href="#contact">Contact us</a>
        </nav>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <a onClick={() => setMenuOpen(false)} href="#home">Home</a>
        <a onClick={() => setMenuOpen(false)} href="#events">Events</a>
        <a onClick={() => setMenuOpen(false)} href="#artists">Artists</a>
        <a onClick={() => setMenuOpen(false)} href="#team">Team</a>
        <a onClick={() => setMenuOpen(false)} href="#faqs">FAQs</a>
        <a onClick={() => setMenuOpen(false)} href="#contact">Contact us</a>
      </div>
      
    </header>
  );
}

export default Navbar;
