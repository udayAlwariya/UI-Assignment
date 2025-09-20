import { Headset, Settings } from "lucide-react";
import icon1 from "../assets/icon.svg";
import userIcon from "../assets/icon2.svg";
import arrowIcon from "../assets/icon3.svg";
import settingIcon from "../assets/icon22.svg";
import headsetIcon from "../assets/icon23.svg";
import { items } from "../utils/sidebarData";

export default function Sidebar() {
  return (
    <div className="bg-custom-black z-1 fixed top-0 left-0 h-screen  overflow-scroll text-custom-gray w-[220px]">
      <div className="flex items-center mt-[16px] mx-[16px] justify-between">
        <h1 className="text-[22px] text-white font-semibold">Sales</h1>
        <img src={icon1} alt="Sales Icon" />
      </div>

      <div className="mt-[34px] px-[16px] flex flex-col gap-[8px]">
        {items.map(({ label, icon , active }) => (
          <div
            key={label}
            className={`flex pl-[8px] text-[15px] font-medium items-center gap-4 ${
              active && "bg-custom-orange text-white rounded-xl"
            }`}
          >
            <img src={icon} className="w-[24px] h-[24px]" alt="" />
            <span className="py-[8px]">{label}</span>
          </div>
        ))}
      </div>

      <div className="bg-custom-gray2 h-[8px] mt-[16px]" ></div>
      <div className=" mt-[48px] flex flex-col gap-2">
        <div className="flex items-center py-[8px] mx-[16px] gap-[8px] pl-[8px]">
          <img src={settingIcon} alt="" />
          <h1 className="text-sm">Settings</h1>
        </div>
        <div className="flex items-center py-[8px] mx-[16px] gap-[8px] pl-[8px]">
          <img src={headsetIcon} alt="" />
          <h1 className="text-sm">Live support</h1>
        </div>
      </div>
      <div className="bg-custom-gray2 h-[1px] mt-[11px]" ></div>
      <div className="mx-[16px] mt-[16px] pt-[16px] pb-[20px] text-sm flex items-center gap-[8px]">
        <img src={userIcon} alt="" />
        <h1 className="text-white">Sample Singh</h1>
        <img src={arrowIcon} alt="" />
      </div>
    </div>
  );
}
