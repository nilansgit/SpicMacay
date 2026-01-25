import "../styles/Landing.css";
import Carousel from "./Carousel.jsx";
import AboutUs from "./AboutUs.jsx";
import MainLayout from "./MainLayout.jsx";
import Navbar from "./Navbar.jsx";
import Cards from "./Cards.jsx";

function Landing() {
  return (
    <MainLayout>
      <div>
        <Navbar/>
        <Carousel/>
        <AboutUs/>
      </div>
    </MainLayout>
  );
}

export default Landing;

