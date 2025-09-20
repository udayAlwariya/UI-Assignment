import React from "react";
import editIcon from "../../assets/icon5.svg";
function OnBoard() {
  return (
    <div className="pl-[14px]">
      <div>
        <div className=" pt-[9px] flex justify-between pr-[5px]">
          <h1 className="text-custom-gray text-[14px]">Manager</h1>
          <img src={editIcon} className="w-[16px] h-[16px]" alt="" />
        </div>
        <h1 className="mt-[8px] font-semibold">Navjot Kaur</h1>
        <div className="flex font-semibold gap-4 mt-[5px]">
          <h1>07/01/2024</h1>
          <h1>11:38 AM</h1>
        </div>
      </div>
      <div className="mt-[19px]">
        <h1 className="font-semibold">Cordinator</h1>
        <h1>Harwin</h1>
      </div>
      <div className="mt-[69px]">
        <h1 className="text-custom-gray text-[14px]">SPECIAL INSTRUCTIONS</h1>
        <h1 className="pt-[8px] mt-[1px] text-custom-gray pl-[16px] rounded-lg pb-[102px] mr-[19px] bg-custom-gray4">
          Enter
        </h1>
      </div>
    </div>
  );
}

export default OnBoard;
