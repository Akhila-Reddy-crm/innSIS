"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import { I18nContext } from "./I18nProvider";

interface Language {
  code: string;
  label: string;
  flag?: string;
}

const LANGUAGES: Language[] = [
  { code: "en", label: "English" },
  { code: "FR", label: "Français" },
  { code: "FR-CA", label: "Français Canadien" },
  { code: "ES", label: "Español" },
];

export function LanguageSwitcher({ isMobile = false }: { isMobile?: boolean }) {
  const { lang, setLang } = useContext(I18nContext);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleLanguageChange = (languageCode: string) => {
    setLang(languageCode);
    localStorage.setItem("preferredLanguage", languageCode);
    setIsOpen(false);
  };

  const currentLanguage = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  const buttonStyles = isMobile ? {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding: "10px 16px",
    backgroundColor: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.3)",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    color: "#fff",
    whiteSpace: "nowrap",
    transition: "all 0.3s ease",
    width: "100%",
    boxSizing: "border-box" as const,
  } : {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "8px 12px",
    backgroundColor: "transparent",
    border: "1px solid var(--border, #ddd)",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: "600",
    color: "#fff",
    whiteSpace: "nowrap",
    transition: "all 0.3s ease",
  };

  const dropdownStyles = isMobile ? {
    position: "static" as const,
    marginTop: "8px",
    backgroundColor: "rgba(255,255,255,0.95)",
    border: "1px solid rgba(255,255,255,0.3)",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    minWidth: "100%",
    zIndex: 1100,
    overflow: "hidden",
  } : {
    position: "absolute" as const,
    top: "100%",
    right: 0,
    marginTop: "6px",
    backgroundColor: "#fff",
    border: "1px solid var(--border, #ddd)",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    minWidth: "200px",
    zIndex: 1100,
    overflow: "hidden",
  };

  return (
    <div
      ref={dropdownRef}
      style={{
        position: "relative",
        display: "inline-block",
        width: isMobile ? "100%" : "auto",
      }}
    >
      {/* Dropdown trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={buttonStyles}
        onMouseEnter={(e) => {
          if (e.currentTarget instanceof HTMLElement && !isMobile) {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
            e.currentTarget.style.borderColor = "#fff";
          }
        }}
        onMouseLeave={(e) => {
          if (e.currentTarget instanceof HTMLElement && !isMobile) {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.borderColor = "var(--border, #ddd)";
          }
        }}
      >
        <i className="fa-solid fa-globe" style={{ fontSize: isMobile ? "14px" : "12px", color: "#fff" }}></i>
        <span style={{ 
          display: "inline-block",
          color: "#fff",
          whiteSpace: "nowrap"
        }}>
          {currentLanguage.label}
        </span>
        <i
          className={`fa-solid fa-chevron-down`}
          style={{
            transition: "transform 0.3s ease",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            fontSize: isMobile ? "12px" : "10px",
            color: "#fff"
          }}
        ></i>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div style={dropdownStyles}>
          {LANGUAGES.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                padding: isMobile ? "14px 16px" : "12px 16px",
                backgroundColor:
                  lang === language.code ? "#0046A8" : (isMobile ? "transparent" : "#fff"),
                border: "none",
                textAlign: "left",
                cursor: "pointer",
                fontSize: isMobile ? "14px" : "13px",
                fontWeight: lang === language.code ? "700" : "500",
                transition: "all 0.2s ease",
                gap: "8px",
              }}
              onMouseEnter={(e) => {
                if (e.currentTarget instanceof HTMLElement) {
                  if (lang === language.code) {
                    e.currentTarget.style.backgroundColor = "#003580";
                  } else {
                    e.currentTarget.style.backgroundColor = isMobile ? "rgba(0, 70, 168, 0.1)" : "rgba(0, 70, 168, 0.05)";
                  }
                }
              }}
              onMouseLeave={(e) => {
                if (e.currentTarget instanceof HTMLElement) {
                  e.currentTarget.style.backgroundColor =
                    lang === language.code ? "#0046A8" : (isMobile ? "transparent" : "#fff");
                }
              }}
            >
              <span style={{ 
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>🌐</span>
              <span style={{ 
                flex: 1,
                color: lang === language.code ? "#fff" : (isMobile ? "#333" : "var(--paragraph, #333)"),
              }}>
                {language.label}
              </span>
              {lang === language.code && (
                <i
                  className="fa-solid fa-check"
                  style={{ 
                    fontSize: isMobile ? "14px" : "12px", 
                    color: "#fff",
                    display: "flex",
                    alignItems: "center"
                  }}
                ></i>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
