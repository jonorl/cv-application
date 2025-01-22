import { useState } from 'react'
import '../styles/App.css'

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

  return (
    <>
      <h1>CV Builder</h1>
      <General generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
      <Education educationInfo={educationInfo} setEducationInfo={setEducationInfo} />
      <Experience />
      <Preview generalInfo={generalInfo} setGeneralInfo={setGeneralInfo}
      educationInfo={educationInfo} setEducationInfo={setEducationInfo} />
    </>
  )
}

export default App
