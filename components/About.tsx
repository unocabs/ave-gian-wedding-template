import React from "react";

export default function About() {
  return (
    <section className="about-section section-padding" id="our_story">
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
              <h3 className="section-title">THE BRIDE & THE GROOM</h3>
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


          <div className="col-lg-3 col-12">
          <div className="image-hover-thumb">
              <img
                  src="images/gi-ave/gisolo.jpeg"
                  className="about-image img-fluid"
                  alt=""
              />
            </div>
          </div>

          <div className="col-lg-3 col-12">
            <div className="about-info-wrap d-flex flex-column">
              <div className="about-info-title d-flex align-items-center my-3">
                <h4>Gian</h4>

                <span className="about-tag ms-2">The Groom</span>
              </div>

              <p>From the moment I met Gian, I knew he was something special. His presence exudes confidence and kindness in equal measure. Gian is not just incredibly talented and intelligent, but he also has a great sense of humor that can make anyone laugh. Whenever I've had a tough day, he's been there to lift my spirits and bring a smile to my face. He's my unwavering supporter, always believing in me even when I doubted myself. Gian isn't just my partner; he's my rock and my better half.
              </p>


            </div>
          </div>

          <div className="col-lg-3 col-12">
            <div className="image-hover-thumb">
              <img
                  src="images/gi-ave/soloave.jpeg"
                  className="about-image img-fluid"
                  alt=""
              />
            </div>
          </div>

          <div className="col-lg-3 col-12">
            <div className="about-info-wrap d-flex flex-column">
              <div className="about-info-title d-flex align-items-center my-3">
                <h4>Ave</h4>

                <span className="about-tag ms-2">The Bride</span>
              </div>

              <p>
                When I first laid eyes on Ave, I couldn't help but be captivated by her. She possesses an incredible charm that lights up any room she enters. Her warmth, intelligence, and sense of humor are just a few of the many qualities that drew me to her. Ave has this magical ability to turn my worst days into the best ones with just a smile. She's my constant source of encouragement, even when I doubted my own abilities. In every sense, she's not just my partner; she's my soulmate.
              </p>


            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
