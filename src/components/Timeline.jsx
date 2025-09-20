import { Plus } from "lucide-react";
import React from "react";
import AddButton from "./ui/AddButton";

export default function Timeline({ number, title, children }) {
  return (
    <div className="grid mt-[16px] ml-[8px] grid-cols-[28px_1fr] gap-3">
      <div className="relative">
        <div className="absolute left-[14px] top-0 bottom-[-16px] -translate-x-1/2 w-[8px] bg-custom-gray3" />
        <div className="relative w-7 h-7 rounded-full text-white bg-custom-green2 text-[14px] grid place-items-center font-medium">
          {number}
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center -mt-1 justify-between">
          <div className="flex text-[20px] items-center gap-1">
            {number == 1 ? (
              <>
                <span className="font-bold">{title.split(" ")[0]}</span>
                <span className="font-bold text-custom-blue">
                  {title.split(" ")[1]}
                </span>
                <span className="font-bold text-custom-blue">
                  {title.split(" ")[2]}
                </span>
              </>
            ) : (
              <h1 className="font-bold">{title}</h1>
            )}
          </div>
          {number === 1 && (
            <button className="text-[13px] mr-[16px] px-[32px] py-[8px] bg-custom-green3 text-white font-semibold rounded-xl">
              Active
            </button>
          )}
          {number === 3 && (
            <div className="mr-[40px] ml-[4px] mt-[4px]">
              <AddButton name={"Fleet"} />
            </div>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}
