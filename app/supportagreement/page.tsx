"use client";

import { useEffect } from "react";

export default function SupportAgreementPage() {
  useEffect(() => {
    window.location.href = "/supportagreement.pdf";
  }, []);

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
      <div style={{ textAlign: "center" }}>
        <p>Opening the support agreement PDF...</p>
        <p>
          If the document does not open automatically, <a href="/supportagreement.pdf" target="_blank" rel="noopener noreferrer">click here</a>.
        </p>
      </div>
    </div>
  );
}
