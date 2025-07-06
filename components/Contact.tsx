import React from "react";

export default function Contact() {
  return (
    <section
      className="contact-section section-bg section-padding"
      id="contact_us"
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
              <h3 className="section-title">#GIANuineLoveWithAve</h3>
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

          <div className="col-lg-4 col-md-6 col-12">
            <h5 className="mb-4">Your own wedding website?</h5>
            <p className="p-contact">
              Yes, you and your partner can get your own website!
            </p>
            <p className="p-contact">
              Send me a message. Thank you! 
            </p>
          </div>

          <div className="col-lg-4 col-md-6 col-12 my-4 my-lg-0 my-md-0">
            <h5 className="mb-4">Contact Information</h5>

            <p className="mb-2 p-contact">
              <a href="mailto:rgiancabrera@gmail.com">
                rgiancabrera@gmail.com
              </a>
            </p>

            <p className="p-contact">
              <a href="tel: 0998-292-2622">0998-292-2622</a>
            </p>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <h5 className="mb-4">Socials</h5>

            <ul className="social-icon">
              <li className="social-icon-item">
                <a
                    href="https://twitter.com/giancarbss"
                    target="_blank"
                    className="social-icon-link bi-twitter"
                ></a>
              </li>

              <li className="social-icon-item">
                <a
                    href="https://www.instagram.com/giancarbss/"
                    target="_blank"
                    className="social-icon-link bi-instagram"
                ></a>
              </li>

              <li className="social-icon-item">
                <a
                    href="https://www.facebook.com/avemary.garcia"
                  target="_blank"
                  className="social-icon-link bi-facebook"
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
