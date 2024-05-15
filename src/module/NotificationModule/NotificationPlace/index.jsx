import React from "react";
import { data } from "./data";
const NotificationPlace = () => {
  return (
    <div className="flex justify-center text-center">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-x-[1.875rem] gap-y-[1.25rem] w-[60%]">
        {data?.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-[#34B5B8] rounded-[4px] text-[0.875rem] font-semibold font-bold text-[#fff] py-[0.625rem] px-[1.25rem] text-center"
            >
              {item?.key}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NotificationPlace;
