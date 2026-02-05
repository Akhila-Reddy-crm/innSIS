"use client";

import { useState } from "react";

const ServiceItems = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "For Administrators",
      description: "Run your institution with clarity and confidence.",
      benefits: [
        "Centralized control: Manage student and staff data, classes, courses, fees, and attendance from a single interface.",
        "Custom workflows: Configure admission, registration, graduation, and scheduling processes based on your policies.",
        "Powerful analytics: Generate reports on student performance, staff productivity, financials, and academic trends.",
        "Data security: Control access with role-based permissions, audit trails, and encrypted data.",
        "Compliance-ready: Track historical records, generate reports for authorities, and maintain accreditation documentation with ease.",
        "Automated alerts: Get reminders for pending approvals, absences, upcoming deadlines, and system changes.",
      ],
    },
    {
      title: "For Teachers",
      description: "Make teaching more focused and less administrative.",
      benefits: [
        "Take attendance in seconds with automated parent notifications.",
        "Grade submission with weighted categories and GPA calculation.",
        "Performance tracking via intuitive dashboards.",
        "Classroom communication with students and parents.",
        "Schedule and exam management in one place.",
      ],
    },
    {
      title: "For Students",
      description: "A central hub to manage school life.",
      benefits: [
        "Track grades, attendance, schedules, and assignments.",
        "Self-service tools for registration and transcripts.",
        "Direct notifications from teachers and administrators.",
        "Access jobs, internships, and placement programs.",
        "Mobile-first access on any device.",
      ],
    },
    {
      title: "For Parents",
      description: "Stay connected with your child's education.",
      benefits: [
        "Real-time attendance and grade updates.",
        "Secure online fee payments.",
        "Event and meeting reminders.",
        "Two-way communication with teachers.",
        "Multi-student profile access.",
      ],
    },
    {
      title: "For Educational Institutions",
      description: "Flexible and scalable for every kind of school.",
      benefits: [
        "Colleges & Universities: Degree audits, credit tracking, complex schedules.",
        "Trade Schools & Adult Education: Modular courses and flexible enrollment.",
        "Virtual & Remote Learning: Built-in LMS and communication tools.",
      ],
    },
  ];

  return (
    <section className="service-inner-area pt-120 pb-120">
      <div className="container">
        <div className="border rounded overflow-hidden">
          {sections.map((section, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={section.title} className="border-bottom">
                {/* Header */}
                <button
                  className={`
                    w-100 border-0 d-flex align-items-center gap-3 px-4 py-4 text-start
                    ${isOpen ? "bg-light" : "bg-transparent"}
                  `}
                  onClick={() => toggleSection(index)}
                  aria-expanded={isOpen}
                >
                  {/* Chevron */}
                  <span
                    className={`fs-5 ${
                      isOpen ? "text-primary" : "text-muted"
                    }`}
                  >
                    {isOpen ? "▼" : "▶"}
                  </span>

                  {/* Title */}
                  <span
                    className={`fw-medium fs-6 ${
                      isOpen ? "text-dark" : "text-secondary"
                    }`}
                  >
                    {section.title}
                  </span>
                </button>

                {/* Content */}
                {isOpen && (
                  <div className="px-5 pb-4">
                    {/* Highlighted Description */}
                    <div className="mb-3 p-3 bg-light border-start border-3 border-primary rounded">
                      <p className="mb-0 fw-medium text-dark">
                        {section.description}
                      </p>
                    </div>

                    {/* Benefits */}
                    <ul className="ps-0 list-unstyled">
                      {section.benefits.map((benefit, i) => (
                        <li
                          key={i}
                          className="d-flex align-items-start gap-2 mb-2 text-muted"
                        >
                          <span className="text-primary fw-bold">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceItems;
