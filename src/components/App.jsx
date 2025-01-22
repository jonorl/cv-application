import { useState } from 'react'

import General from './General'
import Education from './Education'
import Experience from './Experience'
import Preview from './Preview'

function App() {

  const [generalInfo, setGeneralInfo] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: ""
  });

  const [educationInfo, setEducationInfo] = useState({
    school: "",
    title: "",
    date: "",
  });

  const [experienceInfo, setExperienceInfo] = useState({
    company: "",
    position: "",
    responsibilities: "",
    dateFrom: "",
    dateTo: "",
  });

  return (
    <>
      <h1>CV Builder</h1>
      <General generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
      <Education educationInfo={educationInfo} setEducationInfo={setEducationInfo} />
      <Experience experienceInfo={experienceInfo} setExperienceInfo={setExperienceInfo} />
      <Preview generalInfo={generalInfo} setGeneralInfo={setGeneralInfo}
        educationInfo={educationInfo} setEducationInfo={setEducationInfo}
        experienceInfo={experienceInfo} setExperienceInfo={setExperienceInfo} />
    </>
  )
}

export default App
