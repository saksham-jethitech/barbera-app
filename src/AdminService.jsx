import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Layout from "./Components/Layout";
// import DataTable from "react-data-table-component";
import DataTable from "./Components/DataTable";
import "./index.css";
import ServiceTable from "./Components/AdminServiceComponent/ServiceTable";
import ServiceForm from "./Components/AdminServiceComponent/ServiceForm";

const tempData = [
  {
    serviceName: "Hair Cut",
    category: "men",
    subCategory: "hair",
    price: 200,
    image: "img",
    inventory: [
      { item: "Hair Cutting kit", amount: 10 },
      { item: "Hair Colour kit", amount: 10 },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cupiditate saepe distinctio qui.",
  },
  {
    serviceName: "Hair Colouring",
    category: "hairs",
    subCategory: "hair",
    price: 400,
    image: "img",
    inventory: [{ item: "Hair Cutting kit", amount: 10 }],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cupiditate saepe distinctio qui.",
  },
  {
    serviceName: "Beard Styling",
    category: "Men",
    subCategory: "beard",
    price: 200,
    image: "img",
    inventory: [{ item: "Hair Cutting kit", amount: 10 }],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cupiditate saepe distinctio qui.",
  },
  {
    serviceName: "Hair Styling",
    category: "women",
    subCategory: "beard",
    price: 350,
    image: "img",
    inventory: [{ item: "Hair Cutting kit", amount: 10 }],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cupiditate saepe distinctio qui.",
  },
  {
    serviceName: "Beauty Spa",
    category: "women",
    subCategory: "spa",
    price: 400,
    image: "img",
    inventory: [{ item: "Hair Cutting kit", amount: 10 }],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cupiditate saepe distinctio qui.",
  },
  {
    serviceName: "Nails",
    category: "hairs",
    subCategory: "nails",
    price: 250,
    image: "img",
    inventory: [{ item: "Hair Cutting kit", amount: 10 }],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cupiditate saepe distinctio qui.",
  },
];

const AdminService = () => {
  const [data, setData] = useState(tempData);
  const [openServiceForm, setOpenServiceForm] = useState(false);

  // const columns = [
  //   {
  //     name: "Service Name",
  //     selector: (row) => row.serviceName,
  //     sortable: true,
  //     width: "12%",
  //     wrap: true,
  //   },
  //   {
  //     name: "Category",
  //     // selector: (row) => row.category,
  //     cell: (row) => (
  //       <div className="bg-[#FBB033] rounded-2xl px-3 py-1">
  //         <p className="uppercase text-xs font-medium text-black ">{`${row.category}`}</p>
  //       </div>
  //     ),
  //     width: "8%",
  //   },
  //   {
  //     name: "Sub-Category",
  //     cell: (row) => (
  //       <div className="bg-[#FBB033] rounded-2xl px-3 py-1">
  //         <p className="uppercase text-xs font-medium text-black ">{`${row.subCategory}`}</p>
  //       </div>
  //     ),
  //     width: "11%",
  //   },
  //   {
  //     name: "Price",
  //     selector: (row) => {
  //       return `₹ ${row.price}`;
  //     },
  //     sortable: true,
  //     width: "8%",
  //   },
  //   {
  //     name: "Add Image",
  //     selector: (row) => row.image,
  //     width: "9%",
  //     // style: {
  //     //   whiteSpace: "unset",
  //     // },
  //   },
  //   {
  //     name: "Inventory",
  //     cell: (row) => (
  //       <div className="flex flex-col space-y-1 justify-center">
  //         {row.inventory.map((product) => (
  //           <p>{`${product.item}`}</p>
  //         ))}
  //       </div>
  //     ),
  //   },
  //   {
  //     name: "Amount",
  //     cell: (row) => (
  //       <div className="flex flex-col space-y-2 justify-center">
  //         {row.inventory.map((product) => (
  //           <p>{`x${product.amount}`}</p>
  //         ))}
  //       </div>
  //     ),
  //     width: "8%",
  //   },
  //   {
  //     name: "Description",
  //     selector: (row) => row.description,
  //     wrap: true,
  //     width: "18%",
  //   },
  //   {
  //     name: "Actions",
  //     selector: (row) => (
  //       <div className="flex space-x-2">
  //         <button className="rounded-md bg-white py-2 px-3 text-black text-sm font-medium">
  //           Edit
  //         </button>
  //         <button className="rounded-md bg-white py-2 px-3 text-black text-sm font-medium">
  //           Delete
  //         </button>
  //       </div>
  //     ),
  //   },
  // ];

  return (
    <>
      <div className=" h-screen flex">
        <Sidebar />
        <Layout>
          {openServiceForm ? (
            <ServiceForm setOpenServiceForm={setOpenServiceForm} />
          ) : (
            <ServiceTable data={data} setOpenServiceForm={setOpenServiceForm} />
          )}
        </Layout>
      </div>
    </>
  );
};

export default AdminService;
