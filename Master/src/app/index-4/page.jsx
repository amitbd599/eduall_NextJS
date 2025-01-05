import AboutFour from "@/components/AboutFour";
import BannerFour from "@/components/BannerFour";
import CounterThree from "@/components/CounterThree";
import HeaderTwo from "@/components/HeaderTwo";
import TuitionTypesOne from "@/components/TuitionTypesOne";
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
      <HeaderTwo />

      {/* BannerFour */}
      <BannerFour />

      {/* TuitionTypesOne */}
      <TuitionTypesOne />

      {/* AboutFour */}
      <AboutFour />

      {/* CounterThree */}
      <CounterThree />
    </>
  );
};

export default page;
