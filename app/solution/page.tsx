import TopHeader from "@/components/layout/header/TopHeader";
import Header from "@/components/layout/header/Header";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ServiceItems from "@/components/containers/service/ServiceItems";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";

const SolutionPage = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <CmnBanner title="Solutions" bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&auto=format" />
      <ServiceItems />
      <Footer />
      <CustomCursor />
      <ScrollProgressButton />
    </div>
  );
};

export default SolutionPage;
