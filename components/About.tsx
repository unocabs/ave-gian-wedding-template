import React from "react";

export default function About() {
  return (
    <section className="about-section section-padding" id="our_story">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="section-title-wrap mb-5">
              <h2 className="section-title">The Bride & The Groom</h2>

              <div className="section-title-bottom">
                <span className="section-title-line"></span>
                <i className="section-title-icon bi-heart-fill"></i>
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

              {/*<p>Si Ave ay gubat na di makalat, parang dagat na di maalat.</p>*/}
              {/*<p>*/}
              {/*  Para siyang sunog na walang apoy, parang durian na walang amoy.*/}
              {/*</p>*/}
              {/*<p>*/}
              {/*  Kung titignan siya ay di perpekto, pero sa buhay ko siya lang*/}
              {/*  ang kukumpleto.*/}
              {/*</p>*/}

              <p>From the moment I met Gian, I knew he was something special. His presence exudes confidence and kindness in equal measure. Gian is not just incredibly talented and intelligent, but he also has a great sense of humor that can make anyone laugh. Whenever I've had a tough day, he's been there to lift my spirits and bring a smile to my face. He's my unwavering supporter, always believing in me even when I doubted myself. Gian isn't just my partner; he's my rock and my better half.
              </p>

              <div className="social-icon-wrap mt-auto">
                <ul className="social-icon ms-auto">
                  <li className="social-icon-item">
                    <a
                      href="https://www.facebook.com/geeyan.cabrera"
                      target="_blank"
                      className="social-icon-link bi-facebook"
                    ></a>
                  </li>

                  <li className="social-icon-item">
                    <a
                      href="https://twitter.com/giancarbs"
                      target="_blank"
                      className="social-icon-link bi-twitter"
                    ></a>
                  </li>

                  <li className="social-icon-item">
                    <a
                      href="https://www.instagram.com/giancarbs/"
                      target="_blank"
                      className="social-icon-link bi-instagram"
                    ></a>
                  </li>
                </ul>
              </div>
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

              {/*<p>*/}
              {/*  When I first met Gian, I already had a crush on him. He is so*/}
              {/*  amazing, talented, smart, funny, and an absolute sweetheart. He*/}
              {/*  makes me smile when I am sad. He lifts me up when I'm feeling*/}
              {/*  down. He always believe in me, even when I couldn't even believe*/}
              {/*  on myself. He's simply my other half.*/}
              {/*</p>*/}

              <p>
                When I first laid eyes on Ave, I couldn't help but be captivated by her. She possesses an incredible charm that lights up any room she enters. Her warmth, intelligence, and sense of humor are just a few of the many qualities that drew me to her. Ave has this magical ability to turn my worst days into the best ones with just a smile. She's my constant source of encouragement, even when I doubted my own abilities. In every sense, she's not just my partner; she's my soulmate.
              </p>

              <div className="social-icon-wrap mt-auto">
                <ul className="social-icon ms-auto">
                  <li className="social-icon-item">
                    <a
                        href="https://www.facebook.com/avemary.garcia"
                        target="_blank"
                        className="social-icon-link bi-facebook"
                    ></a>
                  </li>

                  <li className="social-icon-item">
                    <a
                        href="https://twitter.com/avemary.garcia"
                        target="_blank"
                        className="social-icon-link bi-twitter"
                    ></a>
                  </li>

                  <li className="social-icon-item">
                    <a
                        href="https://www.instagram.com/avemary.garcia/"
                        target="_blank"
                        className="social-icon-link bi-instagram"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
