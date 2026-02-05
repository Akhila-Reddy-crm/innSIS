import TopHeader from "@/components/layout/header/TopHeader";
import Header from "@/components/layout/header/Header";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import AboutTwo from "@/components/containers/HomeTwo/AboutTwo";
import Offer from "@/components/containers/HomeOne/Offer";
import Case from "@/components/containers/HomeOne/Case";
import Testimonial from "@/components/containers/HomeOne/Testimonial";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";

const page = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <CmnBanner title="About Us" bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&auto=format" />
      <AboutTwo />
      <Offer />
      <Case />
      <Testimonial />
      <Footer />
      <CustomCursor />
      <ScrollProgressButton />
    </div>
  );
};

export default page;
