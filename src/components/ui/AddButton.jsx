import { Plus } from "lucide-react";
import React from "react";

function AddButton({name}) {
  return (
    <div className="flex items-center text-[14px] text-custom-orange gap-[8px] pt-[4px] font-semibold">
      <Plus className="" />
      <h1>Add {name}</h1>
    </div>
  );
}

export default AddButton;
