import TopHeader from "@/components/layout/header/TopHeader";
import Header from "@/components/layout/header/Header";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import FeaturesItems from "@/components/containers/service/FeaturesItems";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";

const page = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <CmnBanner title="Features" bgImage="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&h=1080&fit=crop&auto=format" />
      <FeaturesItems />
      <Footer />
      <CustomCursor />
      <ScrollProgressButton />
    </div>
  );
};

export default page;
