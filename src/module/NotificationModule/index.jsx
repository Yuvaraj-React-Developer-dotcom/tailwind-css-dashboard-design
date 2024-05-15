import React from "react";
import NotificationState from "./NotificationState";
import NotificationStyle from "./NotificationStyle";
import NotificationPlace from "./NotificationPlace";
const Notification = () => {
  return (
    <div>
      <div className="grid grid-cols-1 mb-[20px] p-[1em] bg-[#fff] rounded-[12px] shadow">
        <div>
          <div className="mt-[0.625] mb-[0.75rem] text-[1.57em]">
            Notifications
          </div>
          <div className="mb-[1rem] text-[#9a9a9a] text-[1em]">
            Handcrafted By Our Friend &nbsp;
            <span className="text-[#51CBD6]">Robert McIntosh</span> . Please
            Checkout The &nbsp;
            <span className="text-[#51CBD6]">Full Documentation.</span>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-[1.875rem]">
          <NotificationStyle />
          <NotificationState />
        </div>
      </div>
      <div class="grid grid-cols-1 mb-[20px] p-[1em] bg-[#fff] rounded-[12px] shadow">
        <div className="mt-[1.875rem] text-[1.57em] text-center">
          Notifications Places
        </div>
        <div className="mt-[0.625rem] mb-[2rem]  text-[#9a9a9a] text-center">
          Click To View Notifications
        </div>
        <NotificationPlace />
      </div>
    </div>
  );
};

export default Notification;
