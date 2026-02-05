"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import One from "@/public/images/shape/pricing-shape-up.png";
import Two from "@/public/images/shape/pricing-shape-down.png";
import Three from "@/public/images/shape/pricing-shape.png";
import Four from "@/public/images/icon/section-title.png";
import Five from "@/public/images/shape/pricing-item-shape.png";
import Six from "@/public/images/icon/pricing-icon1.png";
import Seven from "@/public/images/icon/pricing-icon2.png";
import Eight from "@/public/images/icon/pricing-icon3.png";

const PricingThree = () => {
  const [isYearly, setIsYearly] = useState(false);

  const pricingPlans = [
    {
      name: "Basic",
      monthlyPrice: 99,
      yearlyPrice: 990,
      description: "Core SIS features, 1 admin, basic support",
      features: [
        "Core SIS features",
        "1 admin user",
        "Basic support",
        "Student management",
        "Attendance tracking",
        "Gradebook",
        "Parent portal access",
      ],
      icon: Six,
    },
    {
      name: "Standard",
      monthlyPrice: 199,
      yearlyPrice: 1990,
      description: "All features, analytics, LMS integration",
      features: [
        "All Basic features",
        "Multiple admin users",
        "Advanced analytics",
        "LMS integration",
        "Custom reports",
        "Priority support",
        "Email & SMS notifications",
      ],
      icon: Seven,
      popular: true,
    },
    {
      name: "Enterprise",
      monthlyPrice: 399,
      yearlyPrice: 3990,
      description: "Custom branding, API access, dedicated support",
      features: [
        "All Standard features",
        "Unlimited users",
        "Custom branding",
        "API access",
        "Dedicated support",
        "Custom integrations",
        "Training & onboarding",
      ],
      icon: Eight,
    },
  ];

  return (
    <section className="pricing-area pt-120 pb-120" id="pricing-three">
      <div
        className="pricing__shape-up d-none d-sm-block"
        data-aos="fade-left"
        data-aos-delay="0"
        data-aos-duration="1500"
      >
        <Image className="sway_Y__animationY" src={One} alt="Image" priority />
      </div>
      <div
        className="pricing__shape-down d-none d-sm-block"
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-duration="1500"
      >
        <Image className="sway_Y__animation" src={Two} alt="Image" priority />
      </div>
      <div className="pricing__shape">
        <Image
          className="sway_Y__animationY"
          src={Three}
          alt="Image"
          priority
        />
      </div>
      <div className="container">
        <div className="section-header text-center mb-60">
          <h5
            className=""
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1500"
          >
            <Image className="me-1" src={Four} alt="icon" priority />
            PRICING
          </h5>
          <h2
            className=""
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            Choose the Plan That Works for You
          </h2>
          <p className="mt-20" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1500">
            Flexible pricing options designed for schools of all sizes. Start with a free trial to experience all features.
          </p>
        </div>
        <div className="text-center mb-40">
          <div 
            className="pricing-toggle" 
            data-aos="fade-up" 
            data-aos-delay="300" 
            data-aos-duration="1500"
            style={{
              display: "inline-flex",
              background: "#f0f0f0",
              borderRadius: "50px",
              padding: "5px",
              gap: "10px"
            }}
          >
            <button
              onClick={() => setIsYearly(false)}
              style={{
                padding: "10px 30px",
                borderRadius: "50px",
                border: "none",
                background: !isYearly ? "#3C72FC" : "transparent",
                color: !isYearly ? "white" : "#333",
                cursor: "pointer",
                fontWeight: "600",
                transition: "all 0.3s"
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              style={{
                padding: "10px 30px",
                borderRadius: "50px",
                border: "none",
                background: isYearly ? "#3C72FC" : "transparent",
                color: isYearly ? "white" : "#333",
                cursor: "pointer",
                fontWeight: "600",
                transition: "all 0.3s",
                position: "relative"
              }}
            >
              Yearly
              <span style={{
                marginLeft: "8px",
                background: "#FF6B6B",
                color: "white",
                padding: "2px 8px",
                borderRadius: "10px",
                fontSize: "12px",
                fontWeight: "600"
              }}>Save 17%</span>
            </button>
          </div>
        </div>
        <div className="row g-4">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`col-xl-4 col-lg-6 col-md-6 ${plan.popular ? "popular-plan" : ""}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="1500"
            >
              <div className={`pricing__item ${plan.popular ? "popular" : ""}`} style={{ position: "relative" }}>
                {plan.popular && (
                  <div style={{
                    position: "absolute",
                    top: "-15px",
                    right: "20px",
                    background: "#FF6B6B",
                    color: "white",
                    padding: "8px 20px",
                    borderRadius: "20px",
                    fontSize: "14px",
                    fontWeight: "600",
                    zIndex: 10
                  }}>
                    Most Popular
                  </div>
                )}
                <div className="item-shape">
                  <Image src={Five} alt="shape" priority />
                </div>
                <div className="pricing-head">
                  <div>
                    <h4 className="text-white mb-10">{plan.name}</h4>
                    <h2>
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      <span>/{isYearly ? "yearly" : "monthly"}</span>
                    </h2>
                    <p className="text-white mt-10" style={{ fontSize: "14px", opacity: 0.9 }}>
                      {plan.description}
                    </p>
                  </div>
                  <div
                    className="pricing-icon"
                    style={{
                      backgroundImage: "url(/images/shape/pricing-icon-bg.png)",
                    }}
                  >
                    <Image src={plan.icon} alt="icon" priority />
                  </div>
                </div>
                <ul>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Link href="contact" className="btn-one d-block text-center">
                  {plan.name === "Enterprise" ? "Contact Us" : "Choose Plan"}{" "}
                  <i className="fa-regular fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-60" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1500">
          <p className="mb-20">Need a custom solution? We&apos;re here to help.</p>
          <Link href="contact" className="btn-one btn-two">
            Contact Us for a Custom Quote{" "}
            <i className="fa-regular fa-arrow-right-long"></i>
          </Link>
        </div>
        <div className="mt-60 text-center" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1500">
          <div className="free-trial-box" style={{
            background: "linear-gradient(135deg, #3C72FC 0%, #2B5BD6 100%)",
            padding: "40px",
            borderRadius: "20px",
            color: "white"
          }}>
            <h3 className="text-white mb-20">Free Trial Available</h3>
            <p className="text-white mb-30">
              Try INNSIS free for 30 days. No credit card required. Experience all features and see how INNSIS can transform your school management.
            </p>
            <Link href="contact" className="btn-one" style={{ background: "white", color: "#3C72FC" }}>
              Start Free Trial <i className="fa-regular fa-arrow-right-long"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingThree;
