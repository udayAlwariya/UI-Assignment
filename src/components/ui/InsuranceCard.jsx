import editIcon from "../../assets/icon5.svg";

const colorMap = {
  1: {
    card: "bg-custom-purple",
    tag: "bg-custom-blue3",
    bottom: "border-t-custom-blue4",
  },
  2: {
    card: "bg-custom-lightorange",
    tag: "bg-custom-orange",
    bottom: "border-t-custom-orange2",
  },
  3: {
    card: "bg-custom-skyblue",
    tag: "bg-custom-skyblue2",
    bottom: "border-t-custom-skyblue3",
  },
  4: {
    card: "bg-custom-lightgreen",
    tag: "bg-custom-green",
    bottom: "border-t-custom-green4",
  },
};

export default function InsuranceCard(props) {
  const { id, tagTitle } = props;
  const colors = colorMap[id] || {};
    
  return (
    <div className={`${colors.card} relative rounded-lg`}>
      <div className="top-[-4px] absolute">
        <div
          className={`text-[10px] font-semibold ${colors.tag} py-[3px] rounded-tl-lg rounded-br-lg text-white pl-[9px] pr-[40px]`}
        >
          {tagTitle}
        </div>
        <div
          className={`w-0 h-0 border-r-[5px] border-t-[8px] border-r-transparent ${colors.bottom}`}
        ></div>
      </div>

      <img src={editIcon} className="absolute w-[18px] right-[5px] top-[2px]" />

      <div className="pt-[24px] pl-[9px]">
        <h1 className="font-semibold text-[14px]">963541587</h1>
        <h1 className="font-semibold text-[14px]">Malwa Insurance</h1>
        <h1 className="font-semibold text-[14px]">
          Nankiana Road, Sangrur 148001
        </h1>
        <h1 className="font-semibold text-[14px]">Steve Smith</h1>
      </div>

      <div className="flex mt-[1px] pl-[9px] text-[12px] font-semibold underline gap-[30px] text-custom-blue">
        <h1>+91 (547) 953 5647</h1>
        <h1 className="mr-[25px]">admin@outlook.com</h1>
      </div>

      <div className="gap-2 flex text-[11px] pb-[5px] pl-[9px]">
        <div className="flex gap-1">
          <h1 className="text-custom-gray">DATE ISSUED</h1>
          <h1 className="font-semibold">03/12/2024</h1>
        </div>
        <div className="flex gap-1">
          <h1 className="text-custom-gray">DATE EXP.</h1>
          <h1 className="font-semibold">3/12/2024</h1>
        </div>
      </div>
    </div>
  );
}
