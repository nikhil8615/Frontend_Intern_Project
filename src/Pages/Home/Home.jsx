import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import LoginPage from "../../Components/LoginPage/LoginPage";
import Feature from "../../Components/Feature/Feature";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Pricing from "../../Components/Pricing/Pricing";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPage /> : <></>}

      <Navbar setShowLogin={setShowLogin} />
      <Hero />
      <Feature />
      <Testimonial />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
