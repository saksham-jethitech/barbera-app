import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Layout from "./Components/Layout";
// import DataTable from "react-data-table-component";
import DataTable from "./Components/DataTable";
import "./index.css";
import CodeManagementTable from "./Components/CodeManagament/CodeManagementTable";
import CodeManagementForm from "./Components/CodeManagament/CodeManagementForm";

const tempData = [
  {
    name: "New User",
    type: "New User",
    off: "20",
    promoCode: "new001",
  },
  {
    name: "HDFC Card",
    type: "Credit Card",
    off: "10",
    promoCode: "Barbera001",
  },
  {
    name: "Discount 50",
    type: "Discount",
    off: "25",
    promoCode: "Discount25",
  },
  {
    name: "Discount 50",
    type: "Discount",
    off: "25",
    promoCode: "Discount25",
  },
  {
    name: "Discount 50",
    type: "Discount",
    off: "25",
    promoCode: "Discount25",
  },
  {
    name: "Discount 50",
    type: "Discount",
    off: "25",
    promoCode: "Discount25",
  },
];

const CodeManagement = () => {
  const [data, setData] = useState(tempData);
  const [openEditForm, setEditForm] = useState(false);
  const [editData, setEditData] = useState({});

  return (
    <>
      <div className=" h-screen flex">
        <Sidebar />
        <Layout>
          {openEditForm ? (
            <CodeManagementForm
              setEditCodeManagementForm={setEditForm}
              editData={editData}
            />
          ) : (
            <CodeManagementTable
              data={data}
              setEditForm={setEditForm}
              setEditData={setEditData}
            />
          )}
        </Layout>
      </div>
    </>
  );
};

export default CodeManagement;
