"use client";

import { useState } from "react";

const FeaturesItems = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFeature = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const features = [
    {
      title: "Dashboard",
      description:
        "Get a snapshot of everything important — attendance alerts, fee status, announcements, upcoming events, and performance metrics. The dashboard is personalized for each user role (admin, teacher, student, parent) to surface relevant actions first.",
    },
    {
      title:
        "School Information System (School profile, academic years, holidays)",
      description:
        "Easily manage your school's profile, academic years, calendar events, holidays, terms, and grading schemes. Stay organized and ensure consistency across all records and reports.",
    },
    {
      title: "User Management (role-based access)",
      description:
        "Assign and manage user roles with fine-grained permissions. Whether it's a faculty, student, or parent — you can control what each user can access and do.",
    },
    {
      title: "Student Management",
      description:
        "Enroll, edit, and manage student records with ease. Store contact details, health info, academic history, disciplinary actions, and more — all in one secure profile.",
    },
    {
      title: "Faculty Management",
      description:
        "Keep teacher records organized, including classes assigned, schedules, qualifications, and performance. Enable teachers to access only the tools and student data they need.",
    },
    {
      title: "Parent Management",
      description:
        "Create parent accounts that link to student profiles. Parents can track attendance, grades, and fees, and receive important updates directly through the portal.",
    },
    {
      title: "Admissions & Applicants",
      description:
        "Streamline the admission pipeline from application to enrollment. Track applicant status, required documents, interview outcomes, and admission decisions — all in one workflow.",
    },
    {
      title: "Attendance Tracking",
      description:
        "Record and monitor attendance in real-time. Teachers can take daily attendance in under a minute, and automated alerts can notify parents of absences instantly.",
    },
    {
      title: "Fees & Payments",
      description:
        "Set up fee structures, generate invoices, and track payments online. Parents can pay through a secure portal and view transaction history anytime.",
    },
    {
      title: "Scheduling & Timetables",
      description:
        "Generate conflict-free class schedules for students and teachers. View daily, weekly, or semester-wide timetables. Supports manual and automatic scheduling options.",
    },
    {
      title: "Grades & Transcripts",
      description:
        "Enter grades, calculate GPA, and generate custom report cards. Share digital transcripts securely with students or institutions.",
    },
    {
      title: "Jobs & Internships Portal",
      description:
        "Support student career readiness by posting jobs and internships, tracking applications, and managing partnerships with external organizations.",
    },
    {
      title: "Communication Tools (notices, SMS, email)",
      description:
        "Send SMS, emails, or in-app notifications to individuals or groups. Schedule announcements and track who has seen what.",
    },
    {
      title: "Reports & Analytics",
      description:
        "Generate academic, financial, and operational reports with custom filters. Use visual dashboards to uncover insights and track key performance indicators.",
    },
  ];

  const otherFeatures = [
    "Integrated LMS included",
    "Protect student information",
    "Supports students around the world",
    "Configure to your specific needs",
    "No more paper processes",
  ];

  const institutionTypes = [
    "K-12 Public and Private Schools",
    "Colleges and Universities",
    "Trade Schools and Continuing Education",
    "Virtual Education",
  ];

  return (
   <section className="service-inner-area pt-120 pb-120">
      <div className="container">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="border-bottom"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-duration="800"
          >
            {/* Header */}
            <button
              className="w-100 bg-transparent border-0 d-flex align-items-center py-4 text-start"
              onClick={() => toggleFeature(index)}
              aria-expanded={openIndex === index}
            >
              {/* Plus / Minus */}
              <span
                className="fs-3 text-muted me-3"
                style={{ minWidth: "20px" }}
              >
                {openIndex === index ? "−" : "+"}
              </span>

              {/* Title */}
              <h4 className="mb-0 fw-medium text-dark">
                {feature.title}
              </h4>
            </button>

            {/* Content */}
            {openIndex === index && (
              <div className="pb-4 ps-5 pe-4">
                <p className="mb-0 text-muted">
                  {feature.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesItems;
