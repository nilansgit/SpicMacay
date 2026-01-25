import { useState } from "react";
import {Link} from 'react-router-dom'
import "../styles/Navbar.css";
import logo from "../assets/images/WebsiteLogo.png";

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
          <Link to="/">Home</Link>
          <Link to="/teams">Team</Link>
          <Link to="/artists">Artists</Link>
          {/* <Link to="#team">Contact Us</Link> */}
          <Link to="/virasat" className=" py-1.5 rounded-full bg-[#8b2c0f] hover:bg-[#6f210c] transition !text-white "> &nbsp;&nbsp;Virasat&nbsp;&nbsp;</Link>
          <Link to="/aradhana" className=" py-1.5 rounded-full bg-[#8b2c0f] hover:bg-[#6f210c] transition !text-white "> &nbsp;&nbsp;Aradhana&nbsp;&nbsp;</Link>
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
        <Link onClick={() => setMenuOpen(false)} to="#home">Home</Link>
        <Link onClick={() => setMenuOpen(false)} to="#events">Events</Link>
        <Link onClick={() => setMenuOpen(false)} to="#artists">Artists</Link>
        <Link onClick={() => setMenuOpen(false)} to="#team">Team</Link>
        <Link onClick={() => setMenuOpen(false)} to="#faqs">FAQs</Link>
        <Link onClick={() => setMenuOpen(false)} to="#contact">Contact us</Link>
      </div>
      
    </header>
  );
}

export default Navbar;
