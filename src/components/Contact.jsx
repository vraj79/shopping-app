import React from 'react'

const Contact = () => {
  return (
    <>
    <section className="container mb-4">
        {/*Section heading*/}
        <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
        {/*Section description*/}
        <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
          a matter of hours to help you.</p>
        <div className="row">
          {/*Grid column*/}
          <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
              {/*Grid row*/}
              <div className="row">
                {/*Grid column*/}
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input type="text" id="name" name="name" className="form-control" />
                    <label htmlFor="name" className>Your name</label>
                  </div>
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input type="text" id="email" name="email" className="form-control" />
                    <label htmlFor="email" className>Your email</label>
                  </div>
                </div>
                {/*Grid column*/}
              </div>
              {/*Grid row*/}
              {/*Grid row*/}
              <div className="row mt-3">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input type="text" id="subject" name="subject" className="form-control" />
                    <label htmlFor="subject" className>Subject</label>
                  </div>
                </div>
              </div>
              {/*Grid row*/}
              {/*Grid row*/}
              <div className="row mt-3">
                {/*Grid column*/}
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea type="text" id="message" name="message" rows={2} className="form-control md-textarea" defaultValue={""} />
                    <label htmlFor="message">Your message</label>
                  </div>
                </div>
              </div>
              {/*Grid row*/}
            </form>
            <div className="text-center text-md-left mt-0">
              <a className="btn btn-primary">Send</a>
            </div>
            <div className="status" />
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li><i className="fas fa-map-marker-alt fa-2x" />
                <p>Gaya,Bihar,India</p>
              </li>
              <li><i className="fas fa-phone mt-4 fa-2x" />
                <p>+91 7903467310</p>
              </li>
              <li><i className="fas fa-envelope mt-4 fa-2x" />
                <p>contact@vraj.com</p>
              </li>
            </ul>
          </div>
          {/*Grid column*/}
        </div>
      </section>
      <div className="mt-5 d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
      {/* Copyright */}
      <div className="text-white mb-3 mb-md-0">
        Copyright © 2022. All rights reserved.
      </div>
      {/* Copyright */}
      {/* Right */}
      <div>
        <button className="btn btn-primary me-4">
          <i className="fab fa-facebook-f" />
        </button>
        <button className="btn btn-primary me-4">
          <i className="fab fa-twitter" />
        </button>
        <button className="btn btn-primary me-4">
          <i className="fab fa-google" />
        </button>
        <button className="btn btn-primary">
          <i className="fab fa-linkedin-in" />
        </button>
      </div>
      {/* Right */}
    </div>
    </>
  )
}

export default Contact