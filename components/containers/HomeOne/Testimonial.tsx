"use client";
import Image from "next/image";
import Title from "@/public/images/icon/section-title.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      quote: "INNSIS has completely changed how we manage student records, attendance, and grades. Having everything in one platform has significantly reduced administrative workload.",
      name: "Sarah Thompson",
      role: "Academic Administrator",
      image: "https://images.pexels.com/photos/5717546/pexels-photo-5717546.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      quote: "The role-based portals make a huge difference. Faculty, students, and parents all see exactly what they need, which has improved communication across our institution.",
      name: "Michael Rodriguez",
      role: "Faculty Member",
      image: "https://images.pexels.com/photos/7841434/pexels-photo-7841434.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      quote: "INNSIS gave us real-time visibility into academic performance and attendance trends. The reporting tools alone have transformed how we make decisions.",
      name: "Aisha Patel",
      role: "Director of Academics",
      image: "https://images.pexels.com/photos/7580821/pexels-photo-7580821.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      quote: "The admissions and enrollment workflows are simple, efficient, and easy to track. Our team spends far less time on manual follow-ups.",
      name: "Daniel Lee",
      role: "Admissions Manager",
      image: "https://images.pexels.com/photos/10031556/pexels-photo-10031556.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 5,
      quote: "We needed a system that could scale as we grow, and INNSIS delivered. Managing programs, courses, and multiple academic terms is now seamless.",
      name: "Emily Carter",
      role: "Operations Manager",
      image: "https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section
      className="testimonial-area pt-30 pb-60"
      style={{
        background: "linear-gradient(135deg, #0046A8 0%, #002c70 100%)",
      }}
      id="testimonial-section"
    >
      <div className="container">
        <div className="section-header text-center mb-60">
          <h5
            className="text-white mb-20"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1500"
          >
            <Image className="me-1" src={Title} alt="icon" priority />
            WHAT INSTITUTIONS SAY
          </h5>
          <h2
            className="text-white mb-20"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            What Institutions Say About INNSIS
          </h2>
        </div>
        {/* Our Impact: testimonial cards carousel */}
        <div id="impact-section">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="testimonial-two__slider"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <div
                  className="testimonial-two__item"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-aos-duration="1500"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    padding: "30px",
                    borderRadius: "12px",
                    height: "100%",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                <div className="star mb-15">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-sharp fa-solid fa-star" style={{ color: "#FFD700" }}></i>
                  ))}
                </div>
                <p
                  className="text-white mb-30"
                  style={{ fontSize: "15px", lineHeight: "1.7", fontStyle: "italic" }}
                >
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="d-flex align-items-center gap-3">
                  <div style={{ 
                    width: "60px", 
                    height: "60px", 
                    borderRadius: "50%", 
                    overflow: "hidden",
                    flexShrink: 0
                  }}>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <h5 className="text-white mb-0" style={{ fontSize: "16px", fontWeight: "600" }}>
                      {testimonial.name}
                    </h5>
                    <p className="text-white mb-0" style={{ fontSize: "14px", opacity: "0.8" }}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Contact / Get a Demo: form */}
        <div className="row mt-60" id="contact-section">
          <div className="col-lg-12">
            <div className="talk-us__item" style={{ background: "rgba(255, 255, 255, 0.1)", padding: "40px", borderRadius: "12px", backdropFilter: "blur(10px)" }}>
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
                <p className="text-white mt-20" style={{ fontSize: "16px", opacity: "0.9" }}>
                  Fill out this form below and our team will help you explore how INNSIS fits your institution&apos;s needs!
                </p>
              </div>
              <form
                action="mailto:info@innsis.com"
                method="post"
                encType="text/plain"
                style={{ maxWidth: "900px", margin: "0 auto" }}
              >
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="firstName">First Name*</label>
                    <input type="text" id="firstName" placeholder="First Name" />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="lastName">Last Name*</label>
                    <input type="text" id="lastName" placeholder="Last Name" />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="email">Email*</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="phone">Phone Number*</label>
                    <input
                      type="text"
                      id="phone"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="country">Country*</label>
                    <select id="country" className="form-select">
                      <option value="">Select Country</option>
                    </select>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="help">How can we help you today?*</label>
                    <select id="help" className="form-select">
                      <option value="">Select an option</option>
                      <option value="Request a Demo">Request a Demo</option>
                      <option value="Sales Inquiry">Sales Inquiry</option>
                      <option value="Product Information">Product Information</option>
                      <option value="Implementation & Onboarding">
                        Implementation &amp; Onboarding
                      </option>
                      <option value="Pricing & Licensing">Pricing &amp; Licensing</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Integration Questions">Integration Questions</option>
                      <option value="Partnership Opportunities">
                        Partnership Opportunities
                      </option>
                      <option value="Training & Resources">Training &amp; Resources</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="institution">Institution Name*</label>
                    <input type="text" id="institution" placeholder="Institution Name" />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="jobTitle">Job title*</label>
                    <input type="text" id="jobTitle" placeholder="Job Title" />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="schoolUrl">School URL*</label>
                    <input type="text" id="schoolUrl" placeholder="School URL" />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="schoolType">Select School Type*</label>
                    <select id="schoolType" className="form-select">
                      <option value="">Select School Type</option>
                      <option>Business School</option>
                      <option>Career College</option>
                      <option>College</option>
                      <option>Community College</option>
                      <option>Independent Institutions</option>
                      <option>K-12</option>
                      <option>Language Schools</option>
                      <option>Multi-Campus Organization</option>
                      <option>Online Learning Provider</option>
                      <option>University</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="questions">Questions?</label>
                    <textarea
                      id="questions"
                      placeholder="Questions?"
                      rows={3}
                    ></textarea>
                  </div>
                </div>
                <div className="mt-30" style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.9)", lineHeight: "1.6" }}>
                  <p className="mb-15">
                    INNSIS is committed to protecting and respecting your privacy, and we&apos;ll only use your personal information to administer your account and to provide the products and services you requested from us. From time to time, we would like to contact you about our products and services, as well as other content that may be of interest to you. If you consent to us contacting you for this purpose, please tick below to say how you would like us to contact you:
                  </p>
                  <div className="mb-15">
                    <label style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
                      <input type="checkbox" style={{ width: "18px", height: "18px" }} />
                      <span style={{ color:"white"}}>I agree to receive other communications from INNSIS.</span>
                    </label>
                  </div>
                  <p className="mb-15">
                    You can unsubscribe from these communications at any time. For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please review our Privacy Policy.
                  </p>
                  <p>
                    By submitting this form, you consent to allow INNSIS to store and process the personal information submitted above to provide you the content requested.
                  </p>
                </div>
                <button
                  type="submit"
                  className="btn-one mt-30"
                  style={{ background: "white", color: "#0046A8", width: "100%", maxWidth: "300px" }}
                >
                  Submit <i className="fa-regular fa-arrow-right-long"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
