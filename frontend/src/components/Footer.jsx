import "../styles/Footer.css";
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="footer-top">
        <div className="footer-block">
          <h4>Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/faqs">FAQs</a></li>
          </ul>
        </div>

        <div className="footer-block">
          <h4>Contact</h4>
          <p>Email: <a href="mailto:spicmacay@iitr.ac.in">spicmacay@nitk.edu.in</a></p>
          <p>Phone: +91 81970 41878</p>
          <p>
            Spicmacay Office, Room No. 512,<br />
            Basic Science Block,<br />
            NITK Surathkal
          </p>
        </div>

        <div className="footer-block">
          <h3>SPICMACAY NITK SURATHKAL </h3>
          <p>
            Society for the Promotion of Indian Classical Music and Culture
            Amongst Youth – NITK (MANGALORE) Chapter.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="socials">
          <a href="https://www.instagram.com/spicmacaymangalore/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          ><FaInstagram /></a>
          <a href="https://www.facebook.com/spicmacaymangalore/"
            target="_blank"
            rel="noopener noreferrer"
          ><FaFacebook /></a>
          <a href="https://in.linkedin.com/company/spicmacay-mangalore"
            target="_blank"
            rel="noopener noreferrer"
          ><FaLinkedin/></a>
          <a href="https://x.com/spicmacaynitk"
            target="_blank"
            rel="noopener noreferrer"
          ><FaTwitter/></a>
        </div>

        <p>
          Designed & Developed with <span>♥</span> by Team SPICMACAY NITK.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
