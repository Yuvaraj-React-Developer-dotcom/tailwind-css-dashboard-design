import React from "react";

const EditProfile = () => {
  return (
    <div className="p-[1em] bg-[#fff]  rounded-[12px] shadow ">
      <div className="mt-[0.625] mb-[0.75rem] text-[1.57em]">Edit Profile</div>
      <div class="grid grid-cols-3 gap-[0.5rem]">
        <div>
          <label className="text-[0.75rem] text-[#9A9A9A] mb-[4px]">
            Company (disabled)
          </label>
          <input
            value={"corporation"}
            type="text"
            className="p-[0.625rem] border-[1px] border-[#ddd] rounded-[4px] w-[100%] bg-[#e3e3e3]"
          ></input>
        </div>
        <div>
          <label className="text-[0.75rem] text-[#9A9A9A] mb-[4px]">
            Username
          </label>
          <input
            value={"User123"}
            type="text"
            className="p-[0.625rem] border-[1px] border-[#ddd] rounded-[4px] w-[100%]"
          ></input>
        </div>
        <div>
          <label className="text-[0.75rem] text-[#9A9A9A] mb-[4px]">
            Email address
          </label>
          <input
            value={"email"}
            type="text"
            className="p-[0.625rem] border-[1px] border-[#ddd] rounded-[4px] w-[100%]"
          ></input>
        </div>
        <div className="grid grid-cols-2 col-span-3 gap-[0.5rem]">
        <div className="">
          <label className="text-[0.75rem] text-[#9A9A9A] mb-[4px]">
            First Name
          </label>
          <input
            value={"First Name"}
            type="text"
            className="p-[0.625rem] border-[1px] border-[#ddd] rounded-[4px] w-[100%]"
          ></input>
        </div>
        <div className="">
          <label className="text-[0.75rem] text-[#9A9A9A] mb-[4px]">
            Last Name
          </label>
          <input
            value={"Last Name"}
            type="text"
            className="p-[0.625rem] border-[1px] border-[#ddd] rounded-[4px] w-[100%]"
          ></input>
        </div>
        </div>
        <div className="col-span-3">
          <div>
            <label className="text-[0.75rem] text-[#9A9A9A] mb-[4px]">
              Adrdress
            </label>
          </div>

          <input
            value={"Adrdress"}
            type="text"
            className="p-[0.625rem] border-[1px] border-[#ddd] rounded-[4px] w-[100%]"
          ></input>
        </div>
        <div>
          <label className="text-[0.75rem] text-[#9A9A9A] mb-[4px]">City</label>
          <input
            value={"City"}
            type="text"
            className="p-[0.625rem] border-[1px] border-[#ddd] rounded-[4px] w-[100%]"
          ></input>
        </div>
        <div>
          <label className="text-[0.75rem] text-[#9A9A9A] mb-[4px]">
            Country
          </label>
          <input
            value={"Country"}
            type="text"
            className="p-[0.625rem] border-[1px] border-[#ddd] rounded-[4px] w-[100%]"
          ></input>
        </div>
        <div>
          <label className="text-[0.75rem] text-[#9A9A9A] mb-[4px]">
            Postal Code
          </label>
          <input
            // value={"Postal Code"}
            placeholder="Postal Code"
            type="number"
            className="p-[0.625rem] border-[1px] border-[#ddd] rounded-[4px] w-[100%]"
          ></input>
        </div>
        <div className="col-span-3">
          <div>
            <label className="text-[0.75rem] text-[#9A9A9A] mb-[4px]">
              About Me
            </label>
          </div>

          <textarea
            value={
              "Oh so, your weak rhyme You doubt I'll bother, reading into it"
            }
            type="text"
            className="p-[0.625rem] border-[1px] border-[#ddd] rounded-[4px] w-[100%]"
          ></textarea>
        </div>
        <div className="col-span-3 text-center my-[0.625rem]">
          <button className="bg-[#51CBCE] rounded-[30px] py-[0.75rem] px-[1.5rem] font-bold text-[#fff] ">
            UPDATE PROFILE
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
