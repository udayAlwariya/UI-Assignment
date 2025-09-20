import React from "react";
import editIcon from "../../assets/icon5.svg";
import CustomButton from "./CustomButton";
import { Plus } from "lucide-react";
import AddButton from "./AddButton";

function Information() {
  return (
    <div className="pl-[14px]">
      <div className=" pt-[9px] flex justify-between pr-[5px]">
        <h1 className="text-custom-gray text-[14px]">MANAGER NAME</h1>
        <img src={editIcon} className="w-[16px] h-[16px]" alt="" />
      </div>
      <div className="font-semibold pt-[5px]">
        <h1 className="">Harry Singh •</h1>
        <h1 className="text-custom-blue underline">+91 (203) 432 5975</h1>
        <h1 className="text-custom-blue underline pt-[3px]">
          admin@outlook.com
        </h1>
      </div>
      <h1 className="text-custom-gray text-[14px] pt-[26px]">DISPATCHER</h1>
      <div className="pt-[4px] font-semibold gap-1 flex">
        <span>Harry •</span>
        <span className="text-custom-blue underline">+91 (535) 647 2159</span>
      </div>
      <AddButton name={"More"}/>
      <h1 className="text-custom-gray text-[14px] pt-[114px]">OFFICE COMPLIANCE REQUIRED</h1>
      <div className="flex gap-[8px]">
      <CustomButton name={"Yes"} isActive={true}/>
      <CustomButton name={"No"} isActive={false}/>
      </div>
    </div>
  );
}

export default Information;
