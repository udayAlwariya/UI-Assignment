import React from 'react'
import leftArrow from "../../assets/icon10.svg";
import rightArrow from "../../assets/icon11.svg";

function  TableFooter() {
  return (
    <div className='flex text-[13px] bg-white justify-between'>
      <h1 className='pl-[22px] font-semibold py-[8px]'>Showing 1 to 5 of 10</h1>
      <div className='flex pt-[11px] gap-[20px]  pr-[24px] pb-[8px] items-center'>
      <img src={leftArrow} alt="" />
      <h1 className='text-custom-blue font-bold'>1</h1>
      <h1 className='font-semibold'>2</h1>
      <img src={rightArrow} alt="" />
      </div>
    </div>
  )
}

export default TableFooter
