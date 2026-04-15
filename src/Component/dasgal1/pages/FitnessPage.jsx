import React from "react";
import Navbar from "../components/Topbar";
import Banner from "../components/Intro";
import CourseList from "../components/ProgramList";
import WhyChooseUs from "../components/TrainerSection";
import Footer from "../components/BottomFooter";

const Web2 = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <CourseList />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Web2;
