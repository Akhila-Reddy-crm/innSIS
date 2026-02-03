"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import One from "@/public/images/shape/service-bg-shape.png";
import Two from "@/public/images/icon/section-title.png";
import Three from "@/public/images/shape/service-item-shape.png";
import Four from "@/public/images/icon/service-icon1.png";
import Five from "@/public/images/icon/service-icon2.png";
import Six from "@/public/images/icon/service-icon3.png";

const Service = () => {
  const [isOverviewOpen, setOverviewOpen] = useState(0);
  
  const features = [
    {
      id: 0,
      icon: Four,
      title: "Role Based Access",
      description: "Student, Teacher, and Admin Portals with fine-grained permissions and access control.",
    },
    {
      id: 1,
      icon: Five,
      title: "Attendance Management",
      description: "Real-time recording and monitoring with automated alerts to parents for absences.",
    },
    {
      id: 2,
      icon: Six,
      title: "Instant Notifications",
      description: "Send SMS, emails, or in-app notifications to individuals or groups instantly.",
    },
    {
      id: 3,
      icon: Four,
      title: "Custom Reports and Analytics",
      description: "Generate academic, financial, and operational reports with custom filters and visual dashboards.",
    },
    {
      id: 4,
      icon: Five,
      title: "Fee Payments and Tracking",
      description: "Set up fee structures, generate invoices, and track online payments through a secure portal.",
    },
    {
      id: 5,
      icon: Six,
      title: "Timetables and Scheduling",
      description: "Generate conflict-free class schedules for students and teachers with daily, weekly, or semester views.",
    },
    {
      id: 6,
      icon: Four,
      title: "Online Forms and Registration",
      description: "Streamline admission processes from application to enrollment with document tracking.",
    },
  ];

  return (
    <section className="service-area pt-120 pb-120" id="features">
      <div className="service__shape " data-aos="fade-right">
        <Image className="sway_Y__animation" src={One} alt="shape" priority />
      </div>
      <div className="container">
        <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between mb-60">
          <div className="section-header">
            <h5
              data-aos="fade-left"
              data-aos-delay="0"
              data-aos-duration="1500"
            >
              <Image className="me-1" src={Two} alt="icon" priority />
              CORE FEATURES
            </h5>
            <h2
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              Essential Features Overview
            </h2>
          </div>
          <Link
            href="/service"
            className="btn-one "
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            Explore More Features <i className="fa-regular fa-arrow-right-long"></i>
          </Link>
        </div>
        <div className="row g-4">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay={index * 100}
              data-aos-duration="1000"
            >
              <div
                className={
                  "service__item " + (isOverviewOpen === feature.id ? " active" : " ")
                }
                onMouseEnter={() => setOverviewOpen(feature.id)}
              >
                <div className="service-shape">
                  <Image src={Three} alt="shape" priority />
                </div>
                <div className="service__icon">
                  <Image src={feature.icon} alt="icon" priority />
                </div>
                <h4>
                  <Link href="/service">{feature.title}</Link>
                </h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
