import React from 'react'

function NotesData({trip}) {

  return (
     <div>
      <h1 className={` ${trip.tripNumber==="1000024" ? "mt-[8px]" : "mt-[16px]"} font-semibold`}>On Location</h1>
      <h1>{trip.address}</h1>

      <div className="mt-[8px] gap-1 flex items-center">
        <h1 className="font-semibold">Note:</h1>
        <h1>{trip.note}</h1>
      </div>

      <div className="mt-[8px] gap-1 flex items-center">
        <h1 className="font-semibold">Driver:</h1>
        <h1>{trip.driver}</h1>
      </div>

      <div className="mt-[8px] gap-1 flex items-center">
        <h1 className="font-semibold">Trip Number:</h1>
        <h1>{trip.tripNumber}</h1>
      </div>

      <h1 className="text-[13px] text-custom-gray mt-[8px]">
        by {trip.dispatcher} • {trip.date}
      </h1>
    </div>
  )
}

export default NotesData
