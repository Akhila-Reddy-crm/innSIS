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
      
    </section>
  );
};

export default KeyBenefits;

