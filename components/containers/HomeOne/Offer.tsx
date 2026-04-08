"use client";
import Link from "next/link";
import Image from "next/image";
import { useT } from "@/components/i18n/useT";
const Offer = () => {
  const { t } = useT();
  const institutions = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/8617642/pexels-photo-8617642.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/7972512/pexels-photo-7972512.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/5905923/pexels-photo-5905923.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/7972568/pexels-photo-7972568.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 6,
      image:
        "https://images.pexels.com/photos/7092460/pexels-photo-7092460.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <section className="offer-area secondary-bg pt-30 pb-60" id="institutions">
      <div className="container">
        <div className="section-header text-center mb-60">
          <h2
            className="text-white mb-20"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            {t("institutions.title", "Institutions We Serve")}
          </h2>
          <h3
            className="text-white mb-15"
            style={{ fontSize: "24px", fontWeight: "600" }}
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1500"
          >
            {t(
              "institutions.subtitle",
              "Flexible Solutions for Every Type of Educational Institution"
            )}
          </h3>
          <p
            className="text-white"
            style={{ fontSize: "16px", opacity: "0.9", maxWidth: "800px", margin: "0 auto" }}
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            {t(
              "institutions.description",
              "INNSIS is designed to adapt to the unique needs of different educational environments, whether you manage a small private school or a large multi-campus institution."
            )}
          </p>
        </div>
        <div className="row g-4">
          {institutions.map((institution, index) => (
            <div
              key={institution.id}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay={index * 100}
              data-aos-duration="1500"
            >
              <div
                className="offer__item"
                style={{
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "12px",
                  border: "none",
                  padding: 0,
                  boxShadow: "none",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: "250px",
                    overflow: "hidden",
                    borderRadius: "12px 12px 0 0",
                  }}
                >
                  <Image
                    src={institution.image}
                    alt={t(`institutions.items.${institution.id}.title`)}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div
                  style={{
                    padding: "20px",
                    background: "rgba(0, 70, 168, 0.95)",
                    borderRadius: "0 0 12px 12px",
                    minHeight: "150px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <h4
                    className="text-white"
                    style={{ fontSize: "20px", fontWeight: "600" }}
                  >
                    {t(`institutions.items.${institution.id}.title`)}
                  </h4>
                  <p className="text-white mb-0" style={{ fontSize: "14px", lineHeight: "1.6", opacity: "0.95" }}>
                    {t(`institutions.items.${institution.id}.description`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
