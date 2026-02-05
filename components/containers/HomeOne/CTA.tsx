import Link from "next/link";

const CTA = () => {
  return (
    <section className="cta-area pt-120 pb-120" id="cta-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8" data-aos="fade-up" data-aos-duration="1500">
            <div className="cta__item text-center" style={{ 
              background: "linear-gradient(135deg, #3C72FC 0%, #2B5BD6 100%)", 
              padding: "60px 40px", 
              borderRadius: "20px",
              color: "white",
              marginBottom: "30px"
            }}>
              <h2 className="mb-20 text-white">Let&apos;s Connect!</h2>
              <p className="mb-30 text-white">
                Have questions or want to learn more? Get in touch with our team.
              </p>
              <Link href="contact" className="btn-one" style={{ background: "white", color: "#3C72FC" }}>
                Contact Us <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500">
            <div className="cta__item text-center" style={{ 
              background: "linear-gradient(135deg, #2B5BD6 0%, #3C72FC 100%)", 
              padding: "60px 40px", 
              borderRadius: "20px",
              color: "white"
            }}>
              <h2 className="mb-20 text-white">Book a Demo!</h2>
              <p className="mb-30 text-white">
                See INNSIS in action. Schedule a personalized demonstration tailored to your needs.
              </p>
              <Link href="contact" className="btn-one" style={{ background: "white", color: "#3C72FC" }}>
                Request a Demo <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

