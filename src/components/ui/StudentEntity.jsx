import { Plus } from "lucide-react";
import editIcon from "../../assets/icon5.svg";
import AddButton from "./AddButton";

function StudentEntity() {
  return (
    <div className="pl-[14px]">
      <div className="flex justify-between  pr-[8px] pt-[9px]">
        <div className="">
          <h1 className="text-custom-gray text-[14px]">S NO.</h1>
          <h1 className="font-semibold">123454</h1>
        </div>
        <div className="">
          <h1 className="text-custom-gray text-[14px]">ADMISSION</h1>
          <h1 className="font-semibold">342343</h1>
        </div>
        <img src={editIcon} className="w-[16px] h-[16px]" alt="" />
      </div>
      <div className=" pr-[8px] pt-[18px]">
          <h1 className="text-custom-gray text-[14px]">ADMISSION DATE</h1>
          <h1 className="font-semibold">3/12/2022</h1>
        </div>
        <div className="h-[1px] bg-gray-200 ml-[13px] mt-[12px] mr-[11px]"></div>
        <h1 className="mt-[7px]  font-semibold">Alfa Dispatch</h1>
        <button className="text-white text-[13px] text-center bg-custom-black2  px-[8.6px] py-[4px] mt-[2px] rounded-2xl">DBA: Starx</button>
        <h1 className="mt-[7px]  font-semibold">Nankiana Road, Sangrur 148001</h1>
        <div className="">
            <h1 className="text-custom-gray text-[14px]  pt-[8px]">CONTACT</h1>
            <div className="pt-[4px] font-semibold gap-1 flex ">
            <span className="text-custom-blue underline">+91 (203) 432 5975</span>
            <span>• Ext 2</span>
            </div>
            <div className="pt-[4px] font-semibold gap-1 flex ">
            <span className="text-custom-blue underline">+91 (203) 432 5975</span>
            <span>• Fax</span>
            </div>
            <h1 className="text-custom-blue pt-[4px] underline">admin@outlook.com</h1>
            <AddButton name={"More"}/>
        </div>
    </div>
  );
}

export default StudentEntity;
