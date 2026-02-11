"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import Line from "@/public/images/shape/about-line.png";
import One from "@/public/images/about/Aboutus.png"; 
import Two from "@/public/images/about/aboutus1.jpg";
import Circle from "@/public/images/shape/about-circle.png";
import Three from "@/public/images/icon/section-title.png";
import Four from "@/public/images/icon/about-icon1.png";
import Five from "@/public/images/icon/about-icon2.png";
import Six from "@/public/images/about/about-info.png";

const About = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section
        className="about-area sub-bg pt-20"
        id="about-section"
        style={{ paddingBottom: "40px" }}
      >
        {/* <div
          className="about__shape "
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-duration="1500"
        >
          <Image src={Line} alt="shape" priority />
        </div> */}
        <div className="container">
          <div className="row g-4">
            <div
              className="col-xl-6 "
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <div className="about__left-item">
                <div className="image big-image">
                  <Image src={One} alt="Image" priority />
                </div>
                <div className="image sm-image">
                  <div className="video__btn-wrp">
                    <div className="video-btn video-pulse">
                      <a className="video-popup" onClick={() => setOpen(true)}>
                        <i className="fa-solid fa-play"></i>
                      </a>
                    </div>
                  </div>
                  <Image src={Two} alt="Image" priority />
                </div>
                {/* <div className="circle-shape">
                  <Image src={Circle} alt="shape" priority />
                </div> */}
              </div>
            </div>
            <div className="col-xl-6">
              <div className="section-header">
                <h5
                  className=""
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="1500"
                >
                  <Image className="me-1" src={Three} alt="icon" priority />
                  ABOUT INNSIS
                </h5>
                <h2
                  className=""
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1500"
                >
                  A Fully Integrated Student Information System
                </h2>
                <p
                  className=""
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="1500"
                >
                  INNSIS is a modern, all-in-one Student Information System designed to help educational institutions manage the complete student lifecycle with clarity and efficiency. From admissions through graduation, INNSIS brings academic, administrative, and financial processes together into one secure, centralized platform.
                </p>
                <p
                  className=""
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-duration="1500"
                >
                  <strong>With INNSIS, institutions can:</strong>
                </p>
                <ul
                  className="mt-2"
                  style={{ listStyle: "disc", paddingLeft: "20px" }}
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-duration="1500"
                >
                  <li>
                    <strong>Centralized student information</strong> across admissions, academics, attendance, and finance
                  </li>
                  <li>
                    <strong>Reduce administrative complexity</strong> through intelligent automation and streamlined workflows
                  </li>
                  <li>
                    <strong>Gain real-time visibility</strong> into academic performance, enrollment, and operations
                  </li>
                  <li>
                    <strong>Support every stakeholder</strong> with role-based portals for students, faculty, parents, and administrators
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="iVqz_4M5mA0"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default About;
