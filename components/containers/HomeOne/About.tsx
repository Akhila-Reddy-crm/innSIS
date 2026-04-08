"use client";
import { useState } from "react";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import One from "@/public/images/logo/about.png";
import Three from "@/public/images/icon/section-title.png";
import { useT } from "@/components/i18n/useT";

const About = () => {
  const [isOpen, setOpen] = useState(false);
  const { t } = useT();

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
              style={{marginTop:'7rem'}}
            >
              <div className="about__left-item">
                <div className="image big-image">
                  <Image src={One} alt="Image" priority />
                </div>
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
                  {t("about.kicker")}
                </h5>
                <h2
                  className=""
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1500"
                >
                  {t("about.title")}
                </h2>
                <p
                  className=""
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="1500"
                >
                  {t("about.paragraph1")}
                </p>
                <p
                  className=""
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-duration="1500"
                >
                  <strong>{t("about.bullets.intro")}</strong>
                </p>
                <ul
                  className="mt-2"
                  style={{ listStyle: "disc", paddingLeft: "20px" }}
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-duration="1500"
                >
                  <li>
                    <strong>{t("about.bullets.0.bold")}</strong>{" "}
                    {t("about.bullets.0.rest")}
                  </li>
                  <li>
                    <strong>{t("about.bullets.1.bold")}</strong>{" "}
                    {t("about.bullets.1.rest")}
                  </li>
                  <li>
                    <strong>{t("about.bullets.2.bold")}</strong>{" "}
                    {t("about.bullets.2.rest")}
                  </li>
                  <li>
                    <strong>{t("about.bullets.3.bold")}</strong>{" "}
                    {t("about.bullets.3.rest")}
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
