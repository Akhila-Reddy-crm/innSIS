"use client";
import Image from "next/image";
import One from "@/public/images/shape/service-bg-shape.png";
import Two from "@/public/images/icon/section-title.png";
import Three from "@/public/images/shape/service-item-shape.png";

const KeyBenefits = () => {
  const benefits = [
    {
      icon: "fa-solid fa-layer-group",
      title: "All-in-One Platform",
      description: "Centralize students, staff, and academics",
      image: "/images/service/service-image1.jpg",
    },
    {
      icon: "fa-solid fa-clock",
      title: "Save Time",
      description: "Automate scheduling, notifications, and reports",
      image: "/images/service/service-image2.jpg",
    },
    {
      icon: "fa-solid fa-shield-halved",
      title: "Secure & Compliant",
      description: "Encryption and access control",
      image: "/images/service/service-image3.jpg",
    },
    {
      icon: "fa-solid fa-chart-line",
      title: "Real-Time Insights",
      description: "Data dashboards & analytics",
      image: "/images/service/service-image4.jpg",
    },
    {
      icon: "fa-solid fa-cloud",
      title: "Accessible Anywhere",
      description: "Cloud-based & mobile-friendly",
      image: "/images/service/service-image5.jpg",
    },
  ];

  return (
    <section className="service-area pt-120 pb-120" id="key-benefits-section">
      <div className="service__shape " data-aos="fade-right">
        <Image className="sway_Y__animation" src={One} alt="shape" priority />
      </div>
      {/* <div className="container">
        <div className="section-header text-center mb-60">
          <h5
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1500"
          >
            <Image className="me-1" src={Two} alt="icon" priority />
            KEY BENEFITS
          </h5>
          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            Why Choose innSIS
          </h2>
        </div>
        <div className="row g-4 justify-content-center">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay={index * 100}
              data-aos-duration="1000"
            >
              <div
                className="service__item"
                style={{
                  backgroundImage: `url(${benefit.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="service-shape">
                  <Image src={Three} alt="shape" priority />
                </div>
                <div className="service__icon">
                  <i className={benefit.icon} style={{ fontSize: "48px" }}></i>
                </div>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default KeyBenefits;

