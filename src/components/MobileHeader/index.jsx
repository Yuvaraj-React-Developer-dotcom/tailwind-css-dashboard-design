import React from "react";
import { useLocation } from "react-router-dom";

const MobileHeader = ({ handlesetWindowSize, windowSize }) => {
  const location = useLocation();

  console.log(location.pathname, "find pathname");
  const findpath = location.pathname;
  let pathCaption;
  switch (findpath) {
    case "/map":
      pathCaption = "MAP";
      break;
    case "/notification":
      pathCaption = "NOTIFICATION";
      break;
    case "/userprofile":
      pathCaption = "PROFILE";
      break;
    case "/map":
      pathCaption = "MAP";
      break;
    case "/tablelist":
      pathCaption = "TABLE";
      break;
    case "/typography":
      pathCaption = "TYPOGRAPHY";
      break;
    case "/upgrade":
      pathCaption = "UPGRADE TO PRO";
      break;
    default:
      pathCaption = "DASHBOARD";
  }
  return (
    <div className="border-b-[1px] border-[#ddd] py-[15px] px-[1.875em] flex justify-between items-center">
      <div className="text-[#66615b] text-xl flex items-center">
        <div onClick={handlesetWindowSize} className="pr-[0.75rem]">
          {windowSize < 769 ? (
            <div>
              <svg
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </div>
          ) : (
            <div>
              <svg
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            </div>
          )}
        </div>
        {pathCaption}
      </div>
    </div>
  );
};

export default MobileHeader;
