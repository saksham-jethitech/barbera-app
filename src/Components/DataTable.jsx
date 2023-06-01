import React, { useEffect } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/jquery.dataTables.css";
import "datatables.net-responsive/js/dataTables.responsive.min.js";
import "datatables.net-responsive-dt/css/responsive.dataTables.min.css";
import "../index.css";

const DataTable = ({ children }) => {
  useEffect(() => {
    $("#example")
      .DataTable({
        responsive: true,
      })
      .columns.adjust()
      .responsive.recalc();
  }, []);

  return (
    <div className="container w-full md:w-4/5 xl:w-[98%] mx-auto px-2">
      <div
        id="recipients"
        className="p-8 mt-6 lg:mt-0 rounded shadow bg-[#0c0b0b]"
      >
        <table
          id="example"
          className="stripe hover"
          style={{ width: "100%", paddingTop: "1em", paddingBottom: "1em" }}
        >
          {children}
        </table>
      </div>
    </div>
  );
};

export default DataTable;
