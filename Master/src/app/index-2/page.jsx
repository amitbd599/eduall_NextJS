import AboutTwo from "@/components/AboutTwo";
import BannerTwo from "@/components/BannerTwo";
import CategoryOne from "@/components/CategoryOne";
import CertificateTwo from "@/components/CertificateTwo";
import ExploreCourseTwo from "@/components/ExploreCourseTwo";
import FeaturesTwo from "@/components/FeaturesTwo";
import HeaderOne from "@/components/HeaderOne";
import InfoSectionOne from "@/components/InfoSectionOne";
import TestimonialsTwo from "@/components/TestimonialsTwo";

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

      {/* BannerTwo */}
      <BannerTwo />

      {/* InfoSectionOne */}
      <InfoSectionOne />

      {/* CategoryOne */}
      <CategoryOne />

      {/* AboutTwo */}
      <AboutTwo />

      {/* FeaturesTwo */}
      <FeaturesTwo />

      {/* CertificateTwo */}
      <CertificateTwo />

      {/* ExploreCourseTwo */}
      <ExploreCourseTwo />

      {/* TestimonialsTwo */}
      <TestimonialsTwo />
    </>
  );
};

export default page;
