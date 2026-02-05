import Link from "next/link";
import Image from "next/image";
import One from "@/public/images/shape/footer-regular-left.png";
import Two from "@/public/images/shape/footer-solid-left.png";
import Three from "@/public/images/shape/footer-regular-right.png";
import Four from "@/public/images/shape/footer-solid-right.png";
import Five from "@/public/images/shape/footer-shadow-shape.png";
import Logo from "@/public/images/logo/logo.jpg";

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
              <Image src={Logo} alt="INNSIS logo" priority />
            </Link>
            <p>
              INNSIS - A Smarter Student Information System.
            </p>
            <div className="social-icon">
              <Link href="/" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
              <Link href="/" aria-label="Twitter">
                <i className="fa-brands fa-twitter"></i>
              </Link>
              <Link href="/" aria-label="LinkedIn">
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
                <Link href="/service">
                  <i className="fa-regular fa-angles-right me-1"></i> Features
                </Link>
              </li>
              <li>
                <Link href="/solution">
                  <i className="fa-regular fa-angles-right me-1"></i> Solution
                </Link>
              </li>
              <li>
                <Link href="/pricing">
                  <i className="fa-regular fa-angles-right me-1"></i> Pricing
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <i className="fa-regular fa-angles-right me-1"></i> About Us
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <i className="fa-regular fa-angles-right me-1"></i> Support/Contact Us
                </Link>
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
              4517 Washington Ave. Manchester, Kentucky 39495
            </p>
            <ul className="footer-contact">
              <li>
                <i className="fa-duotone fa-phone"></i>
                <div className="info">
                  <h5>Phone Call:</h5>
                  <p>208-6666-0112, 308-5555-0113</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="container">
          <div className="d-flex gap-1 flex-wrap align-items-center justify-content-md-between justify-content-center">
            <p data-aos="fade-down" data-aos-delay="0" data-aos-duration="1500">
              &copy; All Copyright 2024 by <Link href="/">INNSIS</Link>
            </p>
            <ul
              className="d-flex align-items-center flex-wrap gap-4 "
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <li>
                <Link href="/">Terms of Service</Link>
              </li>
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
