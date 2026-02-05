import TopHeader from "@/components/layout/header/TopHeader";
import Header from "@/components/layout/header/Header";
import Banner from "@/components/layout/banner/Banner";
import Service from "@/components/containers/HomeOne/Service";
import About from "@/components/containers/HomeOne/About";
import CTA from "@/components/containers/HomeOne/CTA";
import Case from "@/components/containers/HomeOne/Case";
import Offer from "@/components/containers/HomeOne/Offer";
import Testimonial from "@/components/containers/HomeOne/Testimonial";
import Blog from "@/components/containers/HomeOne/Blog";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";

const HomePage = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <Banner />
      <Service />
      <About />
      <CTA />
      <Case />
      <Offer />
      <Testimonial />
      <Blog />
      <Footer />
      <CustomCursor />
      <ScrollProgressButton />
    </>
  );
};

export default HomePage;
