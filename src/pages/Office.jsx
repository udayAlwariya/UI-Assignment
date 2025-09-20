import React from 'react'
import Timeline from '../components/Timeline'
import Candidate from '../components/Candidate'
import Information from '../components/Information'
import FleetInfo from '../components/FleetInfo'
import CarrierHistory from '../components/CarrierHistory'

function Office() {
  return (
    <div>
      <Timeline number={1} title="Candidate Sample Singh">
        <Candidate/>
      </Timeline>
       <Timeline number={2} title="Information">
        <Information/>
      </Timeline>
      <Timeline number={3} title="Fleet Information">
        <FleetInfo/>
      </Timeline>
      <Timeline number={4} title="Carrier History">
        <CarrierHistory/>
      </Timeline>

    </div>
  )
}

export default Office
