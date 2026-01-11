import "../styles/Supporters.css";

import headingImg from "../assets/images/SupportersText.png";

import logo1 from "../assets/images/Slogo1.png";
import logo2 from "../assets/images/Slogo2.png";
import logo3 from "../assets/images/Slogo3.png";
import logo4 from "../assets/images/Slogo2.png";

const logos = [logo1, logo2, logo3, logo4];

function Supporters() {
  return (
    <section className="supporters-strip">
      <img src={headingImg} alt="Our Supporters" className="supporters-heading" />

      <div className="supporters-marquee">
        <div className="supporters-track">
          <div className="logo-set">
            {logos.map((logo, i) => (
              <img key={i} src={logo} alt="supporter" />
            ))}
          </div>

          <div className="logo-set">
            {logos.map((logo, i) => (
              <img key={`d-${i}`} src={logo} alt="supporter" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Supporters;


