import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import DestinationList from "../components/DestinationList";
import ServiceSection from "../components/ServiceSection";
import Footer from "../components/Footer";

const TravelPage = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <DestinationList />
            <ServiceSection />
            <Footer />
        </div>
    );
};

export default TravelPage;