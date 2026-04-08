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
import { useT } from "@/components/i18n/useT";

const Service = () => {
  const [isOverviewOpen, setOverviewOpen] = useState(0);
  // 4 items per row, show 3 rows (12 items) initially
  const [visibleCount, setVisibleCount] = useState(12);
  const { t } = useT();
  
  const features = [
    {
      id: 0,
      icon: Four,
    },

    {
      id: 1,
      icon: Five,
    },
    {
      id: 2,
      icon: Six,
    },
    {
      id: 3,
      icon: Four,
    },

    {
      id: 4,
      icon: Five,
    },
    {
      id: 5,
      icon: Six,
    },
    {
      id: 6,
      icon: Four,
    },
      {
      id: 7,
      icon: Five,
    },
    {
      id: 8,
      icon: Six,
    },
    {
      id: 9,
      icon: Four,
    },
     {
      id: 10,
      icon: Five,
    },
     {
      id: 11,
      icon: Six,
    },
     {
      id: 12,
      icon: Four,
    },
     {
      id: 13,
      icon: Five,
    },
     {
      id: 14,
      icon: Six,
    },
     {
      id: 15,
      icon: Four,
    },
     {
      id: 16,
      icon: Five,
    },
      {
      id: 17,
      icon: Six,
    },
      {
      id: 18,
      icon: Four,
    },
      {
      id: 19,
      icon: Five,
    },
      {
      id: 20,
      icon: Six,
    },
    {
      id: 21,
      icon: Four,
    },
    {
      id: 22,
      icon: Five,
    },
    {
      id: 23,
      icon: Six,
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
              {t("features.kicker", "CORE FEATURES")}
            </h5>
            <h2
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              {t("features.title", "Essential Features Overview")}
            </h2>
          </div>
        </div>
        <div className="row g-4">
          {features.slice(0, visibleCount).map((feature, index) => (
            <div
              key={feature.id}
              className="col-lg-3 col-md-6"
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
                  <Link href="/service">
                    {t(`features.items.${feature.id}.title`)}
                  </Link>
                </h4>
                <p>
                  {t(`features.items.${feature.id}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
        {visibleCount < features.length && (
          <div className="text-center mt-60">
            <button
              className="btn-one"
              onClick={() =>
                setVisibleCount((prev) =>
                  Math.min(prev + 12, features.length)
                )
              }
            >
              {t("common.loadMore", "Load More")}{" "}
              <i className="fa-regular fa-arrow-right-long"></i>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Service;
