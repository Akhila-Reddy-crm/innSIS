"use client";
import Link from "next/link";

const Offer = () => {
  const institutions = [
    {
      id: 1,
      title: "K-12 Schools",
      description: "Support day-to-day school operations with tools for attendance, grading, parent communication, scheduling, and student records",
      image: "https://images.pexels.com/photos/8617642/pexels-photo-8617642.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Colleges & Universities",
      description: "Manage complex academic structures, programs, financial processes, and reporting requirements with a scalable platform built for higher education.",
      image: "https://images.pexels.com/photos/7972512/pexels-photo-7972512.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Independent Institutions",
      description: "Configure workflows, programs, and approvals to match your institution's policies while maintaining full control over data and operations.",
      image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      title: "Language Schools",
      description: "Streamline admissions, class scheduling, attendance tracking, and student progress for short-term, cohort-based, or continuous enrollment models.",
      image: "https://images.pexels.com/photos/5905923/pexels-photo-5905923.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5,
      title: "Multi-Campus",
      description:
        "Centralize data across campuses, departments, and academic terms while maintaining visibility and control at every level.",
      image:
        "https://images.pexels.com/photos/7972568/pexels-photo-7972568.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 6,
      title: "Continuing Education",
      description:
        "Support professional development, certificate programs, and lifelong learning with flexible tools for enrollment, scheduling, attendance, and learner progress tracking.",
      image:
        "https://images.pexels.com/photos/7092460/pexels-photo-7092460.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <section className="offer-area secondary-bg pt-30 pb-60" id="institutions">
      <div className="container">
        <div className="section-header text-center mb-60">
            <h2
              className="text-white mb-20"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            Institutions We Serve
          </h2>
          <h3
            className="text-white mb-15"
            style={{ fontSize: "24px", fontWeight: "600" }}
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1500"
          >
            Flexible Solutions for Every Type of Educational Institution
          </h3>
          <p
            className="text-white"
            style={{ fontSize: "16px", opacity: "0.9", maxWidth: "800px", margin: "0 auto" }}
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            INNSIS is designed to adapt to the unique needs of different educational environments, whether you manage a small private school or a large multi-campus institution.
          </p>
              </div>
        <div className="row g-4">
          {institutions.map((institution, index) => (
            <div
              key={institution.id}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay={index * 100}
              data-aos-duration="1500"
            >
              <div
                className="offer__item"
                style={{
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "12px",
                  border: "none",
                  padding: 0,
                  boxShadow: "none",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: "250px",
                    overflow: "hidden",
                    borderRadius: "12px 12px 0 0",
                  }}
                >
                  <img
                    src={institution.image}
                    alt={institution.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div
                  style={{
                    padding: "20px",
                    background: "rgba(0, 70, 168, 0.95)",
                    borderRadius: "0 0 12px 12px",
                    minHeight: "190px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <h4
                    className="text-white mt-0 mb-15"
                    style={{ fontSize: "20px", fontWeight: "600" }}
                  >
                    {institution.title}
                  </h4>
                  <p className="text-white mb-0" style={{ fontSize: "14px", lineHeight: "1.6", opacity: "0.95" }}>
                    {institution.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
