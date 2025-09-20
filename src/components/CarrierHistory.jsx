import React from "react";
import DataTable from "./ui/DataTable";
import LogNotes from "./ui/LogNotes";
import { rows } from "../utils/carrierHistoryData";

function CarrierHistory() {
  return (
    <div>
      <div className=" pl-[16px] bg-white pt-[16px] pb-[8px] mr-[16px] rounded-tl-2xl rounded-tr-2xl">
        <div className="flex justify-between">
          <h1 className="font-semibold">Load Details</h1>
          <div className="flex text-[13px] gap-[16px] pr-[14px]">
            <div>
            <span>On Time:</span>
            <span className="font-semibold">5</span>
          </div>
          <div>
            <span>Canceled:</span>
            <span className="font-semibold">2</span>
          </div>
          <div>
            <span>Total Revenue:</span>
            <span className="font-semibold">$5,65,222.50</span>
          </div>
          </div>
          
        </div>
      </div>
      <DataTable rows={rows} name={"carrier"} />
      <LogNotes />
    </div>
  );
}

export default CarrierHistory;
