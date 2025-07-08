import React from 'react'
import PersonalInfo from './basicInfo/PersonalInformation'
import ContactInformation from './basicInfo/ContactInformation'
import MedicalInformation from './basicInfo/MedicalInformation'
function BasicInfo() {
  return (
    <div>
       <PersonalInfo />
       <ContactInformation />
         <MedicalInformation />
    </div>
  )
}

export default BasicInfo
