import { useState } from "react";
import Carrer from "./Carrer";
import Navbar from "./Components/Navbar";
import ContactUs from "./ContactUs";
import Cookie from "./Cookie";
import GetApp from "./GetApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Terms from "./Terms";
import Privacy from "./Privacy";
import Services from "./Services";
import Footer from "./Components/Footer";
import Home from "./Home";
import About from "./About";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";
import AdminService from "./AdminService";
import AdminBookings from "./AdminBookings";
import Banners from "./Banners";
import CodeManagement from "./CodeManagement";
import UserManagement from "./UserManagement";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/career" element={<Carrer />} />
        <Route exact path="/getApp" element={<GetApp />} />
        <Route exact path="/cookie" element={<Cookie />} />
        <Route exact path="/privacy" element={<Privacy />} />
        <Route exact path="/terms&conditions" element={<Terms />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/admin/login" element={<AdminLogin />} />
        <Route exact path="/admin/dashboard" element={<AdminDashboard />} />
        <Route exact path="/admin/services" element={<AdminService />} />
        <Route exact path="/admin/bookings" element={<AdminBookings />} />
        <Route
          exact
          path="/admin/user-management"
          element={<UserManagement />}
        />
        <Route
          exact
          path="/admin/code-management"
          element={<CodeManagement />}
        />
        <Route exact path="/admin/banners" element={<Banners />} />
      </Routes>
      <Footer />
      {/* <TempNav /> */}
      {/* <GetApp /> */}
      {/* <Carrer /> */}
      {/* <ContactUs /> */}
    </div>
  );
}

export default App;
