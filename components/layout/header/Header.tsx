"use client";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200);
    const onResize = () => { setToggleMenu(false); };
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

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
                  <li className="ml-20">
                    <a className="search-trigger" style={{ cursor: "pointer" }} onClick={() => setSearchToggle(!searchToggle)}>
                      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_307_344)">
                          <path d="M16.0375 14.9381L12.0784 11.0334C13.0625 9.86621 13.6554 8.36744 13.6554 6.73438C13.6554 3.02103 10.5925 0 6.82774 0C3.0629 0 0 3.02103 0 6.73438C0 10.4475 3.0629 13.4683 6.82774 13.4683C8.4834 13.4683 10.0031 12.8836 11.1865 11.913L15.1456 15.8178C15.2687 15.9393 15.4301 16 15.5915 16C15.7529 16 15.9143 15.9393 16.0375 15.8178C16.2839 15.5748 16.2839 15.181 16.0375 14.9381ZM1.26142 6.73438C1.26142 3.70705 3.75845 1.24414 6.82774 1.24414C9.89695 1.24414 12.3939 3.70705 12.3939 6.73438C12.3939 9.76146 9.89695 12.2241 6.82774 12.2241C3.75845 12.2241 1.26142 9.76146 1.26142 6.73438Z" fill="#0F0D1D" />
                        </g>
                        <defs>
                          <clipPath id="clip0_307_344"><rect width="16.2222" height="16" fill="white" /></clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
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
    </>
  );
};

export default Header;