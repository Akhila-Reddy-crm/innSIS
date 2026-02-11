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
import four from '@/public/images/menu/home4-image.jpg';

const Service = () => {
  const [isOverviewOpen, setOverviewOpen] = useState(0);
  // 4 items per row, show 3 rows (12 items) initially
  const [visibleCount, setVisibleCount] = useState(12);
  
  const features = [
    {
      id: 0,
      icon: Four,
      title: "Role-Based Portals & Access Control",
      description: "Secure, role-specific portals for students, parents, faculty, applicants, and administrators, with fine-grained permissions to protect sensitive data.",
    },

    {
      id: 1,
      icon: Five,
      title: "Admissions & Applicant Management",
      description: "Digitize the entire admissions lifecycle from applications and document submission to checklists, status tracking, and enrollment decisions.",
    },
    {
      id: 2,
      icon: Six,
      title: "Online Forms & Document Management",
      description: "Create dynamic forms, collect required documents, track completion status, and manage approvals securely in one place.",
    },
    {
      id: 3,
      icon: Four,
      title: "Student Records & Lifecycle Management",
      description: "Maintain a complete academic and administrative history for every student, including enrollment, programs, courses, grades, transcripts, and graduation status.         ",
    },

    {
      id: 4,
      icon: Five,
      title: "AI-Driven Student Insights",
      description: "Use intelligent analytics to identify academic trends, attendance risks, and engagement patterns, helping institutions take proactive action to support student success.",
    },
    {
      id: 5,
      icon: Six,
      title: "Attendance & Session Tracking",
      description: "Record attendance by class or session, monitor trends in real time, and automatically notify parents or staff of absences or irregularities.",
    },
    {
      id: 6,
      icon: Four,
      title: "Timetables & Academic Scheduling",
      description: "Build and manage class schedules, exam timetables, academic calendars, and room assignments with conflict-free planning.",
    },
      {
      id: 7,
      icon: Five,
      title: "Grading & Academic Performance",
      description: "Manage assessments, grade groups, exams, GPA calculations, and transcripts with real-time visibility into student progress.",
    },
    {
      id: 8,
      icon: Six,
      title: "Degree & Program Planning",
      description: "Track degree requirements, prerequisites, program completion rules, and student academic pathways to ensure graduation readiness.",
    },
    {
      id: 9,
      icon: Four,
      title: "Custom Reports & Dashboards",
      description: "Generate academic, financial, and operational reports with filters, summaries, and visual dashboards for data-driven decision making.",
    },
     {
      id: 10,
      icon: Five,
      title: "Student Performance & Risk Monitoring",
      description: "Identify academic trends, low attendance, or performance issues early to support timely intervention and retention.",
    },
     {
      id: 11,
      icon: Six,
      title: "Audit Trails & Activity Logs",
      description: "Maintain detailed logs of system activity and record changes to support accountability and institutional compliance.",
    },
     {
      id: 12,
      icon: Four,
      title: "Integrated Messaging & Notifications",
      description: "Send announcements, reminders, and alerts via email, SMS, or in-app notifications to individuals or groups.",
    },
     {
      id: 13,
      icon: Five,
      title: "Parent & Guardian Visibility",
      description: "Provide parents with secure access to attendance, grades, schedules, and key communications.",
    },
     {
      id: 14,
      icon: Six,
      title: "Faculty Collaboration Tools",
      description: "Enable instructors to manage classes, enter grades, track attendance, and communicate efficiently with students and staff.",
    },
     {
      id: 15,
      icon: Four,
      title: "Fees, Billing & Invoicing",
      description: "Configure fee structures, generate invoices, track payments, and manage student financial accounts securely.",
    },
     {
      id: 16,
      icon: Five,
      title: "Financial Aid & Awards Tracking",
      description: "Manage financial aid applications, scholarships, awards, and loan packages with clear visibility and reporting.",
    },
      {
      id: 17,
      icon: Six,
      title: "Payments & Transaction Tracking",
      description: "Support online payments, payment history, and real-time financial tracking for students and administrators.",
    },
      {
      id: 18,
      icon: Four,
      title: "Enterprise-Grade Security",
      description: "Protect institutional data with secure authentication, access controls, data segregation, and encryption best practices.",
    },
      {
      id: 19,
      icon: Five,
      title: "Compliance-Ready Architecture",
      description: "Support audit requirements, approval workflows, and regulatory compliance with structured records and reporting.",
    },
      {
      id: 20,
      icon: Six,
      title: "Workflow Automation",
      description: "Automate admissions processing, approvals, academic status changes (LOA, probation, withdrawal), and notifications to reduce manual work.",
    },
    {
      id: 21,
      icon: Four,
      title: "Configurable Status & Rules Engine",
      description: "Define custom statuses, workflows, and business rules across admissions, academics, and finance.",
    },
    {
      id: 22,
      icon: Five,
      title: "System Integrations & APIs",
      description: "Connect seamlessly with LMS platforms, payment gateways, accounting tools, and third-party systems.",
    },
    {
      id: 23,
      icon: Six,
      title: "Multi-Campus & Institutional Support",
      description: "Manage multiple campuses, departments, programs, and academic terms within a single platform.",
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
                style={{ height: "320px", minHeight: "320px" }}
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
              Load More <i className="fa-regular fa-arrow-right-long"></i>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Service;
