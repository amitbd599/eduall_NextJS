import BannerOne from "@/components/BannerOne";
import BrandOne from "@/components/BrandOne";
import ExploreCourseOne from "@/components/ExploreCourseOne";
import FeaturesOne from "@/components/FeaturesOne";
import HeaderOne from "@/components/HeaderOne";

export const metadata = {
  title: "Digital Market Place NEXT Js Template",
  description:
    "DpMarket – Digital Products Marketplace NEXT JS Template – A versatile and meticulously designed set of templates crafted to elevate your Digital Products Marketplace content and experiences.",
};

const page = () => {
  return (
    <>
      {/* HeaderOne */}
      <HeaderOne />

      {/* BannerOne */}
      <BannerOne />

      {/* BrandOne */}
      <BrandOne />

      {/* FeaturesOne */}
      <FeaturesOne />

      {/* ExploreCourseOne */}
      <ExploreCourseOne />
    </>
  );
};

export default page;
