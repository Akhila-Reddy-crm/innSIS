import TopHeader from "@/components/layout/header/TopHeader";
import Header from "@/components/layout/header/Header";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import PricingThree from "@/components/containers/HomeThree/PricingThree";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";

const page = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <CmnBanner title="Pricing" bgImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&h=1080&fit=crop&auto=format" />
      <PricingThree />
      <Footer />
      <CustomCursor />
      <ScrollProgressButton />
    </div>
  );
};

export default page;
