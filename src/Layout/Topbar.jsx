import boxIcon from "../assets/icon4.svg"
function Topbar() {
  return (
    <div className="w-full bg-white items-center h-fit pl-[16px] py-[24px] flex ">
      <img src={boxIcon} className="w-[24px] mr-[16px] h-[24px]" alt="Box Icon" />
      <div className="text-[18px] flex gap-1 font-medium">
        <h1 className="text-custom-blue underline">Office</h1>
        <h1 className="text-custom-gray">&gt;</h1>
        <h1 className="text-custom-gray">Candidate Detail</h1>
      </div>
    </div>
  )
}

export default Topbar
