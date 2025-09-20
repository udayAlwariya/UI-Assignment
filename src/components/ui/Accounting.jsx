import React from 'react'
import CustomButton from './CustomButton'
import downArrow from "../../assets/icon7.svg";

function Accounting() {
  return (
    <div>
      <h1 className="text-custom-gray text-[14px] pl-[14px] pt-[9px]">PAYMENT METHOD</h1>
      <div className="flex pl-[14px] gap-[21px]">
      <CustomButton name={"Factoring"} isActive={true}/>
      <CustomButton name={"Direct"} isActive={false}/>
      </div>
      <div className='pl-[14px] mr-[10px] mt-[28px]'>
        <h1 className='text-custom-gray'>Bank Name</h1>
        <div className='bg-custom-gray4 mt-[9px] flex justify-between py-[8px] pl-[16px] pr-[12px] rounded-lg'>
            <h1 className=''>Select</h1>
            <img src={downArrow} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Accounting
