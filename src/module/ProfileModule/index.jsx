import React from "react";
import UserProfile from "./Userprofile";
import EditProfile from "./EditProfile";
import TeamMember from "./TeamMember";

const Profile = () => {
  return (
    <div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-[1rem] gap-y-[1rem]">
        <div>
          <div class="grid  grid-cols-1 gap-y-[0.625rem]">
            <div className="p-[1em] bg-[#fff] rounded-[12px] shadow">
              <UserProfile />
            </div>
            <div className="p-[1em] bg-[#fff] rounded-[12px] shadow">
              <TeamMember />
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <EditProfile />
        </div>
      </div>
    </div>
  );
};

export default Profile;
