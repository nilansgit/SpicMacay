import "../styles/AboutUs.css";

import aboutBg from "../assets/images/AboutUsbackground.webp";
import aboutTitle from "../assets/images/AboutUstext.webp";
import aboutWoman from "../assets/images/SitarWomen.webp";

function AboutUs() {
  return (
    <section className="about-section">
      {/* Decorative background */}
      <img src={aboutBg} alt="" className="about-bg" />

      <div className="about-overlay">
        <div className="about-text-zone">
          <img src={aboutTitle} alt="About Us" className="about-title" />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc eros enim, auctor vitae fermentum at, iaculis a purus.
          </p>

          <p>
            Proin viverra dui in diam lobortis ullamcorper sed et sapien.
            Ut neque nisi, lobortis vitae auctor at, semper eu elit.
          </p>

          <p>
            Cras dui ex, sollicitudin quis viverra et, dapibus quis tortor.
            Praesent et lacus vitae odio commodo sollicitudin.
          </p>
        </div>

        <img
          src={aboutWoman}
          alt="Sitar Player"
          className="about-woman"
        />
      </div>
    </section>
  );
}

export default AboutUs;
