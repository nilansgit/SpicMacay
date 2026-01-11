import "../styles/Carousel.css";
import { useEffect, useState } from "react";
import { carouselImages } from "../utils /carouselImage";

function Carousel() {
  const [current, setCurrent] = useState(0);
  const total = carouselImages.length;

  const next = () => setCurrent((i) => (i + 1) % total);
  const prev = () => setCurrent((i) => (i - 1 + total) % total);

  useEffect(() => {
    const id = setInterval(next, 3500);
    return () => clearInterval(id);
  }, [total]);

  return (
    <section className="carousel-section">
      <div className="carousel">
        <button className="nav left" onClick={prev}>‹</button>

        <div className="carousel-track">
          {carouselImages.map((img, index) => {
            const offset = (index - current + total) % total;

            let cls = "slide";
            if (offset === 0) cls += " active";
            else if (offset === 1) cls += " right";
            else if (offset === total - 1) cls += " left";
            else cls += " hidden";

            return (
              <img
                key={index}
                src={img}
                alt=""
                className={cls}
              />
            );
          })}
        </div>

        <button className="nav right" onClick={next}>›</button>
      </div>
    </section>
  );
}

export default Carousel;
