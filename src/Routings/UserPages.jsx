import { useState } from "react";
import Carrer from "../Carrer";
import Navbar from "../Components/Navbar";
import ContactUs from "../ContactUs";
import Cookie from "../Cookie";
import GetApp from "../GetApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Terms from "../Terms";
import Privacy from "../Privacy";
import Services from "../Services";
import Footer from "../Components/Footer";
import Home from "../Home";
import About from "../About";

const UserPages = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/career" element={<Carrer />} />
        <Route path="/getApp" element={<GetApp />} />
        <Route path="/cookie" element={<Cookie />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms&conditions" element={<Terms />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
      {/* <TempNav /> */}
      {/* <GetApp /> */}
      {/* <Carrer /> */}
      {/* <ContactUs /> */}
    </div>
  );
};

export default UserPages;
