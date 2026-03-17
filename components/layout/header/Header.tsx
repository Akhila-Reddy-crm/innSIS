"use client";
import React, { useState, useEffect } from "react";
import ResellerModal from "./ResellerModal";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo/logo-blue-original1.png";

const navLinks = [
  { label: "Features", target: "features" },
  { label: "About Us", target: "about-section" },
  { label: "Our Institutions", target: "institutions" },
  { label: "Our Impact", target: "impact-section" },
  { label: "Contact Us", target: "contact-section" },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);

  // reseller modal open state
  const [resellerToggle, setResellerToggle] = useState(false);

  return (
    <>
      <header className={(scrolled ? "aniamted menu-fixed" : "") + " header-area"}>
        <div className="container header__container">
          <div className="header__main">
            <Link href="/" className="logo">
              <Image src={logo} alt="INNSIS logo" style={{height:"15vh"}} priority />
            </Link>

            {/* Desktop nav */}
            <div className="main-menu d-none d-lg-block">
              <nav>
                <ul>
                  {navLinks.map((link) => (
                    <li key={link.target}>
                      <a
                        href={`#${link.target}`}
                        onClick={(e) => { e.preventDefault(); scrollTo(link.target); }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Desktop CTAs */}
           
<div className="d-none d-lg-flex" style={{ gap: "10px", alignItems: "center" }}>
  <a
    href="#contact-section"
    className="btn-one"
    onClick={(e) => { e.preventDefault(); scrollTo("contact-section"); }}
    style={{ padding: "8px 14px", fontSize: "13px", whiteSpace: "nowrap" }}
  >
    Get a Demo <i className="fa-regular fa-arrow-right-long"></i>
  </a>
  <a
    href="https://1drv.ms/b/c/64f83ff70ae97eb7/IQA97OCFOgVkQqrYOyGHYwYsAST2uL2Qh--ARP3fqGZiLiU?e=0RkF3m"
    className="btn-one btn-small"
    target="_blank"
    rel="noopener noreferrer"
    style={{ padding: "8px 14px", fontSize: "13px", whiteSpace: "nowrap" }}
  >
    Get More Info <i className="fa-regular fa-arrow-right-long"></i>
  </a>
  <a
    href="#"
    className="btn-one"
    onClick={(e) => { e.preventDefault(); setResellerToggle(true); }}
    style={{ padding: "8px 14px", fontSize: "13px", whiteSpace: "nowrap" }}
  >
    Reseller <i className="fa-regular fa-arrow-right-long"></i>
  </a>
</div>

            {/* Mobile hamburger */}
            <div className="bars d-block d-lg-none" style={{ position: "relative", zIndex: 1100 }}>
              <i
                className={toggleMenu ? "fa-solid fa-times" : "fa-solid fa-bars"}
                style={{ fontSize: 20, cursor: "pointer", padding: "10px", color: "var(--paragraph)", border: "1px solid var(--border)", borderRadius: 10 }}
                onClick={() => setToggleMenu(!toggleMenu)}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      {toggleMenu && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1050,
            display: "flex",
          }}
        >
          {/* Backdrop */}
          <div
            style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)" }}
            onClick={() => setToggleMenu(false)}
          />
          {/* Drawer */}
          <div
            style={{
              position: "relative",
              marginLeft: "auto",
              width: "280px",
              height: "100%",
              background: "#0046A8",
              padding: "24px 20px",
              overflowY: "auto",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
              <Image src={logo} alt="INNSIS logo" height={18} priority />
              <i
                className="fa-solid fa-times"
                style={{ color: "#fff", fontSize: 20, cursor: "pointer" }}
                onClick={() => setToggleMenu(false)}
              />
            </div>

            {navLinks.map((link) => (
              <a
                key={link.target}
                href={`#${link.target}`}
                onClick={(e) => { e.preventDefault(); scrollTo(link.target); setToggleMenu(false); }}
                style={{
                  display: "block",
                  color: "#fff",
                  fontWeight: 600,
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.2)",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </a>
            ))}

            <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <a
                href="#contact-section"
                className="btn-one"
                onClick={(e) => { e.preventDefault(); scrollTo("contact-section"); setToggleMenu(false); }}
                style={{ textAlign: "center", padding: "12px" }}
              >
                Get a Demo <i className="fa-regular fa-arrow-right-long"></i>
              </a>
              <a
                href="https://1drv.ms/b/c/64f83ff70ae97eb7/IQA97OCFOgVkQqrYOyGHYwYsAST2uL2Qh--ARP3fqGZiLiU?e=0RkF3m"
                className="btn-one"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textAlign: "center", padding: "12px", background: "rgba(255,255,255,0.15)" }}
              >
                Get More Info <i className="fa-regular fa-arrow-right-long"></i>
              </a>
              <a
                href="#"
                className="btn-one"
                onClick={(e) => { e.preventDefault(); setResellerToggle(true); setToggleMenu(false); }}
                style={{ textAlign: "center", padding: "12px", background: "rgba(255,255,255,0.15)" }}
              >
                Reseller <i className="fa-regular fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Search overlay */}
      <div className={(searchToggle ? "open" : "") + " search-wrap"} onClick={() => setSearchToggle(false)}>
        <div className="search-inner">
          <i className="fas fa-times search-close" onClick={() => setSearchToggle(false)} />
          <div className="search-cell">
            <form method="get">
              <div className="search-field-holder">
                <input type="search" className="main-search-input" placeholder="Search..." onClick={(e) => e.stopPropagation()} />
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* reseller modal component */}
      <ResellerModal open={resellerToggle} onClose={() => setResellerToggle(false)} />
    </>
  );
};

export default Header;