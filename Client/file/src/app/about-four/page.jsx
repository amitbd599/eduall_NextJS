import AboutFourV2 from "@/components/AboutFourV2";
import BrandTwo from "@/components/BrandTwo";
import Breadcrumb from "@/components/Breadcrumb";
import CounterThreeV2 from "@/components/CounterThreeV2";
import FooterThree from "@/components/FooterThree";
import HeaderOne from "@/components/HeaderOne";
import PopularTeacherOne from "@/components/PopularTeacherOne";
import ReviewOne from "@/components/ReviewOne";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "EdullAll - LMS, Tutors, Education & Online Course NEXT JS Template",
  description:
    "EduAll is a comprehensive and modern NEXT JS template designed for online education platforms, learning management systems (LMS), tutors, educational institutions, and online courses. It’s the perfect solution for creating an engaging and interactive online learning experience for students, educators, and institutions. Whether you’re offering online courses, running a tutoring platform, or managing an educational website, EduAll provides the tools to help you succeed. This template is tailored to meet the needs of educators, administrators, and students, providing a seamless and engaging user experience.",
};

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"About Us 04"} />

      {/* AboutFourV2 */}
      <AboutFourV2 />

      {/* CounterThree */}
      <CounterThreeV2 />

      {/* PopularTeacherOne */}
      <PopularTeacherOne />

      {/* ReviewOne */}
      <ReviewOne />

      {/* BrandTwo */}
      <BrandTwo />

      {/* FooterThree */}
      <FooterThree />
    </>
  );
};

export default page;
