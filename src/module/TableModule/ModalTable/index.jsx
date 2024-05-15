import React from "react";
import { data } from "../SimpleTable/data";
const ModalTable = () => {
  return (
    <div>
      <div className="mt-[0.625] mb-[0.75rem] text-[1.57em]">Table on Plain Background</div>
      <div className="text-[0.875rem] text-[#9a9a9a] mb-[1rem]">Here Is A Subtitle For This Table</div>
      <div className="overflow-scroll">
        <table className="w-[100%]">
          <tr className="border-b-[2px] border-t-[1px] border-[#ddd]">
            <th className="text-left p-[0.75rem] text-[#51cbce]">Name</th>
            <th className="text-left p-[0.75rem] text-[#51cbce]">Country</th>
            <th className="text-left p-[0.75rem] text-[#51cbce]">City</th>
            <th className="text-right p-[0.75rem] text-[#51cbce]">Salary</th>
          </tr>

          {data?.map((item, index) => (
            <tr className="border-t-[1px] border-[#ddd]">
              <td className="text-left py-[0.75rem] px-[0.375rem] text-[0.875rem]">
                {item?.username} &nbsp;
                {index}
              </td>
              <td className="text-left py-[0.75rem] px-[0.375rem] text-[0.875rem]">
                {item?.country}
              </td>
              <td className="text-left py-[0.75rem] px-[0.375rem] text-[0.875rem]">
                {item?.city}
              </td>
              <td className="text-right py-[0.75rem] px-[0.375rem] text-[0.875rem]">
                {item?.salary}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ModalTable;
