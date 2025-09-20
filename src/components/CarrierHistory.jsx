import React from "react";
import DataTable from "./ui/DataTable";
import LogNotes from "./ui/LogNotes";
import { rows } from "../utils/carrierHistoryData";

function CarrierHistory() {
  return (
    <div>
      <div className=" pl-[16px] bg-white pt-[16px] pb-[8px] mr-[16px] rounded-tl-2xl rounded-tr-2xl">
        <h1 className="font-semibold">Load Details</h1>
      </div>
      <DataTable rows={rows} name={"carrier"} />
      <LogNotes/>
    </div>
  );
}

export default CarrierHistory;
