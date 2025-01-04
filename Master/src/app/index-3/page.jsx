import AboutThree from "@/components/AboutThree";
import BannerThree from "@/components/BannerThree";
import HeaderOne from "@/components/HeaderOne";
import InfoTwo from "@/components/InfoTwo";
import VideoOne from "@/components/VideoOne";

export const metadata = {
  title: "EdullAll - LMS, Tutors, Education & Online Course NEXT JS Template",
  description:
    "EduAll is a comprehensive and modern NEXT JS template designed for online education platforms, learning management systems (LMS), tutors, educational institutions, and online courses. It’s the perfect solution for creating an engaging and interactive online learning experience for students, educators, and institutions. Whether you’re offering online courses, running a tutoring platform, or managing an educational website, EduAll provides the tools to help you succeed. This template is tailored to meet the needs of educators, administrators, and students, providing a seamless and engaging user experience.",
};

const page = () => {
  return (
    <>
      {/* HeaderOne */}
      <HeaderOne />

      {/* BannerThree */}
      <BannerThree />

      {/* InfoTwo */}
      <InfoTwo />

      {/* AboutThree */}
      <AboutThree />

      {/* VideoOne */}
      <VideoOne />
    </>
  );
};

export default page;
