import React from "react";
import { data } from "./data";
const NotificationState = () => {
  return (
    <div>
      <div className="mt-[0.625] mb-[0.75rem] p-[1rem] text-[1.57em]">
        Notification states
      </div>
      <div class="grid grid-cols-1 gap-[1rem]">
        {data?.map((item, index) => {
          return (
            <div
              style={{ backgroundColor: item.color }}
              key={index}
              className={`bg-[${item.color}] p-[1rem] flex gap-[1rem] justify-between items-center text-[0.875rem] text-[#FDFDFD] rounded-[4px]`}
            >
              <div>
                <b>{item?.key}</b>
                &nbsp;
                {item.content}
              </div>
              <div>
                <svg
                  width="30"
                  height="30"
                  fill="#FDFDFD"
                  class="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NotificationState;
