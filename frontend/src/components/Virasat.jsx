import VirasatBg from "../assets/images/VirasatBg.jpg";
import VirasatText from "../assets/images/VirasatText.png"
import Cards from "./Cards";
import MainLayout from "./MainLayout";
import Navbar from "./Navbar";
import { artist_details } from "../utils /virasat.js"
import { workshop_details } from "../utils /virasat.js"
import concert from  "../assets/images/ConcertsText.png"
import workshop from  "../assets/images/WorkshopText.png"
import AboutUsCard from "./AboutUs.jsx";

export default function Virasat() {
  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={VirasatBg}
          alt="Virasat Background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 h-full w-full">
          <Navbar/>
          <div className="flex h-full items-center justify-center px-4">
            <img
              src={VirasatText}
              alt="Virasat Title"
              className="
                max-w-[90%]
                md:max-w-[700px]
                lg:max-w-[900px]
                drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)]
              "
            />
          </div>

        </div>
      </section>
      <MainLayout>
        <div className="flex flex-col gap-[12rem]">
          <div className="">
            <div className=" flex justify-start absolute" >
              <img src={concert} alt="Our Supporters" className="supporters-heading" />
            </div>
            {artist_details.map(c => (
              <Cards details = {c}/>
            ))}
          </div>
          <div className="!mb-[8rem]">
            <div className=" flex justify-start absolute" >
              <img src={workshop} alt="Our Supporters" className="supporters-heading" />
            </div>
            {workshop_details.map(c => (
              <Cards details = {c}/>
            ))}
          </div>
        </div>
      </MainLayout>
    </>
  );
}
