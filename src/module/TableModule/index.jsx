import React from "react";
import SimpleTable from "./SimpleTable/index.jsx";
import ModalTable from "./ModalTable/index.jsx";

const TableList = () => {
  return (
    <div>
      <div className="p-[1em] bg-[#fff] rounded-[12px] shadow ">
        <SimpleTable />
      </div>
      <div className="p-[1em] rounded-[12px] mt-[2rem]">
        <ModalTable />
      </div>
    </div>
  );
};

export default TableList;
