import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "../AdminLogin";
import AdminDashboard from "../AdminDashboard";
import Sidebar from "../Components/Sidebar";
import Layout from "../Components/Layout";

const AdminPages = () => {
  return (
    <div className="App">
      {console.log("Apperared")}
      <Sidebar />
      <Layout>
        <Routes>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </Layout>
      {/* <TempNav /> */}
      {/* <GetApp /> */}
      {/* <Carrer /> */}
      {/* <ContactUs /> */}
    </div>
  );
};

export default AdminPages;
