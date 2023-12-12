import { Carousel } from "react-bootstrap";
import Image from "next/image";

function Header() {
  return (
    <section className="hero-section d-flex pt-5" id="home">
      <div className="hero-container container-fluid d-flex flex-column justify-content-center">
        <div>
          <div className="col-lg col-12 my-auto">
            <h1 className="text-center hero-title mb-4">
              GIAN & AVE
            </h1>
            <h3 className="text-center">
               Christ The King Parish | October 18 2023, 1:30 PM
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
