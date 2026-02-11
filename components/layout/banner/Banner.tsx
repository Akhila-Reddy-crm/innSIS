"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import Line from "@/public/images/banner/banner-line.png";
import LineTwo from "@/public/images/banner/banner-right-line3.png";
import LineThree from "@/public/images/banner/banner-right-line4.png";
import One from "@/public/images/banner/banner-regular-left-shape.png";
import Two from "@/public/images/banner/banner-solid-left-shape.png";
import Three from "@/public/images/banner/banner-shape-left.png";
import Four from "@/public/images/banner/banner-shape-right-line.png";
import Five from "@/public/images/banner/banner-shape-right.png";
import Six from "@/public/images/banner/banner-right-line1.png";
import Seven from "@/public/images/banner/banner-right-line2.png";
import Eight from "@/public/images/banner/banner-right-line3.png";
import Nine from "@/public/images/banner/banner-right-line4.png";

const Banner = () => {
  return (
    <section className="banner-area">
      <div className="banner__line">
        <Image className="sway__animation" src={Line} alt="shape" priority />
      </div>
     <div className=" banner__slider" style={{maxHeight:"90vh"}}>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          freeMode={true}
          speed={3000}
          effect={"fade"}
          loop={true}
          roundLengths={true}
          modules={[Autoplay, EffectFade, Pagination]}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".banner__dot",
            clickable: true,
          }}
          className="swiper-wrapper"
        >
          <SwiperSlide>
            <div>
              <div
                data-animation="slideInLeft"
                data-duration="2s"
                data-delay=".3s"
                className="banner__shape-left2"
              >
                <Image src={One} alt="shape" priority />
              </div>
              <div
                data-animation="slideInLeft"
                data-duration="2s"
                data-delay=".9s"
                className="banner__shape-left1"
              >
                <Image src={Two} alt="shape" priority />
              </div>
              <div className="banner__shape-left3 " data-aos="fade-left">
                <Image
                  className="sway__animation"
                  src={Three}
                  alt="shape"
                  priority
                />
              </div>
              <div
                className="banner__shape-right2"
                data-animation="slideInRight"
                data-duration="3s"
                data-delay=".3s"
              >
                <Image src={Four} alt="shape" priority />
              </div>
              <div
                className="banner__shape-right1"
                data-animation="slideInRight"
                data-duration="2s"
                data-delay=".3s"
              >
                <Image src={Five} alt="shape" priority />
              </div>
              <div
                className="banner__right-line1"
                data-animation="slideInRight"
                data-duration="2s"
                data-delay=".9s"
              >
                <Image src={Six} alt="shape" priority />
              </div>
              <div
                className="banner__right-line2"
                data-animation="slideInRight"
                data-duration="2s"
                data-delay=".7s"
              >
                <Image src={Seven} alt="shape" priority />
              </div>
              <div
                className="banner__right-line3"
                data-animation="slideInRight"
                data-duration="2s"
                data-delay=".5s"
              >
                <Image src={Eight} alt="shape" priority />
              </div>
              <div
                className="banner__right-line4"
                data-animation="slideInRight"
                data-duration="2s"
                data-delay=".1s"
              >
                <Image src={Nine} alt="shape" priority />
              </div>
              <div
                className="slide-bg"
                style={{
                   backgroundImage: "url(https://images.pexels.com/photos/6684506/pexels-photo-6684506.jpeg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="container">
                <div className="banner__content">
                  <h4
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".3s"
                    className="text-white mb-20"
                  >
                    <svg
                      className="me-1"
                      width="40"
                      height="16"
                      viewBox="0 0 40 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.500183"
                        width="25.6667"
                        height="15"
                        rx="7.5"
                        stroke="white"
                      />
                      <rect
                        x="13.3334"
                        y="0.000183105"
                        width="26.6667"
                        height="16"
                        rx="8"
                        fill="white"
                      />
                    </svg>{" "}
                    Student Information System
                  </h4>
                  <h1
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".5s"
                    className="text-white"
                  >
                    A Smarter Way to Manage Student Information
                  </h1>
                  <p
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".7s"
                    className="mt-20"
                  >
                 One unified platform to manage admissions, academics, attendance, communication, reporting, and more.
                  </p>
                  <div className="d-flex gap-3 mt-60 flex-wrap">
                    <Link
                      data-animation="slideInRight"
                      data-duration="2s"
                      data-delay=".9s"
                      href="#features"
                      className="btn-one"
                    >
                      Explore Features{" "}
                      <i className="fa-regular fa-arrow-right-long"></i>
                    </Link>
                    <Link
                      data-animation="slideInRight"
                      data-duration="2s"
                      data-delay="1.1s"
                      href="contact"
                      className="btn-one btn-two"
                    >
                      Request a Demo{" "}
                      <i className="fa-regular fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div
                data-animation="slideInLeft"
                data-duration="2s"
                data-delay=".3s"
                className="banner__shape-left2"
              >
                <Image src={One} alt="shape" priority />
              </div>
              <div
                data-animation="slideInLeft"
                data-duration="2s"
                data-delay=".9s"
                className="banner__shape-left1"
              >
                <Image src={Two} alt="shape" priority />
              </div>
              <div className="banner__shape-left3 " data-aos="fade-left">
                <Image
                  className="sway__animation"
                  src={Three}
                  alt="shape"
                  priority
                />
              </div>
              <div
                className="banner__shape-right2"
                data-animation="slideInRight"
                data-duration="3s"
                data-delay=".3s"
              >
                <Image src={Four} alt="shape" priority />
              </div>
              <div
                className="banner__shape-right1"
                data-animation="slideInRight"
                data-duration="2s"
                data-delay=".3s"
              >
                <Image src={Five} alt="shape" priority />
              </div>
              <div
                className="banner__right-line1"
                data-animation="slideInRight"
                data-duration="2s"
                data-delay=".9s"
              >
                <Image src={Six} alt="shape" priority />
              </div>
              <div
                className="banner__right-line2"
                data-animation="slideInRight"
                data-duration="2s"
                data-delay=".7s"
              >
                <Image src={Seven} alt="shape" priority />
              </div>
              <div
                className="banner__right-line3"
                data-animation="slideInRight"
                data-duration="2s"
                data-delay=".5s"
              >
                <Image src={LineTwo} alt="shape" priority />
              </div>
              <div
                className="banner__right-line4"
                data-animation="slideInRight"
                data-duration="2s"
                data-delay=".3s"
              >
                <Image src={LineThree} alt="shape" priority />
              </div>
              <div
                className="slide-bg"
                style={{
                  backgroundImage: "url(https://images.pexels.com/photos/7972743/pexels-photo-7972743.jpeg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="container">
                <div className="banner__content">
                  <h4
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".3s"
                    className="text-white mb-20"
                  >
                    <svg
                      className="me-1"
                      width="40"
                      height="16"
                      viewBox="0 0 40 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.500183"
                        width="25.6667"
                        height="15"
                        rx="7.5"
                        stroke="white"
                      />
                      <rect
                        x="13.3334"
                        y="0.000183105"
                        width="26.6667"
                        height="16"
                        rx="8"
                        fill="white"
                      />
                    </svg>{" "}
                    Student Information System
                  </h4>
                  <h1
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".5s"
                    className="text-white"
                  >
                   Built for All Institution Types
                  </h1>
                  <p
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".7s"
                    className="mt-20"
                  >
                    Supporting K-12 schools, colleges, universities, and private schools with secure portals, real-time insights, and tools designed to scale with your institution.
                  </p>
                  <div className="d-flex gap-3 mt-60 flex-wrap">
                    <Link
                      data-animation="slideInRight"
                      data-duration="2s"
                      data-delay=".9s"
                      href="#features"
                      className="btn-one"
                    >
                      Explore Features{" "}
                      <i className="fa-regular fa-arrow-right-long"></i>
                    </Link>
                    <Link
                      data-animation="slideInRight"
                      data-duration="2s"
                      data-delay="1.1s"
                      href="contact"
                      className="btn-one btn-two"
                    >
                      Request a Demo{" "}
                      <i className="fa-regular fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div
                data-animation="slideInLeft"
                data-duration="2s"
                data-delay=".3s"
                className="banner__shape-left2"
              >
                <Image src={One} alt="shape" priority />
              </div>
              <div
                data-animation="slideInLeft"
                data-duration="2s"
                data-delay=".9s"
                className="banner__shape-left1"
              >
                <Image src={Two} alt="shape" priority />
              </div>
              <div className="banner__shape-left3 " data-aos="fade-left">
                <Image
                  className="sway__animation"
                  src={Three}
                  alt="shape"
                  priority
                />
              </div>
              <div
                className="banner__shape-right2"
                data-animation="slideInRight"
                data-duration="3s"
                data-delay=".3s"
              >
                <Image src={Four} alt="shape" priority />
              </div>
              <div
                className="banner__shape-right1"
                data-animation="slideInRight"
                data-duration="2s"
                data-delay=".3s"
              >
                <Image src={Five} alt="shape" priority />
              </div>
              <div
                className="banner__right-line1"
                data-animation="slideInRight"
                data-duration="2s"
                data-delay=".9s"
              >
                <Image src={Six} alt="shape" priority />
              </div>
              <div
                className="banner__right-line2"
                data-animation="slideInRight"
                data-duration="2s"
                data-delay=".7s"
              >
                <Image src={Seven} alt="shape" priority />
              </div>
              <div
                className="banner__right-line3"
                data-animation="slideInRight"
                data-duration="2s"
                data-delay=".5s"
              >
                <Image src={LineTwo} alt="shape" priority />
              </div>
              <div
                className="banner__right-line4"
                data-animation="slideInRight"
                data-duration="2s"
                data-delay=".3s"
              >
                <Image src={LineThree} alt="shape" priority />
              </div>
              <div
                className="slide-bg"
                style={{
                  backgroundImage: "url(https://images.pexels.com/photos/6684506/pexels-photo-6684506.jpeg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="container">
                <div className="banner__content">
                  <h4
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".3s"
                    className="text-white mb-20"
                  >
                    <svg
                      className="me-1"
                      width="40"
                      height="16"
                      viewBox="0 0 40 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.500183"
                        width="25.6667"
                        height="15"
                        rx="7.5"
                        stroke="white"
                      />
                      <rect
                        x="13.3334"
                        y="0.000183105"
                        width="26.6667"
                        height="16"
                        rx="8"
                        fill="white"
                      />
                    </svg>{" "}
                    Student Information System
                  </h4>
                  <h1
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".5s"
                    className="text-white"
                  >
                  Simplify Operations. Improve Outcomes
                  </h1>
                  <p
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".7s"
                    className="mt-20"
                  >
                  Automate workflows, reduce manual work, and make data-driven decisions with confidence.
                  </p>
                  <div className="d-flex gap-3 mt-60 flex-wrap">
                    <Link
                      data-animation="slideInRight"
                      data-duration="2s"
                      data-delay=".9s"
                      href="#features"
                      className="btn-one"
                    >
                      Explore Features{" "}
                      <i className="fa-regular fa-arrow-right-long"></i>
                    </Link>
                    <Link
                      data-animation="slideInRight"
                      data-duration="2s"
                      data-delay="1.1s"
                      href="contact"
                      className="btn-one btn-two"
                    >
                      Request a Demo{" "}
                      <i className="fa-regular fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div> 
      <div className="banner__dot-wrp">
        <div className="dot-light banner__dot"></div>
      </div>
    </section>
  );
};

export default Banner;
