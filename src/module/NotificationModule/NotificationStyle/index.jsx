import React from "react";

const NotificationStyle = () => {
  return (
    <div>
      <div className="mt-[0.625] mb-[0.75rem] p-[1rem] text-[1.57em]">
        Notifications style
      </div>
      <div class="grid grid-cols-1 gap-[1rem]">
        <div className="bg-[#66C4DE] rounded-[4px] p-[1rem] text-[0.875rem] text-[#FDFDFD]">
          This is a plain notification
        </div>
        <div className="bg-[#66C4DE] rounded-[4px] p-[1rem] flex gap-[1rem] justify-between items-center">
          <div className="text-[0.875rem] text-[#FDFDFD]">
            This is a notification with close button
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
        <div className="bg-[#66C4DE] rounded-[4px] p-[1rem] flex gap-[1rem] justify-between items-center">
          <div className="flex items-center">
            <div className="pr-[1rem]">
              <svg
                width="24"
                height="24"
                fill="#FDFDFD"
                class="bi bi-bell"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
              </svg>
            </div>
            <div className="text-[0.875rem] text-[#FDFDFD]">
              This is a notification with close button and icon.
            </div>
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
        <div className="bg-[#66C4DE] rounded-[4px] p-[1rem] flex gap-[1rem] justify-between items-center">
          <div>
            <svg
              width="24"
              height="24"
              fill="#FDFDFD"
              class="bi bi-bell"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
            </svg>
          </div>
          <div className="text-[0.875rem] text-[#FDFDFD]">
            This is a notification with close button and icon and have many
            lines. You can see that the icon and the close button are always
            vertically aligned. This is a beautiful notification. So you don't
            have to worry about the style.
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
      </div>
    </div>
  );
};

export default NotificationStyle;
