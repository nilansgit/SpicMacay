import scrollBg from "../assets/images/AboutUsbackground.webp";
import aboutTitle from "../assets/images/AboutUstext.webp";
import illustration from "../assets/images/SitarWomen.webp";


export default function AboutUsCard() {
  return (
    <section className="w-full flex justify-center">
      {/* Card container */}
      <div className="relative w-full  aspect-[1500/1000]">
        
        {/* Scroll / Card background */}
        <img
          src={scrollBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-contain"
        />

        {/* Content layer */}
        <div className="absolute inset-[19%] flex gap-10">
          
          {/* Text block */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="w-[200%] h-[12%]">
              <img src={aboutTitle} alt="Our Supporters"/>
            </div>
            <p className="font-body leading-relaxed text-[clamp(13px,1.3vw,18px)] text-[#3a2a1a]">
              SPIC MACAY NITK is the Mangalore chapter of SPIC MACAY — a nationwide voluntary movement dedicated to preserving and promoting India’s rich classical and folk heritage among young audiences. Through concerts, workshops, and interactive sessions, the chapter provides exposure to the depth, discipline, and philosophy underlying Indian traditions, helping students develop an organic appreciation for India’s intangible cultural heritage. Beyond performances, the chapter also encourages volunteerism, organizational leadership, and cultural responsibility among students.
            </p>
          </div>

          {/* Illustration */}
          <div className="w-[35%] flex items-center justify-center">
            <img
              src={illustration}
              alt=""
              className="w-full h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}


{/* Mobile layout */}
<div className="block md:hidden px-6 py-10 max-w-xl mx-auto">
  <h2 className="font-heading text-2xl mb-4 text-[#3a2a1a]">
    About Us
  </h2>

  <p className="font-body text-base leading-relaxed text-[#3a2a1a] mb-6">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eros
    enim, auctor vitae fermentum at, iaculis a purus.
  </p>

  <img
    src={illustration}
    alt=""
    className="w-full max-w-sm mx-auto"
  />
</div>



