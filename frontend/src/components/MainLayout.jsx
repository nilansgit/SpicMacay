import "../styles/MainLayout.css";
import UBackground from "../assets/images/BackgroundMain.webp";
import FBackground from "../assets/images/FooterBackground.webp";
import SponsorsLogo from "../assets/images/SponsorsText.png";
import SupportersText from "../assets/images/SupportersText.png";

import logo1 from "../assets/images/ministry_logo/1.png";
import logo2 from "../assets/images/ministry_logo/2.png";
import logo3 from "../assets/images/ministry_logo/3.png";
import logo4 from "../assets/images/ministry_logo/4.png";

import Logo1 from "../assets/images/sponsors_logo/1.png";
import Logo2 from "../assets/images/sponsors_logo/2.png";
import Logo3 from "../assets/images/sponsors_logo/3.png";
import Logo4 from "../assets/images/sponsors_logo/4.png";
import Logo5 from "../assets/images/sponsors_logo/5.png";
import Logo6 from "../assets/images/sponsors_logo/6.png";

const logos = [logo1, logo2, logo3, logo4];

const Logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6]

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import SliderBar from "./SliderBar.jsx";

export default function MainLayout({children}) {
  return (
    <>
      <section className="section section-hero">
        <img className="bg-image" src={UBackground} alt="" />

        <div className="content-layer">
          {children}
          <div className="slidebar">
            <SliderBar headingImage={SponsorsLogo} logos={Logos}/>
          </div>
        </div>
      </section>

      <section className="section section-footer">
        <img className="bg-image bg-img1" src={FBackground} alt="" />
        <div className="content-layer footer-content">
          <SliderBar headingImage={SupportersText} logos={logos}/>
          <Footer />
        </div>
      </section>
    </>
  )
}
