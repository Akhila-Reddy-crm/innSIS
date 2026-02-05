"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Title from "@/public/images/icon/section-title.png";
import One from "@/public/images/testimonial/testimonial-image1.png";
import Two from "@/public/images/testimonial/testimonial-image2.png";
import bgImage from "@/public/images/about/Aboutus.png";
const Testimonial = () => {
  return (
    <section
      className="testimonial-area bg-image pt-120 pb-120"
      style={{
           backgroundImage: `url("/images/about/Aboutus.png")`,
      }}
      id="testimonial-section"
    >
      <div className="container">
        <div className="row g-4">
          <div
            className="col-lg-6 "
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            <div className="talk-us__item">
              <div className="section-header mb-30">
                <h5 className="text-white">
                  <svg
                    width="28"
                    height="12"
                    viewBox="0 0 28 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.75"
                      y="0.75"
                      width="18.5"
                      height="10.5"
                      rx="5.25"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <rect x="8" width="20" height="12" rx="6" fill="white" />
                  </svg>
                  TALK TO US
                </h5>
                <h2 className="text-white">How May We Help You!</h2>
              </div>
              <form action="#">
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="name">Your name*</label>
                    <input type="text" id="name" placeholder="Robot fox" />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="email">Your Email*</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="info@example.com"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="subject">subject*</label>
                    <input type="text" id="subject" placeholder="Subject" />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="number">Your Phone*</label>
                    <input
                      type="text"
                      id="number"
                      placeholder="+1253 457 7840"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="massage">Message*</label>
                    <textarea
                      id="massage"
                      placeholder="Write Message"
                    ></textarea>
                  </div>
                </div>
                <button>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
