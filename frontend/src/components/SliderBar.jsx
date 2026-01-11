import "../styles/SliderBar.css";



function SliderBar({headingImage, logos}) {
  return (
    <section className="supporters-strip">
      <img src={headingImage} alt="Our Supporters" className="supporters-heading" />

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

export default SliderBar;


