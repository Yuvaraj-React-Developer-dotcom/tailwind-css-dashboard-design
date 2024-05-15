import React from "react";

const UserProfile = () => {
  return (
    <div>
      <div className="relative">
        <div className="h-[130px] m-[-1rem]  flex overflow-hidden">
          <img
            className="w-[100%] rounded-t-[12px]"
            src="https://demos.creative-tim.com/paper-dashboard-angular/assets/img/damir-bosnjak.jpg"
            alt="bg"
          />
        </div>
        <div className="flex justify-center">
          <div className="profile-image absolute rounded-[50%] overflow-hidden w-[100px] h-[100px]">
            <img
              className="w-[100%]"
              src="https://demos.creative-tim.com/paper-dashboard-angular/assets/img/mike.jpg"
              alt="bg"
            />
          </div>
        </div>
      </div>
      <div className="mt-[20%] ">
        <div className="text-center font-bold text-[#51CBCE] text-[1.57rem] mb-[1rem]">
          User Name
        </div>
        <div className="text-center mb-[1rem] text-[1.14rem] text-[#9a9a9a]">
          @chetfaker
        </div>
        <div className="text-center mb-[1rem] text-[1.14rem] text-[#9a9a9a] flex justify-center">
          <div className="w-[60%]">
            "I like the way you work it No diggity I wanna bag it up"
          </div>
        </div>
      </div>
      <div className="mx-[1rem]">
        <div className="border-b-[1px] border-[#ddd] mb-[1rem] mt-[0.5rem]"></div>
        <div className="flex justify-between">
          <div className="text-center text-[1rem]">
            12 <br></br>Files
          </div>
          <div className="text-center text-[1rem]">
            2gb <br></br>Used
          </div>
          <div className="text-center text-[1rem]">
            24,6$ <br></br>Spent
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
