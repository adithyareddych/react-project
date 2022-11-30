import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container1">
      <section className="footer-subscription1">
        <p className="footer-subscription-heading1">
          Join for our every week E-Magazines.
        </p>
        <p className="footer-subscription-text1">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas1">
          <form>
            <input
              className="footer-input1"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--primary1" className="btnsub1">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
      <div class="footer-links1">
        <div className="footer-link-wrapper1">
          <div class="footer-link-items1">
            <h3>About Us</h3>
            <Link to="/sign-up">Placements</Link>
            <Link to="/">Visiona & Mission</Link>
            <Link to="/">Founder's Message</Link>
            <Link to="/">Achievements</Link>
            <Link to="/">NAAC</Link>
          </div>
          <div class="footer-link-items1">
            <h3>E-Resources</h3>
            <Link to="/">CSE E-Resources</Link>
            <Link to="/">IT E-Resources</Link>
            <Link to="/">ECE E-Resources</Link>
            <Link to="/">EEE E-Resources</Link>
            <Link to="/">ME E-Resources</Link>
          </div>
        </div>
        <div className="footer-link-wrapper1">
          <div class="footer-link-items1">
            <h3>Quick Links</h3>
            <Link to="/">Student Activities</Link>
            <Link to="/">Gallery</Link>
            <Link to="/">Research</Link>
            <Link to="/">Street cause</Link>
            <Link to="/">E-Magazine</Link>
          </div>
          <div class="footer-link-items1">
            <h3>Social Media</h3>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section class="social-media1">
        <div class="social-media-wrap1">
          <div class="footer-logo1">
            <Link to="/" className="social-logo1">
              Hyderabad University
              {/* <i class="fab fa-typo3" /> */}
            </Link>
          </div>
          <span class="website-rights1">© 2022</span>
        </div>
      </section>
    </div>
  );
}
export default Footer;
