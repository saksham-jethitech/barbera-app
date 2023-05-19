import Carrer from "./Carrer";
import Navbar from "./Components/Navbar";
import TempNav from "./Components/TempNav";
import ContactUs from "./ContactUs";
import Cookie from "./Cookie";
import GetApp from "./GetApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Terms from "./Terms";
import Privacy from "./Privacy";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/career" element={<Carrer />} />
        <Route exact path="/getApp" element={<GetApp />} />
        <Route exact path="/cookie" element={<Cookie />} />
        <Route exact path="/privacy" element={<Privacy />} />
        <Route exact path="/terms&conditions" element={<Terms />} />
      </Routes>
      {/* <TempNav /> */}
      {/* <GetApp /> */}
      {/* <Carrer /> */}
      {/* <ContactUs /> */}
    </div>
  );
}

export default App;
