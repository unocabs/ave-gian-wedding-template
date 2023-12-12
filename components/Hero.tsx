import { Carousel } from "react-bootstrap";
import Image from "next/image";

function Header() {
  return (
    <section className="hero-section d-flex pt-5" id="home">
      <div className="hero-container container d-flex flex-column justify-content-end">
        <div>
          <div className="col-lg col-12 my-auto">
            <h3 className="">The journey starts here for</h3>

            <h1 className="text-center hero-title mb-4">
               Gian Cabrera & Ave Garcia</h1>


            {/*<p className="text-black mb-2">*/}
            {/*  /!*<i className="bi-bookmark-heart custom-icon me-1"></i>*!/*/}
            {/*  Gian Cabrera*/}
            {/*</p>*/}

            {/*<p className="text-black">*/}
            {/*  /!*<i className="bi-bookmark-heart custom-icon me-1"></i>*!/*/}
            {/*  Ave Garcia*/}
            {/*</p>*/}


          </div>

          <div className="col-lg-3 col-12  mt-auto ms-lg-auto">
            <div className="save-the-date-thumb">
              <h4 className="save-the-date-title">Special Day</h4>

              <div className="save-the-date-body">
                <span className="date">October 18 2023</span>
              </div>

            </div>
            <span className="justify-content-end"><a href="#our_story" className=" custom-link custom-btn btn mt-4">
              Know More About Us
            </a></span>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
