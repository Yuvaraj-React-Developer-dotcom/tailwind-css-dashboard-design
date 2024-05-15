import React from "react";

const Card = ({ item }) => {
  return (
    <div className="bg-[#fff] p-[1em] rounded-[12px] shadow">
      <div className="flex justify-between ">
        <div className="w-[25%] flex justify-center items-center">
          <div>{item?.icon}</div>
        </div>
        <div>
          <div className="text-[#9a9a] text-end text-[16px]">
            {item?.caption}
          </div>
          <div className="text-end text-[2em]">150GB </div>
        </div>
      </div>
      <div className="border-b-[1px] border-[#ddd] mb-[1em] mt-[0.625em]"></div>
      <div className="flex items-center">
        <div className="mr-[0.375em]">
          <svg
            width="16"
            height="16"
            fill="#66615b"
            class="bi bi-calendar-check"
            viewBox="0 0 16 16"
          >
            <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0" />
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
          </svg>
        </div>
        <div className="text-[#9a9a] text-[14px]">Update Now</div>
      </div>
    </div>
  );
};

export default Card;
