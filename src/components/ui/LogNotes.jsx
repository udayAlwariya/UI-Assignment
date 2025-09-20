import React from "react";
import NotesData from "./NotesData";

function LogNotes() {
  const trips = [
    {
      address: "1905 Mchenry Ave, Escalon, CA",
      note: "Driver has dropped off commodity",
      driver: "SIDDHARTH SHARMA",
      tripNumber: "1000024",
      dispatcher: "Amrit Dispatcher",
      date: "Tue. Apr 2, 2024 @ 00:46 GMT+5",
    },
    {
      address: "1905 Mchenry Ave, Escalon, CA",
      note: "Driver has dropped off commodity",
      driver: "SIDDHARTH SHARMA",
      tripNumber: "1000025",
      dispatcher: "Amrit Dispatcher",
      date: "Wed. Apr 3, 2024 @ 10:00 GMT+5",
    },
  ];
  return (
    <div className="bg-white mt-[42px] shadow-md relative rounded-bl-2xl rounded-br-2xl mr-[16px] grid grid-cols-1 lg:grid-cols-2">
      <div className="w-full">
        <h1 className="bg-custom-green  text-white font-semibold pl-[16px] py-[8px]">
          Logs
        </h1>
        <div className=" pl-[16px]">
          <h1 className="mt-[8px] font-semibold">
            Load Manifest: was generated.
          </h1>
          <h1 className="text-[13px] text-custom-gray">
            by You • Partner Admin • Tue. Apr 2, 2024 @ 04:34 GMT+5
          </h1>
          <h1 className="mt-[16px] font-semibold">
            LastCheckCall changed from 3/30/2024 6:43:28 PM +00:00 to 4/1/2024
          </h1>
          <h1 className="font-semibold"> 7:16:54 PM +00:00 for trip 1000024</h1>
          <div className="mt-[8px] gap-1 flex items-center">
            <h1 className="font-semibold">Reason:</h1>
            <h1>Last Check Call Date Changed</h1>
          </div>
          <h1 className="text-[13px] text-custom-gray mt-[8px]">
            by Amrit Dispatcher • Tue. Apr 2, 2024 @ 00:46 GMT+5
          </h1>
          <div className="mt-[16px] ">
            <h1 className="font-semibold">
              Status changed from In Transit to Delivered for load 1000024
            </h1>
            <div className="mt-[8px] gap-1 flex items-center">
              <h1 className="font-semibold">Reason:</h1>
              <h1>Last Check Call Date Changed</h1>
            </div>
            <h1 className="text-[13px] text-custom-gray mt-[8px]">
              by Amrit Dispatcher • Tue. Apr 2, 2024 @ 00:46 GMT+5
            </h1>
          </div>
          <div className="mt-[16px] mb-[22px]">
            <h1 className="font-semibold">
              Status changed from In Transit to Delivered for load 1000024
            </h1>
            <div className="mt-[8px] gap-1 flex items-center">
              <h1 className="font-semibold">Reason:</h1>
              <h1>Last Check Call Date Changed</h1>
            </div>
            <h1 className="text-[13px] text-custom-gray mt-[8px]">
              by Amrit Dispatcher • Tue. Apr 2, 2024 @ 00:46 GMT+5
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full border-l border-gray-200">
        <h1 className=" bg-custom-green text-white font-semibold pl-[16px] py-[8px]">
          Notes
        </h1>

        <div className="pl-[16px]">
          <div>
            {trips.map((trip, index) => (
              <NotesData key={index} trip={trip} />
            ))}
          </div>
        </div>
      </div>
      <div className="h-[1px] mt-[16px] absolute border-0 bg-gray-200 w-full bottom-[6px]"></div>
    </div>
  );
}

export default LogNotes;
