import React, { useState } from "react";

export default function People() {
  const [activeTab, setActiveTab] = useState(false);

  return (
    <section className="people-section section-padding" id="people">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="section-title-wrap mb-5">
              <h2 className="section-title">Groomsmen & Bridesmaid</h2>

              <div className="section-title-bottom">
                <span className="section-title-line"></span>
                <i className="section-title-icon bi-heart-fill"></i>
                <span className="section-title-line"></span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-5 col-12 me-auto">
            <nav>
              <div
                className="nav nav-tabs flex-lg-column align-items-baseline"
                id="nav-tab"
                role="tablist"
              >
                <button
                    className={!activeTab ? "nav-link active" : "nav-link"}
                    id="nav-bridesmaid-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-bridesmaid"
                    type="button"
                    role="tab"
                    aria-controls="nav-bridesmaid"
                    aria-selected="false"
                    onClick={() => setActiveTab(false)}
                >
                  <h3>Bride Side</h3>
                </button>

                <button
                  className={activeTab ? "nav-link active" : "nav-link"}
                  id="nav-groomsmen-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-groomsmen"
                  type="button"
                  role="tab"
                  aria-controls="nav-groomsmen"
                  aria-selected="true"
                  onClick={() => setActiveTab(true)}
                >
                  <h3>Groom Side</h3>
                </button>

              </div>
            </nav>
          </div>

          <div className="col-lg-8 col-md-6 col-12">
            <div className="tab-content" id="nav-tabContent">
              <div
                className={
                  activeTab ? "tab-pane fade show active" : "tab-pane fade show"
                }
                id="nav-groomsmen"
                role="tabpanel"
                aria-labelledby="nav-groomsmen-tab"
              >
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <div className="people-thumb image-hover-thumb">
                      <img
                        src="images/jowelbm.jpeg"
                        className="people-image img-fluid"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="section-block">
                      <div className="d-flex align-items-center my-3">
                        <h4 className="mb-0">Jowel</h4>

                        <span className="about-tag ms-2">friend</span>
                      </div>

                      <p>
                        Jowel Castaneda, 27. The best man is the groom's right-hand
                        man at the wedding. This person is asked to stand by the
                        groom's side to support and assist in any way possible
                        before and during the wedding.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="people-thumb image-hover-thumb">
                      <img
                        src="images/Aaron.jpeg"
                        className="people-image img-fluid"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="section-block">
                      <div className="d-flex align-items-center my-3">
                        <h4 className="mb-0">Aaron</h4>

                        <span className="about-tag ms-2">cousin</span>
                      </div>

                      <p>
                        Aaron Rosal, 26. The candle sponsor light the wedding
                        candles before the rite of marriage. He also help the
                        best man with his duties and usher in guests before the
                        ceremony.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="people-thumb image-hover-thumb">
                      <img
                          src="images/chan.jpeg"
                          className="people-image img-fluid"
                          alt=""
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="section-block">
                      <div className="d-flex align-items-center my-3">
                        <h4 className="mb-0">Justine</h4>

                        <span className="about-tag ms-2">friend</span>
                      </div>

                      <p>
                        JK Chan, 27. The first cord sponsor, tie or place
                        the cord over the groom. He is there to get ready with
                        the groom and get the party started.
                      </p>
                    </div>
                  </div>





                  <div className="col-lg-6 col-12">
                    <div className="people-thumb image-hover-thumb">
                      <img
                        src="images/jello.jpeg"
                        className="people-image img-fluid"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="section-block">
                      <div className="d-flex align-items-center my-3">
                        <h4 className="mb-0">Jello</h4>

                        <span className="about-tag ms-2">cousin</span>
                      </div>

                      <p>
                        Jello Dizon, 27. The first veil sponsor drape the veil
                        over the groom's shoulder. Besides giving support to the
                        groom, this guy typically also help the groom with
                        whatever last minute errands he needs to run.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="people-thumb image-hover-thumb">
                      <img
                          src="images/forj.jpeg"
                          className="people-image img-fluid"
                          alt=""
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="section-block">
                      <div className="d-flex align-items-center my-3">
                        <h4 className="mb-0">Forj</h4>

                        <span className="about-tag ms-2">Friend</span>
                      </div>

                      <p>
                        Forj Jacinto, 27. The second cord sponsor is responsible
                        in removing the cord after Communion. He is also there
                        to make sure everything will go as planned.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="people-thumb image-hover-thumb">
                      <img
                        src="images/juls.jpeg"
                        className="people-image img-fluid"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="section-block">
                      <div className="d-flex align-items-center my-3">
                        <h4 className="mb-0">Julius</h4>

                        <span className="about-tag ms-2">Friend sa labas</span>
                      </div>

                      <p>
                        Juls Martinez, 24. The second veil sponsor will also remove
                        the veil after the cord is removed. He is also the groom
                        tasks and schedule coordinator.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={
                  !activeTab
                    ? "tab-pane fade show active"
                    : "tab-pane fade show"
                }
                id="nav-bridesmaid"
                role="tabpanel"
                aria-labelledby="nav-bridesmaid-tab"
              >
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <div className="people-thumb image-hover-thumb">
                      <img
                        src="images/ategrace.jpeg"
                        className="people-image img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="section-block">
                      <div className="d-flex align-items-center my-3">
                        <h4 className="mb-0">Grace</h4>

                        <span className="about-tag ms-2">sister</span>
                      </div>

                      <p>
                        Grace Olivarez, 29. The maid of honor is in charge of the
                        leading the rest of the bridesmaids throughout the
                        planning process and on the day of the wedding.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="people-thumb image-hover-thumb">
                      <img
                          src="images/angel.jpeg"
                          className="people-image img-fluid"
                          alt=""
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="section-block">
                      <div className="d-flex align-items-center my-3">
                        <h4 className="mb-0">Angel</h4>

                        <span className="about-tag ms-2">Friend</span>
                      </div>

                      <p>
                        Angel Sotto, 24. The candle sponsor light the wedding
                        candles before the rite of marriage. The lighting of
                        this candle is a ceremonial acknowledgement of the vows
                        exchanged by the bride and groom that have united them
                        in marriage.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="people-thumb image-hover-thumb">
                      <img
                          src="images/lilet.jpeg"
                          className="people-image img-fluid"
                          alt=""
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="section-block">
                      <div className="d-flex align-items-center my-3">
                        <h4 className="mb-0">Lilette</h4>

                        <span className="about-tag ms-2">friend</span>
                      </div>

                      <p>
                        Lilette Simon, 24. The first veil sponsor drape the veil over
                        the bride's head. The veil came to symbolize modesty and
                        obedience. In many religions it is seen as a symbol of
                        reverence for women to cover their heads.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="people-thumb image-hover-thumb">
                      <img
                        src="images/dharyan.jpeg"
                        className="people-image img-fluid"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="section-block">
                      <div className="d-flex align-items-center my-3">
                        <h4 className="mb-0">Dharyan</h4>

                        <span className="about-tag ms-2">friend</span>
                      </div>

                      <p>
                        Dharyan Salcedo, 26. The first cord sponsor, tie or place
                        the cord over the groom. He is there to get ready with
                        the groom and get the party started.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="people-thumb image-hover-thumb">
                      <img
                          src="images/mitch.jpeg"
                          className="people-image img-fluid"
                          alt=""
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="section-block">
                      <div className="d-flex align-items-center my-3">
                        <h4 className="mb-0">Mitch</h4>

                        <span className="about-tag ms-2">Friend</span>
                      </div>

                      <p>
                        Mitch Pallera, 26. The second cord sponsor is responsible
                        for removing the cord after Communion. This cord
                        symbolizes lifetime unity or the everlasting union of
                        the bride and groom when they officially become husband
                        and wife.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="people-thumb image-hover-thumb">
                      <img
                          src="images/tine.jpeg"
                          className="people-image img-fluid"
                          alt=""
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="section-block">
                      <div className="d-flex align-items-center my-3">
                        <h4 className="mb-0">Christine</h4>

                        <span className="about-tag ms-2">Friend</span>
                      </div>

                      <p>
                        Christine Lacsina, 25. The second veil sponsor will remove
                        the veil after the cord is removed. The veil came to
                        symbolize modesty and obedience. In many religions it is
                        seen as a symbol of reverence for women to cover their
                        heads.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="people-thumb image-hover-thumb">
                      <img
                          src="images/charles.jpeg"
                          className="people-image img-fluid"
                          alt=""
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="section-block">
                      <div className="d-flex align-items-center my-3">
                        <h4 className="mb-0">Charles</h4>

                        <span className="about-tag ms-2">friend</span>
                      </div>

                      <p>
                        Charles, 26. The first person to assist the bride. This symbolizes the
                        lifetime promise to be there for each other whenever the bride needs
                        extra support from her cherished friends.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="people-thumb image-hover-thumb">
                      <img
                          src="images/richard.jpeg"
                          className="people-image img-fluid"
                          alt=""
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="section-block">
                      <div className="d-flex align-items-center my-3">
                        <h4 className="mb-0">Richard</h4>

                        <span className="about-tag ms-2">Friend</span>
                      </div>

                      <p>
                        Richard, 27. The second person to assist the bride. This symbolizes the
                        lifetime promise to be there for each other whenever the bride needs
                        extra support from her cherished friends.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
