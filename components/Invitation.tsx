import Link from "next/link";
import { useState } from "react";
import { Form } from "react-bootstrap";

export default function Invitation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guest, setGuest] = useState(1);
  const [message, setMessage] = useState("");

  // Validation
  const [invalidName, setInvalidName] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);

  const checkIfValid = () => {
    let isValid = true;
    if (name == "" || name.match(/^\s+$/)) {
      setInvalidName(true);
      isValid = false;
    } else {
      setInvalidName(false);
    }

    if (email == "" || email.match(/^\s+$/)) {
      setInvalidEmail(true);
      isValid = false;
    } else {
      setInvalidEmail(false);
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkIfValid();
  };

  return (
    <section className="rsvp-section section-padding" id="RSVP">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12 mx-auto">
            <div className="rsvp-form-wrap">
              <div className="section-title-wrap mb-5">
                <h2 className="rsvp-section-title">Invitation</h2>

                <div className="section-title-bottom">
                  <span className="section-title-line"></span>
                  <i className="section-title-icon bi-heart-fill"></i>
                  <span className="section-title-line"></span>
                </div>
              </div>

              <h5 className="question mb-4">
                We look forward to seeing you!&nbsp;
                <span className="text-muted">
                  The Wedding day is on October 18, 2023
                </span>
              </h5>


              <Form
                  className="custom-form rsvp-form"
                  role="form"
                  onSubmit={handleSubmit}
              >
                <div className="row">
                  <img src="/images/new/invitation.JPG" alt="Invitation"/>

                  <div className="col-lg-3 col-5 pt-3 mx-auto">
                    <button type="submit" className="form-control">
                      <Link
                        className="text-white"
                        target="_blank"
                        href="https://docs.google.com/spreadsheets/d/1FFSnKsKBAX309mh1IFtpwRu9fG84md2ln43HePzNgB4/edit#gid=1798866779"
                      >
                        Will you attend? Click here!
                      </Link>
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
