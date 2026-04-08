"use client";
import React, { useRef, useState } from "react";
import { countries } from "@/utils/countries";
import { useT } from "@/components/i18n/useT";

interface ResellerModalProps {
  open: boolean;
  onClose: () => void;
}

const ResellerModal: React.FC<ResellerModalProps> = ({ open, onClose }) => {
  const [tab, setTab] = useState<"apply" | "login">("apply");
  const appFormRef = useRef<HTMLFormElement | null>(null);
  const { t } = useT();

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
      alert(
        t(
          "reseller.validationAlert",
          "Please fill in all required fields and accept Privacy Policy & Terms before submitting."
        )
      );
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
        alert(
          t(
            "reseller.submitError",
            "There was a problem submitting the reseller application. Please try again."
          )
        );
        return;
      }

      alert(
        t(
          "reseller.submitSuccess",
          "Thank you! Your reseller application has been submitted. We will contact you soon."
        )
      );
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
      alert(
        t(
          "reseller.submitError",
          "There was a problem submitting the reseller application. Please try again."
        )
      );
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
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    
    <div className="reseller-title">
      {t("reseller.portalTitle", "🎓 INNSIS / Reseller Portal")}
    </div>

    <button
      onClick={onClose}
      style={{
        width: "36px",
        height: "36px",
        minWidth: "36px",
        borderRadius: "50%",
        border: "none",
        background: "rgba(0,0,0,0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        flexShrink: 0,
      }}
    >
      <i className="fa-solid fa-xmark" style={{ fontSize: "16px" }} />
    </button>

  </div>

        
          <div className="reseller-tabs">
            <span
              className={tab === "apply" ? "active" : ""}
              onClick={() => setTab("apply")}
            >
              <i className="fa-solid fa-star" style={{ marginRight: 6 }}></i>{" "}
              {t("reseller.tabs.becomeReseller", "Become a Reseller")}
            </span>
            <span
              className={tab === "login" ? "active" : ""}
              onClick={() => setTab("login")}
            >
              <i className="fa-regular fa-arrow-right-long" style={{ marginRight: 6 }}></i>{" "}
              {t("reseller.tabs.partnerLogin", "Partner Login")}
            </span>
          </div>
     
        </div>
        <div className="reseller-content">
          {tab === "apply" ? (
            <form ref={appFormRef} onSubmit={submitApp}>
              <h4>{t("reseller.apply.title", "Join the Partner Program")}</h4>
              <p style={{fontSize:'14px'}}>
                {t(
                  "reseller.apply.subtitle",
                  "Fill in the form below — our team will review your application and respond within 2 business days."
                )}
              </p>
              <div className="row">
                <div className="col-md-6">
                  <label>{t("reseller.apply.firstName", "First Name *")}</label>
                  <input
                    type="text"
                    className="form-control"
                    value={appForm.firstName}
                    onChange={(e) => onAppChange("firstName", e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label>{t("reseller.apply.lastName", "Last Name *")}</label>
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
                  <label>{t("reseller.apply.businessEmail", "Business Email *")}</label>
                  <input
                    type="email"
                    className="form-control"
                    value={appForm.businessEmail}
                    onChange={(e) => onAppChange("businessEmail", e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label>{t("reseller.apply.phone", "Phone Number *")}</label>
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
                  <label>{t("reseller.apply.jobTitle", "Job Title")}</label>
                  <input
                    type="text"
                    className="form-control"
                    value={appForm.jobTitle}
                    onChange={(e) => onAppChange("jobTitle", e.target.value)}
                  />
                </div>
              </div>
              <hr />
              <h5>{t("reseller.apply.companyInfo", "Company Info")}</h5>
              <div className="row">
                <div className="col-md-6">
                  <label>{t("reseller.apply.companyName", "Company Name *")}</label>
                  <input
                    type="text"
                    className="form-control"
                    value={appForm.companyName}
                    onChange={(e) => onAppChange("companyName", e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label>{t("reseller.apply.companyWebsite", "Company Website")}</label>
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
                  <label>{t("reseller.apply.companySize", "Company Size")}</label>
                  <select
                    className="form-control"
                    value={appForm.companySize || ""}
                    onChange={(e) => onAppChange("companySize", e.target.value)}
                  >
                    <option value="">{t("common.select", "Select…")}</option>
                    <option>1-10</option>
                    <option>11-50</option>
                    <option>51-200</option>
                    <option>201-500</option>
                    <option>501+</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label>{t("reseller.apply.country", "Country *")}</label>
                  <select
                    className="form-control"
                    value={appForm.country}
                    onChange={(e) => onAppChange("country", e.target.value)}
                    required
                  >
                    <option value="">{t("common.select", "Select…")}</option>
                    {countries.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label>{t("reseller.apply.sector", "Sector You Serve")}</label>
                  <select
                    className="form-control"
                    value={appForm.sector}
                    onChange={(e) => onAppChange("sector", e.target.value)}
                  >
                    <option value="">{t("common.select", "Select…")}</option>
                    <option>{t("reseller.apply.sectorOptions.k12", "K-12 Schools")}</option>
                    <option>{t("reseller.apply.sectorOptions.collegeUniversity", "Colleges/University")}</option>
                    <option>{t("reseller.apply.sectorOptions.privateSchools", "Private Schools")}</option>
                    <option>{t("common.other", "Other")}</option>
                  </select>
                </div>
              </div>
              <div className="mt-3">
                <label>
                  {t(
                    "reseller.apply.reasonLabel",
                    "Why do you want to partner with INNSIS?"
                  )}
                </label>
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
                  {t(
                    "reseller.apply.agreeText",
                    "I agree to INNSIS's Privacy Policy and Terms of Service. My information will be used to evaluate my reseller application."
                  )}
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
                {t("reseller.apply.submit", "Submit Application")}{" "}
                <i className="fa-regular fa-arrow-right-long"></i>
              </button>
              <p className="mt-2 text-center">
                {t("reseller.apply.alreadyPartner", "Already a partner?")}{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab("login");
                  }}
                >
                  {t("reseller.apply.loginHere", "Log in here →")}
                </a>
              </p>
            </form>
          ) : (
            <form onSubmit={submitLogin}>
              <h4>{t("reseller.login.title", "Partner Login")}</h4>
              <p style={{fontSize:'14px'}}>
                {t(
                  "reseller.login.subtitle",
                  "Access your reseller dashboard, track commissions, and manage your accounts."
                )}
              </p>
              {loginError && (
                <p className="text-danger">
                  {t(
                    "reseller.login.invalidCreds",
                    "Invalid Email Address and/or Password"
                  )}
                </p>
              )}
              <div className="mt-2">
                <label>{t("reseller.login.email", "Email Address *")}</label>
                <input
                  type="email"
                  className="form-control"
                  value={loginForm.email}
                  onChange={(e) => onLoginChange("email", e.target.value)}
                  required
                />
              </div>
              <div className="mt-3">
                <label>{t("reseller.login.password", "Password *")}</label>
                <input
                  type="password"
                  className="form-control"
                  value={loginForm.password}
                  onChange={(e) => onLoginChange("password", e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn-one mt-4" style={{ width: "100%", background: "#0046A8", color: "#fff" }}>
                {t("reseller.login.submit", "Log In to Portal →")}
              </button>
              <p className="mt-2 text-center">
                {t("reseller.login.notAReseller", "Not a reseller yet?")}{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab("apply");
                  }}
                >
                  {t("reseller.login.applyNow", "Apply now →")}
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
