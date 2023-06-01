import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Layout from "./Components/Layout";
// import DataTable from "react-data-table-component";
import DataTable from "./Components/DataTable";
import "./index.css";
import CodeManagementTable from "./Components/CodeManagament/CodeManagementTable";
import CodeManagementForm from "./Components/CodeManagament/CodeManagementForm";
import EmployeeManagementTable from "./Components/UserManagement/EmployeeManagementTable";
import CustomerManagementTable from "./Components/UserManagement/CustomerManagementTable";

const tempData = [
  {
    name: "Avengers Black Widow",
    inventory: [
      { inventory: "Hair Cutting Kit", amount: 10 },
      { inventory: "Hair Colour Kit", amount: 10 },
    ],
    mobileNumber: "9347190920",
    active: true,
  },
  {
    name: "Moonlight",
    inventory: [{ inventory: "Hair Cutting Kit", amount: 10 }],
    mobileNumber: "9347190920",
    active: true,
  },
  {
    name: "Moonlight",
    inventory: [{ inventory: "Hair Cutting Kit", amount: 10 }],
    mobileNumber: "9347190920",
    active: true,
  },
  {
    name: "Grimsby",
    inventory: [{ inventory: "Hair Cutting Kit", amount: 10 }],
    mobileNumber: "9347190920",
    active: true,
  },
  {
    name: "Grimsby",
    inventory: [{ inventory: "Beard Kit", amount: 10 }],
    mobileNumber: "9347190920",
    active: true,
  },
  {
    name: "SpiderMan No Way Home",
    inventory: [{ inventory: "Hair Cutting Kit", amount: 10 }],
    mobileNumber: "9347190920",
    active: true,
  },
];

const tempData2 = [
  {
    name: "Avengers Black Widow",
    address: "B-31, Galaxy CHS, Bandra, Mumbai - 400009",
    mobileNumber: "9347190920",
  },
  {
    name: "Moonlight",
    address: "B-31, Galaxy CHS, Bandra, Mumbai - 400009",

    mobileNumber: "9347190920",
  },
  {
    name: "Moonlight",
    address: "B-31, Galaxy CHS, Bandra, Mumbai - 400009",
    mobileNumber: "9347190920",
  },
  {
    name: "Grimsby",
    address: "B-31, Galaxy CHS, Bandra, Mumbai - 400009",
    mobileNumber: "9347190920",
  },
  {
    name: "Grimsby",
    address: "B-31, Galaxy CHS, Bandra, Mumbai - 400009",
    mobileNumber: "9347190920",
  },
  {
    name: "SpiderMan No Way Home",
    address: "B-31, Galaxy CHS, Bandra, Mumbai - 400009",
    mobileNumber: "9347190920",
  },
];

const UserManagement = () => {
  const [employeeData, setEmployeeData] = useState(tempData);
  const [customerData, setCustomerData] = useState(tempData2);
  const [isEmployeeManagement, setIsEmployeeManagement] = useState(true);
  const [addEmployee, setAddEmployee] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [editData, setEditData] = useState({});

  return (
    <>
      <div className=" h-screen flex">
        <Sidebar />
        <Layout>
          <div className="flex flex-col space-y-6">
            {!addEmployee && !editForm && (
              <div className="flex justify-between items-center">
                <div className="flex text-[#FBB033] items-center font-be-jost-pro text-xl font-bold space-x-3 pt-8 pl-5">
                  <p
                    className={`${
                      isEmployeeManagement
                        ? "bg-white text-[#00395E]"
                        : "text-[#FBB034]"
                    }  hover:bg-white hover:text-[#00395E] rounded-sm cursor-pointer text-base px-2 py-1 font-semibold font-be-jost-pro text-center md:text-left`}
                    onClick={() => setIsEmployeeManagement(true)}
                  >
                    Employee Management
                  </p>
                  <p
                    className={`${
                      !isEmployeeManagement
                        ? "bg-white text-[#00395E]"
                        : "text-[#FBB034]"
                    }    hover:bg-white hover:text-[#00395E] rounded-sm cursor-pointer text-base px-2 py-1 font-semibold font-be-jost-pro text-center md:text-left`}
                    onClick={() => setIsEmployeeManagement(false)}
                  >
                    Customer Management
                  </p>
                </div>
                {isEmployeeManagement && (
                  <div>
                    <button
                      className="font-be-jost-pro font-medium text-sm border border-[#FBB033] text-[#FBB033] rounded-md px-5 py-2"
                      onClick={() => setAddEmployee(true)}
                    >
                      Add Employee
                    </button>
                  </div>
                )}
              </div>
            )}

            {isEmployeeManagement ? (
              <EmployeeManagementTable
                data={employeeData}
                addEmployee={addEmployee}
                setAddEmployee={setAddEmployee}
                editForm={editForm}
                setEditForm={setEditForm}
                editData={editData}
                setEditData={setEditData}
              />
            ) : (
              <CustomerManagementTable data={customerData} />
            )}
          </div>
        </Layout>
      </div>
    </>
  );
};

export default UserManagement;
