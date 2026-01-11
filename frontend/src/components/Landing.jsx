import "../styles/Landing.css";
import UBackground from "../assets/images/BackgroundMain.webp";
import FBackground from "../assets/images/FooterBackground.webp";
import SponsorsLogo from "../assets/images/SponsorsText.png";
import SupportersText from "../assets/images/SupportersText.png";

import logo1 from "../assets/images/Slogo1.png";
import logo2 from "../assets/images/Slogo2.png";
import logo3 from "../assets/images/Slogo3.png";
import logo4 from "../assets/images/Slogo2.png";

const logos = [logo1, logo2, logo3, logo4];

import Navbar from "./Navbar.jsx";
import Carousel from "./Carousel.jsx";
import AboutUs from "./AboutUs.jsx";
import Footer from "./Footer.jsx";
import Supporters from "./Supporters.jsx";
import SliderBar from "./SliderBar.jsx";

function Landing() {
  return (
    <>
      <section className="section section-hero">
        <img className="bg-image" src={UBackground} alt="" />

        <div className="content-layer">
          <Navbar />
          <Carousel />
          {/* <AboutUs /> */}
          {/* <AboutUs /> */}
          {/* <AboutUs />
          <AboutUs /> */}
          {/* <SliderBar headingImage={SponsorsLogo} logos={logos}/> */}
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
  );
}

export default Landing;

