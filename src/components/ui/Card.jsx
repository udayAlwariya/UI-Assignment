import { InsuranceData } from "../../utils/insuranceData";
import Accounting from "./Accounting";
import DocumentCard from "./DocumentCard";
import Information from "./Information";
import InsuranceCard from "./InsuranceCard";
import OnBoard from "./OnBoard";
import StudentEntity from "./StudentEntity";
import icon26 from "../../assets/icon26.svg";
import { Plus } from "lucide-react";
import AddButton from "./AddButton";
import { DocumentCardData } from "../../utils/DocumentCardData";

export default function Card({ ...props }) {
  const { id, title, name } = props;
  const candidateComponents = {
    1: <StudentEntity />,
    2: <Information />,
    3: <Accounting />,
    4: <OnBoard />,
  };
  
 // for slicing the array values to display double cards in 1st and 2nd section of information section
  let filteredData = [];
  if (name === "information") {
    if (id === 1) {
      filteredData = InsuranceData.slice(0, 2); // first 2 objects
    } else if (id === 2) {
      filteredData = InsuranceData.slice(2, 4); // 3rd & 4th objects
    }
  }

  return (
    <div className="md:pl-1 mb-1 lg:pl-2 lg:mb-2 xl:pl-0 xl:mb-0">
      <h2
        className={`${
          name == "candidate" && "border"
        } border-gray-200 border-t-0 ${id !== 1 && "border-l-0"} ${
          id == 1 && "xl:rounded-tl-2xl"
        }  ${id == 4 && "xl:rounded-tr-2xl"} bg-custom-green font-medium ${
          title == "" && "h-[40px]"
        } text-white py-2 px-4`}
      >
        {title}
      </h2>

      <div
        className={`h-[408px] relative border-t-0 border ${
          name == "information" && "p-[10px] flex flex-col gap-[14px]"
        } ${id == 1 && "xl:rounded-bl-2xl"}  ${
          id == 4 && "xl:rounded-br-2xl"
        } border-l-0 border-gray-200 bg-white shadow-xl`}
      >
        {name === "candidate" && candidateComponents[id]}
        {filteredData.map((item) => (
          <InsuranceCard key={item.id} {...item} />
        ))}
        {name == "information" && (
          <>
            {id === 3 && (
              <div className="pl-[1px]">
                <h1 className=" font-semibold text-custom-orange">
                  Interchange
                </h1>
                <h1 className=" mt-[134px] font-semibold text-custom-orange">
                  Computer
                </h1>
              </div>
            )}
            {id === 4 && (
              <>
                {DocumentCardData.map((doc) => (
                  <DocumentCard key={doc.id} {...doc} />
                ))}
                <div className="mt-[40px]">
                  <img src={icon26} alt="" />
                </div>
              </>
            )}
            <div
              className={`h-[40px] ${id == 1 && "rounded-bl-2xl"} ${
                id == 4 && "rounded-br-2xl"
              } bg-custom-gray5 absolute w-full bottom-[10px] -m-[10px]`}
            >
              {id === 4 && (
                <div className="pt-[4px] ml-[4px]">
                    <AddButton name={"More"}/>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
