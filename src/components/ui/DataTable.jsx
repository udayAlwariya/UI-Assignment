import arrows from "../../assets/icon9.svg";
import TableFooter from "./TableFooter";

export default function DataTable({ rows, name }) {
  const headers = Object.keys(rows[0]);

  return (
    <div className="mr-[16px] font-semibold">
      <div
        className={`overflow-x-auto shadow-md ${
          name == "fleet" ? "rounded-2xl" : "rounded-bl-2xl rounded-br-2xl"
        }`}
      >
        <table className="lg:w-full border-gray-20 ">
          <thead>
            <tr className="bg-custom-green text-white text-sm">
              {headers.map((key) => (
                <th
                  key={key}
                  className={`text-left ${key === "Status" ? "w-[100px] text-center" : ""} pl-[16px] py-[8px] font-semibold border border-gray-200`}
                >
                  <div className="flex justify-between">
                    <h1>{key}</h1>
                    <img src={arrows} className="pr-[8px]" alt="" />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-sm">
            {rows.map((row, i) => (
              <tr key={i} className="bg-white">
                {headers.map((key) => (
                  <td
                    key={key}
                    className={`pl-[16px] py-[8px] border border-gray-200 ${
                      key.includes("Unit") ||
                      key.includes("Phone") ||
                      key.includes("Load")
                        ? "text-custom-blue underline"
                        : ""
                    }`}
                  >
                    {key === "Status" ? (
                      <span
                        className={`px-2 py-1 rounded-lg text-white text-xs font-medium ${
                          {
                            "In-Transit": "bg-custom-blue",
                            "Pending": "bg-custom-orange",
                            "Cancelled": "bg-custom-red2",
                            "Delivered": "bg-custom-green3",
                          }[row[key]] || "bg-gray-400"
                        }`}
                      >
                        {row[key]}
                      </span>
                    ) : (
                      <div>{row[key]}</div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {name === "fleet" && (
          <div className="h-[8px] bg-custom-gray5">
            <div className="ml-[264px] mr-[16px] rounded-full bg-custom-gray6 h-[8px]"></div>
          </div>
        )}
        <TableFooter />
      </div>
    </div>
  );
}
