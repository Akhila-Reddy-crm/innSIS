"use client";
import { FormEvent, useState, ChangeEvent, useRef } from "react";
import Image from "next/image";
import Title from "@/public/images/icon/section-title.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  help: string;
  institution: string;
  jobTitle: string;
  schoolUrl: string;
  schoolType: string;
  questions: string;
  consent: boolean;
};

const initialFormState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  help: "",
  institution: "",
  jobTitle: "",
  schoolUrl: "",
  schoolType: "",
  questions: "",
  consent: false,
};

const Testimonial = () => {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleConsentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({
      ...prev,
      consent: e.target.checked,
    }));
  };

  const isFormValid = () => {
    const formElement = formRef.current;
    const browserValidity = formElement ? formElement.checkValidity() : false;
    return browserValidity && formState.consent;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert(
        "Please fill in all required fields and agree to receive communications from INNSIS before submitting."
      );
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      firstName: formData.get("firstName") || "",
      lastName: formData.get("lastName") || "",
      email: formData.get("email") || "",
      phone: formData.get("phone") || "",
      country: formData.get("country") || "",
      help: formData.get("help") || "",
      institution: formData.get("institution") || "",
      jobTitle: formData.get("jobTitle") || "",
      schoolUrl: formData.get("schoolUrl") || "",
      schoolType: formData.get("schoolType") || "",
      questions: formData.get("questions") || "",
      consent: formData.get("consent") === "on",
    };

    try {
      const res = await fetch("https://innsiswebsitebackend.azurewebsites.net/api/send-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        alert("There was a problem submitting the form. Please try again.111");
        return;
      }

      alert("Thank you! Your request has been submitted. We will contact you soon.");
      form.reset();
      setFormState(initialFormState);
    } catch (error) {
      console.error("Form submit error", error);
      alert("There was a problem submitting the form. Please try again.");
    }
  };

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
        <div className="container" id="impact-section">
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
        <div>
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
                    minHeight: "340px",
                    height: "100%",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="star mb-15">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className="fa-sharp fa-solid fa-star"
                        style={{ color: "#FFD700" }}
                      ></i>
                    ))}
                  </div>
                  <p
                    className="text-white mb-30"
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.7",
                      fontStyle: "italic",
                    }}
                  >
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="d-flex align-items-center gap-3" style={{ position: "relative" }}>
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        flexShrink: 0,
                        position: "relative",
                        zIndex: 2,
                      }}
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div>
                      <h5
                        className="text-white mb-0"
                        style={{ fontSize: "16px", fontWeight: "600" }}
                      >
                        {testimonial.name}
                      </h5>
                      <p
                        className="text-white mb-0"
                        style={{ fontSize: "14px", opacity: "0.8" }}
                      >
                        {testimonial.role}
                      </p>
                    </div>
                    {/* Fixed shape that maintains consistent position */}
                    <svg
                      style={{
                        position: "absolute",
                        right: "-10px",
                        bottom: "-8px",
                        width: "120px",
                        height: "120px",
                        zIndex: 1,
                      }}
                      viewBox="0 0 120 120"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M120 60C120 93.1371 93.1371 120 60 120C26.8629 120 0 93.1371 0 60C0 26.8629 26.8629 0 60 0C93.1371 0 120 26.8629 120 60Z"
                        fill="#0046A8"
                        opacity="0.3"
                      />
                      <path
                        d="M100 50C110 65 105 85 80 95C65 100 45 98 35 85C20 68 25 45 45 40C70 33 95 40 100 50Z"
                        fill="#1E5FB8"
                        opacity="0.5"
                      />
                    </svg>
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
                ref={formRef}
                onSubmit={handleSubmit}
                style={{ maxWidth: "900px", margin: "0 auto" }}
              >
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="firstName">First Name*</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      value={formState.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="lastName">Last Name*</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      value={formState.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="email">Email*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={formState.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="phone">Phone Number*</label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="Phone Number"
                      value={formState.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="country">Country*</label>
                    <select
                      id="country"
                      name="country"
                      className="form-select"
                      value={formState.country}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Country</option>
                      <option>Afghanistan</option>
                      <option>Albania</option>
                      <option>Algeria</option>
                      <option>Andorra</option>
                      <option>Angola</option>
                      <option>Antigua &amp; Deps</option>
                      <option>Argentina</option>
                      <option>Armenia</option>
                      <option>Australia</option>
                      <option>Austria</option>
                      <option>Azerbaijan</option>
                      <option>Bahamas</option>
                      <option>Bahrain</option>
                      <option>Bangladesh</option>
                      <option>Barbados</option>
                      <option>Belarus</option>
                      <option>Belgium</option>
                      <option>Belize</option>
                      <option>Benin</option>
                      <option>Bhutan</option>
                      <option>Bolivia</option>
                      <option>Bosnia Herzegovina</option>
                      <option>Botswana</option>
                      <option>Brazil</option>
                      <option>Brunei</option>
                      <option>Bulgaria</option>
                      <option>Burkina</option>
                      <option>Burundi</option>
                      <option>Cambodia</option>
                      <option>Cameroon</option>
                      <option>Canada</option>
                      <option>Cape Verde</option>
                      <option>Central African Rep</option>
                      <option>Chad</option>
                      <option>Chile</option>
                      <option>China</option>
                      <option>Colombia</option>
                      <option>Comoros</option>
                      <option>Congo</option>
                      <option>Congo {`{Democratic Rep}`}</option>
                      <option>Costa Rica</option>
                      <option>Croatia</option>
                      <option>Cuba</option>
                      <option>Cyprus</option>
                      <option>Czech Republic</option>
                      <option>Denmark</option>
                      <option>Djibouti</option>
                      <option>Dominica</option>
                      <option>Dominican Republic</option>
                      <option>East Timor</option>
                      <option>Ecuador</option>
                      <option>Egypt</option>
                      <option>El Salvador</option>
                      <option>Equatorial Guinea</option>
                      <option>Eritrea</option>
                      <option>Estonia</option>
                      <option>Ethiopia</option>
                      <option>Fiji</option>
                      <option>Finland</option>
                      <option>France</option>
                      <option>Gabon</option>
                      <option>Gambia</option>
                      <option>Georgia</option>
                      <option>Germany</option>
                      <option>Ghana</option>
                      <option>Greece</option>
                      <option>Grenada</option>
                      <option>Guatemala</option>
                      <option>Guinea</option>
                      <option>Guinea-Bissau</option>
                      <option>Guyana</option>
                      <option>Haiti</option>
                      <option>Honduras</option>
                      <option>Hungary</option>
                      <option>Iceland</option>
                      <option>India</option>
                      <option>Indonesia</option>
                      <option>Iran</option>
                      <option>Iraq</option>
                      <option>Ireland {`{Republic}`}</option>
                      <option>Israel</option>
                      <option>Italy</option>
                      <option>Ivory Coast</option>
                      <option>Jamaica</option>
                      <option>Japan</option>
                      <option>Jordan</option>
                      <option>Kazakhstan</option>
                      <option>Kenya</option>
                      <option>Kiribati</option>
                      <option>Korea North</option>
                      <option>Korea South</option>
                      <option>Kosovo</option>
                      <option>Kuwait</option>
                      <option>Kyrgyzstan</option>
                      <option>Laos</option>
                      <option>Latvia</option>
                      <option>Lebanon</option>
                      <option>Lesotho</option>
                      <option>Liberia</option>
                      <option>Libya</option>
                      <option>Liechtenstein</option>
                      <option>Lithuania</option>
                      <option>Luxembourg</option>
                      <option>Macedonia</option>
                      <option>Madagascar</option>
                      <option>Malawi</option>
                      <option>Malaysia</option>
                      <option>Maldives</option>
                      <option>Mali</option>
                      <option>Malta</option>
                      <option>Marshall Islands</option>
                      <option>Mauritania</option>
                      <option>Mauritius</option>
                      <option>Mexico</option>
                      <option>Micronesia</option>
                      <option>Moldova</option>
                      <option>Monaco</option>
                      <option>Mongolia</option>
                      <option>Montenegro</option>
                      <option>Morocco</option>
                      <option>Mozambique</option>
                      <option>Myanmar, {`{Burma}`}</option>
                      <option>Namibia</option>
                      <option>Nauru</option>
                      <option>Nepal</option>
                      <option>Netherlands</option>
                      <option>New Zealand</option>
                      <option>Nicaragua</option>
                      <option>Niger</option>
                      <option>Nigeria</option>
                      <option>Norway</option>
                      <option>Oman</option>
                      <option>Pakistan</option>
                      <option>Palau</option>
                      <option>Panama</option>
                      <option>Papua New Guinea</option>
                      <option>Paraguay</option>
                      <option>Peru</option>
                      <option>Philippines</option>
                      <option>Poland</option>
                      <option>Portugal</option>
                      <option>Qatar</option>
                      <option>Romania</option>
                      <option>Russian Federation</option>
                      <option>Rwanda</option>
                      <option>St Kitts &amp; Nevis</option>
                      <option>St Lucia</option>
                      <option>Saint Vincent &amp; the Grenadines</option>
                      <option>Samoa</option>
                      <option>San Marino</option>
                      <option>Sao Tome &amp; Principe</option>
                      <option>Saudi Arabia</option>
                      <option>Senegal</option>
                      <option>Serbia</option>
                      <option>Seychelles</option>
                      <option>Sierra Leone</option>
                      <option>Singapore</option>
                      <option>Slovakia</option>
                      <option>Slovenia</option>
                      <option>Solomon Islands</option>
                      <option>Somalia</option>
                      <option>South Africa</option>
                      <option>South Sudan</option>
                      <option>Spain</option>
                      <option>Sri Lanka</option>
                      <option>Sudan</option>
                      <option>Suriname</option>
                      <option>Swaziland</option>
                      <option>Sweden</option>
                      <option>Switzerland</option>
                      <option>Syria</option>
                      <option>Taiwan</option>
                      <option>Tajikistan</option>
                      <option>Tanzania</option>
                      <option>Thailand</option>
                      <option>Togo</option>
                      <option>Tonga</option>
                      <option>Trinidad &amp; Tobago</option>
                      <option>Tunisia</option>
                      <option>Turkey</option>
                      <option>Turkmenistan</option>
                      <option>Tuvalu</option>
                      <option>Uganda</option>
                      <option>Ukraine</option>
                      <option>United Arab Emirates</option>
                      <option>United Kingdom</option>
                      <option>United States</option>
                      <option>Uruguay</option>
                      <option>Uzbekistan</option>
                      <option>Vanuatu</option>
                      <option>Vatican City</option>
                      <option>Venezuela</option>
                      <option>Vietnam</option>
                      <option>Yemen</option>
                      <option>Zambia</option>
                      <option>Zimbabwe</option>
                    </select>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="help">How can we help you today?*</label>
                    <select
                      id="help"
                      name="help"
                      className="form-select"
                      value={formState.help}
                      onChange={handleInputChange}
                      required
                    >
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
                    <input
                      type="text"
                      id="institution"
                      name="institution"
                      placeholder="Institution Name"
                      value={formState.institution}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="jobTitle">Job title*</label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      placeholder="Job Title"
                      value={formState.jobTitle}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="schoolUrl">School URL*</label>
                    <input
                      type="text"
                      id="schoolUrl"
                      name="schoolUrl"
                      placeholder="School URL"
                      value={formState.schoolUrl}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="schoolType">Select School Type*</label>
                    <select
                      id="schoolType"
                      name="schoolType"
                      className="form-select"
                      value={formState.schoolType}
                      onChange={handleInputChange}
                      required
                    >
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
                      name="questions"
                      placeholder="Questions?"
                      rows={3}
                      value={formState.questions}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                </div>
                <div className="mt-30" style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.9)", lineHeight: "1.6" }}>
                  <p className="mb-15">
                    INNSIS is committed to protecting and respecting your privacy, and we&apos;ll only use your personal information to administer your account and to provide the products and services you requested from us. From time to time, we would like to contact you about our products and services, as well as other content that may be of interest to you. If you consent to us contacting you for this purpose, please tick below to say how you would like us to contact you:
                  </p>
                  <div className="mb-15">
                    <label
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="checkbox"
                        name="consent"
                        style={{ width: "18px", height: "18px", color: "white" }}
                        checked={formState.consent}
                        onChange={handleConsentChange}
                        required
                      />
                      <span style={{ color: "white", fontWeight: 600 }}>
                        I agree to receive other communications from INNSIS.
                      </span>
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
                  disabled={!isFormValid()}
                  style={{
                    background: "white",
                    color: "#0046A8",
                    width: "100%",
                    maxWidth: "300px",
                    opacity: isFormValid() ? 1 : 0.6,
                    cursor: isFormValid() ? "pointer" : "not-allowed",
                  }}
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
