import Link from "next/link";
import Image from "next/image";
import One from "@/public/images/shape/about-two-shape.png";
import Two from "@/public/images/shape/about-two-dot.png";
import Three from "@/public/images/shape/about-circle-helper.png";
import Four from "@/public/images/about/about-two-image1.jpg";
import Five from "@/public/images/about/about-two-image2.png";
import Six from "@/public/images/shape/about-two-circle.png";
import Seven from "@/public/images/about/singature.png";

const AboutTwo = () => {
  return (
    <section className="about-two-area pt-120" id="about-two">
      <div className="about-two__shape">
        <Image src={One} alt="shape" priority />
      </div>
      <div className="container">
        <div className="row g-4">
          <div
            className="col-xl-6 "
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            <div className="about-two__left-item">
              <div className="dots">
                <Image
                  className="sway_Y__animation"
                  src={Two}
                  alt="shape"
                  priority
                />
              </div>
              <div className="shape-halper">
                <Image
                  className="sway__animation"
                  src={Three}
                  alt="shape"
                  priority
                />
              </div>
              <div className="image big-image">
                <Image src={Four} alt="Image" priority />
              </div>
              <div className="image sm-image">
                <Image src={Five} alt="Image" priority />
              </div>
              <div className="circle-shape">
                <Image
                  className="animation__rotate"
                  src={Six}
                  alt="shape"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="section-header mb-40">
              <h5
                className=""
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="1500"
              >
                About Us Section
              </h5>
              <h2
                className=""
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                About InnSIS
              </h2>
              <p
                className=""
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1500"
              >
                InnSIS is a modern Student Information System designed to help educational institutions streamline operations, enhance communication, and automate administrative workflows. Built with a focus on usability and efficiency, InnSIS empowers schools, colleges, and training centers to manage the entire student lifecycle from one unified platform.
              </p>
            </div>
            <div
              className="about-two__right-item mt-40"
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <h3 className="mb-30">4 Main Components</h3>
              <ul className="mb-0">
                <li>
                  <strong>Centralized Student Records</strong> – Manage profiles,
                  academics, enrollment, and history in one place.
                </li>
                <li>
                  <strong>Automated Workflows</strong> – Handle admissions, LOA,
                  probation, and approvals seamlessly.
                </li>
                <li>
                  <strong>Real-Time Analytics</strong> – Gain insights through
                  dashboards, reports, and academic trends.
                </li>
                <li>
                  <strong>User-Friendly Portals</strong> – Dedicated access for
                  students, faculty, parents, and administrators.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
