import React from "react";

const SideBarHeader = () => {
  return (
    <div className="border-b-[1px] border-[#ddd] py-[0.625rem] mx-[0.7rem] flex items-center">
      <div className="w-[28px] h-[30px] mx-[0.75rem]">
        <img
          src="https://angular.io/assets/images/logos/angular/shield-large.svg"
          alt="logo"
        ></img>
      </div>
      <div className="text-[#66615b] text-xl py-[0.375rem]">Creative Tim</div>
    </div>
  );
};

export default SideBarHeader;
