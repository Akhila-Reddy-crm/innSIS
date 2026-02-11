"use client";
import Link from "next/link";
import Image from "next/image";
import One from "@/public/images/shape/footer-regular-left.png";
import Two from "@/public/images/shape/footer-solid-left.png";
import Three from "@/public/images/shape/footer-regular-right.png";
import Four from "@/public/images/shape/footer-solid-right.png";
import Five from "@/public/images/shape/footer-shadow-shape.png";
import Logo from "@/public/images/logo/logo-transparent.png";

const Footer = () => {
  return (
    <footer className="footer-area secondary-bg">
      <div
        className="footer__shape-regular-left "
        data-aos="fade-left"
        data-aos-delay="0"
        data-aos-duration="1500"
      >
        <Image src={One} alt="shape" priority />
      </div>
      <div
        className="footer__shape-solid-left "
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-duration="1500"
      >
        <Image className="sway_Y__animation" src={Two} alt="shape" priority />
      </div>
      <div
        className="footer__shape-solid-right "
        data-aos="fade-right"
        data-aos-delay="0"
        data-aos-duration="1500"
      >
        <Image className="sway_Y__animation" src={Three} alt="shape" priority />
      </div>
      <div
        className="footer__shape-regular-right "
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1500"
      >
        <Image src={Four} alt="shape" priority />
      </div>
      <div className="footer__shadow-shape">
        <Image src={Five} alt="shodow" priority />
      </div>
      <div className="container">
        <div className="footer__wrp pt-100 pb-100">
          <div
            className="footer__item item-big "
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1500"
          >
            <Link href="/" className="logo mb-30">
              <Image src={Logo} alt="INNSIS logo" priority style={{maxHeight:"10vh"}}/>
            </Link>
            <p>
              INNSIS - Innovation. Insight. Impact.
            </p>
            <div className="social-icon">
              <Link href="https://www.instagram.com/innsis_education/  " aria-label="Facebook">
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link href="https://www.linkedin.com/company/innsis/" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
              <Link href="/" aria-label="YouTube">
                <i className="fa-brands fa-youtube"></i>
              </Link>
            </div>
          </div>
          <div
            className="footer__item item-sm "
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            <h3 className="footer-title">Quick Links</h3>
            <ul>
              <li>
                <a
                  href="#features"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <i className="fa-regular fa-angles-right me-1"></i> Features
                </a>
              </li>
               <li>
                <a
                  href="#about-section"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <i className="fa-regular fa-angles-right me-1"></i> About Us
                </a>
              </li>
              <li>
                <a
                  href="#institutions"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('institutions')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <i className="fa-regular fa-angles-right me-1"></i> Our Institutions
                </a>
              </li>
              <li>
                <a
                  href="#impact-section"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('impact-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <i className="fa-regular fa-angles-right me-1"></i> Our Impact
                </a>
              </li>
              <li>
                <a
                  href="#contact-section"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <i className="fa-regular fa-angles-right me-1"></i> Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div
            className="footer__item item-big"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1500"
            style={{ alignSelf: "flex-start" }}
          >
            <h3 className="footer-title">Contact Us</h3>
            <p className="mb-20">
              Head Office
              <br />
              103-2727 Steeles Ave West Unit 727
              <br />
              Toronto, Ontario, M3J 3G9
              <br />
              Canada
            </p>
            <ul className="footer-contact">
              <li>
                <i className="fa-duotone fa-phone"></i>
                <div className="info">
                  <h5>Phone Call:</h5>
                  <p>+1 (289) 233 2976</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
