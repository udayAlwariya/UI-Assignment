import React from 'react'
import DataTable from './ui/DataTable'
import { rows } from '../utils/fleetData'

function FleetInfo() {
   
  return (
    <div>
      <DataTable rows={rows} name={"fleet"}/>
    </div>
  )
}

export default FleetInfo
