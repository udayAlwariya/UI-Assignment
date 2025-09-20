import React from "react";
import icon24 from "../../assets/icon24.svg";
import icon25 from "../../assets/icon25.svg";


function DocumentCard({...props}) {
    const {id,title,expiredDate,setupDate} = props;
  return <div className="">
    <div className="flex justify-between">
    <h1 className={` ${id!==1 ? "text-custom-green5" : "text-custom-red2"} text-[15px] font-bold`}>{title}</h1>
    <img src={icon24} alt="" />
    </div>
    <div className="flex pt-[17px] items-end ">
        <img src={icon25} className="w-[22px]" alt="" />
        {id!==2 && <>
        <h1 className="text-[11px] ml-[15px]">Setup {setupDate} </h1>
        <h1 className={`${id==1 && "text-custom-red2"} ml-[30px] text-[11px]`}>Expired {expiredDate} </h1>
        </>}
        
    </div>
    <div className="h-[1px] mt-[11px] bg-gray-200 mr-[10px]"></div>
  </div>;
}

export default DocumentCard;
