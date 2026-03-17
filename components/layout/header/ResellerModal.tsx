"use client";
import React, { useRef, useState } from "react";
import { countries } from "@/utils/countries";

interface ResellerModalProps {
  open: boolean;
  onClose: () => void;
}

const ResellerModal: React.FC<ResellerModalProps> = ({ open, onClose }) => {
  const [tab, setTab] = useState<"apply" | "login">("apply");
  const appFormRef = useRef<HTMLFormElement | null>(null);

  const [appForm, setAppForm] = useState({
    firstName: "",
    lastName: "",
    businessEmail: "",
    phone: "",
    jobTitle: "",
    companyName: "",
    companyWebsite: "",
    companySize: "",
    country: "",
    sector: "",
    reason: "",
    agree: false,
  });

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState(false);

  const onAppChange = (field: string, value: string | boolean) => {
    setAppForm((prev) => ({ ...prev, [field]: value }));
  };

  const onLoginChange = (field: string, value: string) => {
    setLoginForm((prev) => ({ ...prev, [field]: value }));
  };

  const isAppFormValid = () => {
    const formEl = appFormRef.current;
    const browserValidity = formEl ? formEl.checkValidity() : false;
    return browserValidity && appForm.agree;
  };

  const submitApp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAppFormValid()) {
      alert("Please fill in all required fields and accept Privacy Policy & Terms before submitting.");
      return;
    }

    try {
      const res = await fetch("https://innsiswebsitebackend.azurewebsites.net/api/send-reseller", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appForm),
      });

      if (!res.ok) {
        alert("There was a problem submitting the reseller application. Please try again.");
        return;
      }

      alert("Thank you! Your reseller application has been submitted. We will contact you soon.");
      setAppForm({
        firstName: "",
        lastName: "",
        businessEmail: "",
        phone: "",
        jobTitle: "",
        companyName: "",
        companyWebsite: "",
        companySize: "",
        country: "",
        sector: "",
        reason: "",
        agree: false,
      });
      onClose();
    } catch (error) {
      console.error("Reseller form submit error", error);
      alert("There was a problem submitting the reseller application. Please try again.");
    }
  };

  const submitLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(true);
  };

  if (!open) return null;

  return (
    <div className={(open ? "open" : "") + " reseller-wrap"} onClick={onClose}>
      <div className="reseller-inner" onClick={(e) => e.stopPropagation()}>
        <div className="reseller-header">
          <div className="reseller-title">🎓 INNSIS / Reseller Portal</div>
          <div className="reseller-tabs">
            <span
              className={tab === "apply" ? "active" : ""}
              onClick={() => setTab("apply")}
            >
              <i className="fa-solid fa-star" style={{ marginRight: 6 }}></i> Become a Reseller
            </span>
            <span
              className={tab === "login" ? "active" : ""}
              onClick={() => setTab("login")}
            >
              <i className="fa-regular fa-arrow-right-long" style={{ marginRight: 6 }}></i> Partner Login
            </span>
          </div>
          <i
            className="fa-solid fa-xmark close"
            onClick={onClose}
          />
        </div>
        <div className="reseller-content">
          {tab === "apply" ? (
            <form ref={appFormRef} onSubmit={submitApp}>
              <h4>Join the Partner Program</h4>
              <p style={{fontSize:'14px'}}>Fill in the form below — our team will review your application and respond within 2 business days.</p>
              <div className="row">
                <div className="col-md-6">
                  <label>First Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    value={appForm.firstName}
                    onChange={(e) => onAppChange("firstName", e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label>Last Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    value={appForm.lastName}
                    onChange={(e) => onAppChange("lastName", e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label>Business Email *</label>
                  <input
                    type="email"
                    className="form-control"
                    value={appForm.businessEmail}
                    onChange={(e) => onAppChange("businessEmail", e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label>Phone Number *</label>
                  <input
                    type="text"
                    className="form-control"
                    value={appForm.phone}
                    onChange={(e) => onAppChange("phone", e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label>Job Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={appForm.jobTitle}
                    onChange={(e) => onAppChange("jobTitle", e.target.value)}
                  />
                </div>
              </div>
              <hr />
              <h5>Company Info</h5>
              <div className="row">
                <div className="col-md-6">
                  <label>Company Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    value={appForm.companyName}
                    onChange={(e) => onAppChange("companyName", e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label>Company Website</label>
                  <input
                    type="text"
                    className="form-control"
                    value={appForm.companyWebsite}
                    onChange={(e) => onAppChange("companyWebsite", e.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label>Company Size</label>
                  <select
                    className="form-control"
                    value={appForm.companySize || ""}
                    onChange={(e) => onAppChange("companySize", e.target.value)}
                  >
                    <option value="">Select…</option>
                    <option>1-10</option>
                    <option>11-50</option>
                    <option>51-200</option>
                    <option>201-500</option>
                    <option>501+</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label>Country *</label>
                  <select
                    className="form-control"
                    value={appForm.country}
                    onChange={(e) => onAppChange("country", e.target.value)}
                    required
                  >
                    <option value="">Select…</option>
                    {countries.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label>Sector You Serve</label>
                  <select
                    className="form-control"
                    value={appForm.sector}
                    onChange={(e) => onAppChange("sector", e.target.value)}
                  >
                    <option value="">Select…</option>
                    <option>K-12 Schools</option>
                    <option>Colleges/University</option>
                    <option>Private Schools</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="mt-3">
                <label>Why do you want to partner with INNSIS?</label>
                <textarea
                  className="form-control"
                  rows={3}
                  value={appForm.reason}
                  onChange={(e) => onAppChange("reason", e.target.value)}
                />
              </div>
              <div className="form-check mt-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="agreeCheck"
                  checked={appForm.agree}
                  onChange={(e) => onAppChange("agree", e.target.checked)}
                  required
                />
                <label className="form-check-label" htmlFor="agreeCheck">
                  I agree to INNSIS's <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a>. My information will be used to evaluate my reseller application.
                </label>
              </div>
              <button
                type="submit"
                className="btn-one mt-4"
                disabled={!isAppFormValid()}
                style={{
                  width: "100%",
                  opacity: isAppFormValid() ? 1 : 0.6,
                  cursor: isAppFormValid() ? "pointer" : "not-allowed",
                }}
              >
                Submit Application <i className="fa-regular fa-arrow-right-long"></i>
              </button>
              <p className="mt-2 text-center">
                Already a partner? <a href="#" onClick={(e) => { e.preventDefault(); setTab("login"); }}>
                  Log in here →
                </a>
              </p>
            </form>
          ) : (
            <form onSubmit={submitLogin}>
              <h4>Partner Login</h4>
              <p style={{fontSize:'14px'}}>Access your reseller dashboard, track commissions, and manage your accounts.</p>
              {loginError && <p className="text-danger">Invalid Email Address and/or Password</p>}
              <div className="mt-2">
                <label>Email Address *</label>
                <input
                  type="email"
                  className="form-control"
                  value={loginForm.email}
                  onChange={(e) => onLoginChange("email", e.target.value)}
                  required
                />
              </div>
              <div className="mt-3">
                <label>Password *</label>
                <input
                  type="password"
                  className="form-control"
                  value={loginForm.password}
                  onChange={(e) => onLoginChange("password", e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn-one mt-4" style={{ width: "100%", background: "#0046A8", color: "#fff" }}>
                Log In to Portal →
              </button>
              <p className="mt-2 text-center">
                Not a reseller yet? <a href="#" onClick={(e) => { e.preventDefault(); setTab("apply"); }}>
                  Apply now →
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResellerModal;
