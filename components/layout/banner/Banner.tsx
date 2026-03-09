"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
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

const noClick: React.CSSProperties = { pointerEvents: "none" };

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const SVGIcon = () => (
  <svg className="me-1" width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.500183" width="25.6667" height="15" rx="7.5" stroke="white" />
    <rect x="13.3334" y="0.000183105" width="26.6667" height="16" rx="8" fill="white" />
  </svg>
);

const Shapes = ({ alt = false }: { alt?: boolean }) => (
  <div style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none", overflow: "hidden" }}>
    <div className="banner__shape-left2"><Image src={One} alt="shape" priority /></div>
    <div className="banner__shape-left1"><Image src={Two} alt="shape" priority /></div>
    <div className="banner__shape-left3"><Image className="sway__animation" src={Three} alt="shape" priority /></div>
    <div className="banner__shape-right2"><Image src={Four} alt="shape" priority /></div>
    <div className="banner__shape-right1"><Image src={Five} alt="shape" priority /></div>
    <div className="banner__right-line1"><Image src={Six} alt="shape" priority /></div>
    <div className="banner__right-line2"><Image src={Seven} alt="shape" priority /></div>
    <div className="banner__right-line3"><Image src={alt ? LineTwo : Eight} alt="shape" priority /></div>
    <div className="banner__right-line4"><Image src={alt ? LineThree : Nine} alt="shape" priority /></div>
  </div>
);
const slides = [
  {
    bg: "https://images.pexels.com/photos/6684506/pexels-photo-6684506.jpeg",
    title: "A Smarter Way to Manage Student Information",
    text: "One unified platform to manage admissions, academics, attendance, communication, reporting, and more.",
    alt: false,
  },
  {
    bg: "https://images.pexels.com/photos/7972743/pexels-photo-7972743.jpeg",
    title: "Built for All Institution Types",
    text: "Supporting K-12 schools, colleges, universities, and private schools with secure portals, real-time insights, and tools designed to scale with your institution.",
    alt: true,
  },
  {
    bg: "https://images.pexels.com/photos/5905569/pexels-photo-5905569.jpeg",
    title: "AI-Driven Operations. Intelligent Outcomes.",
    text: "Simplify operations and improve outcomes with AI-powered automation. Reduce manual work, uncover predictive insights, and make smarter, data-driven decisions with confidence.",
    alt: true,
  },
];

const Banner = () => (
  <section className="banner-area">
    <div className="banner__slider" style={{ maxHeight: "90vh" }}>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        speed={3000}
        effect="fade"
        loop={true}
        modules={[Autoplay, EffectFade, Pagination]}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        pagination={{ el: ".banner__dot", clickable: true }}
        className="swiper-wrapper"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div style={{ position: "relative", minHeight: "90vh" }}>
              <Shapes alt={slide.alt} />
              <div
                className="slide-bg"
                style={{
                  backgroundImage: `url(${slide.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "absolute",
                  inset: 0,
                  zIndex: 0,
                }}
              />
              {/* dark overlay for readability */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.45)",
                zIndex: 1,
                pointerEvents: "none",
              }} />
              <div className="container" style={{ position: "relative", zIndex: 5 }}>
                <div style={{ maxWidth: 800, paddingTop: 80, paddingBottom: 80 }}>
                  <h4 className="text-white mb-20" style={{ textTransform: "uppercase", fontSize: 18, fontWeight: 600, letterSpacing: 1 }}>
                    <SVGIcon /> Student Information System
                  </h4>
                  <h1 className="text-white" style={{ fontSize: "clamp(36px, 5vw, 75px)", lineHeight: 1.1, fontWeight: 700 }}>
                    {slide.title}
                  </h1>
                  <p className="mt-20" style={{ color: "white", opacity: 0.9, fontSize: 16 }}>
                    {slide.text}
                  </p>
                  <div
                    className="d-flex gap-3 flex-wrap"
                    style={{ marginTop: 40, position: "relative", zIndex: 10 }}
                  >
                    <button
                      className="btn-one"
                      onClick={() => scrollTo("features")}
                      style={{ cursor: "pointer" }}
                    >
                      Explore Features <i className="fa-regular fa-arrow-right-long"></i>
                    </button>
                    <button
                      className="btn-one btn-two"
                      onClick={() => scrollTo("contact-section")}
                      style={{ cursor: "pointer" }}
                    >
                      Request a Demo <i className="fa-regular fa-arrow-right-long"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <div className="banner__dot-wrp">
      <div className="dot-light banner__dot"></div>
    </div>
  </section>
);

export default Banner;