"use client";

const CTA = () => {
  return (
    <section className="cta-area pt-25 pb-25" id="cta-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8" data-aos="fade-up" data-aos-duration="1500">
            <div
              className="cta__item text-center"
              style={{
                background: "linear-gradient(135deg, #0046A8 0%, #002c70 100%)",
                padding: "20px 28px",
                borderRadius: "16px",
                color: "white",
              }}
            >
              <h2 className="mb-2 text-white">Let&apos;s Connect</h2>
              <p className="mb-20 text-white">
                Have questions or want to see INNSIS in action? Our team is ready to help with a personalized demo.
              </p>
              <div className="d-flex flex-wrap justify-content-center">
                <a
                  href="#contact-section"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-one"
                  style={{
                    background: "transparent",
                    border: "1px solid #ffffff",
                    color: "#ffffff",
                  }}
                >
                  Request a Demo <i className="fa-regular fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

