import React from "react";
import EmailBanner from "../Components/Banners/EmailBanner";
import IntroBanner from "../Components/Banners/IntroBanner";
import Popular from "../Components/Banners/Popular";
import Values from "../Components/Banners/Values";
import Hero from "../Components/Hero/Hero";
import Testinomials from "../Components/Testinomials/Testinomials";

const Home = () => {
  return (
    <>
      <Hero />
      <IntroBanner />
      <Popular />
      <Values />
      <Testinomials />
      <EmailBanner />
    </>
  );
};

export default Home;
