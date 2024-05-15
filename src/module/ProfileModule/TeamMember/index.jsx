import React from "react";
import { data } from "./data";
const TeamMember = () => {
  return (
    <div>
      <div className="mt-[0.625] mb-[0.75rem] text-[1.57em]">Team Members</div>
      <div class="grid grid-cols-1 gap-y-[0.5rem]">
        {data?.map((item, index) => (
          <div className="flex justify-between">
            <div className="flex">
              <div className="rounded-[50%] flex overflow-hidden h-[24px] w-[24px] items-center">
                <img
                  className="w-[100%] h-[100%] "
                  src={item?.url}
                  alt="profile"
                ></img>
              </div>
              <div className="pl-[1rem]">
                <div className="text-[0.875rem]">{item?.username}</div>
                <div className={`text-[0.875rem] text-[${item?.color}]`}>
                  {item?.status}
                </div>
              </div>
            </div>
            <div
              key={index}
              className="rounded-[50%] border-[2px] border-[#6bd098] px-[.875rem] py-[0.5rem] flex items-center"
            >
              <svg
                width="16"
                height="16"
                fill="#6bd098"
                class="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
