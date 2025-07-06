import React from "react";

export default function Wedding() {
  return (
    <section
      className="the-wedding-section section-bg section-padding"
      id="thewedding"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="section-title-wrap mb-5">
              <span className="section-title-line mb-4"></span>
              <span className="section-title-line mb-4"></span>
              <span className="section-title-line mb-4"></span>
              <span className="section-title-line mb-4"></span>
              <span className="section-title-line mb-4"></span>
              <span className="section-title-line mb-4"></span>
              <span className="section-title-line mb-4"></span>
              <span className="section-title-line mb-4"></span>
              <span className="section-title-line mb-4"></span>
              <span className="section-title-line mb-4"></span>
              <h3 className="section-title">THE WEDDING</h3>
              <div className="section-title-bottom">
                <span className="section-title-line"></span>
                <span className="section-title-line"></span>
                <span className="section-title-line"></span>
                <span className="section-title-line"></span>
                <span className="section-title-line"></span>
                <span className="section-title-line"></span>
                <span className="section-title-line"></span>
                <span className="section-title-line"></span>
                <span className="section-title-line"></span>
                {/*<i className="section-title-icon bi-heart-fill"></i>*/}
                <span className="section-title-line"></span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 d-flex flex-column mb-4 mb-lg-0 mb-md-0">
            <div className="image-hover-thumb">
              <img src="images/new/christtheking.jpeg" className="img-fluid" alt="" />
            </div>

            <div className="section-block">
              <h4 className="my-3">Wedding Ceremony</h4>

              <p className="mb-2">
                <i className="bi-geo-alt me-1"></i>
                Christ the King Parish Church
              </p>

              <p>
                <i className="bi-clock me-1"></i>
                1:30 PM to 3:00 PM
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 d-flex flex-column">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.8862547108247!2d120.61407617473564!3d15.164590163020776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396edff0d509b55%3A0xea58b53fb2af7a85!2sChrist%20the%20King%20Parish%20Church!5e0!3m2!1sen!2sph!4v1694881539376!5m2!1sen!2sph"
              width="100%"
              height="310"
              loading="lazy"
            ></iframe>

            <div className="section-block">
              <h4 className="my-3">Ceremony Location</h4>

              <p className="mb-2">
                <i className="bi-geo-alt me-1"></i>
                Google Maps
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 d-flex flex-column mb-4 mb-lg-0 mb-md-0">
            <div className="image-hover-thumb">
              <img src="images/new/casa.jpeg" className="img-fluid" alt="" />
            </div>

            <div className="section-block">
              <h4 className="my-3">The Reception</h4>

              <p className="mb-2">
                <i className="bi-geo-alt me-1"></i>
                Casa Salome | Balacat Ave., Mabalacat, Pampanga
              </p>

              <p>
                <i className="bi-clock me-1"></i>
                3:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
