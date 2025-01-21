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

  return (
    <>
      <h1>CV Builder</h1>
      <General generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
      <Education />
      <Experience />
      <Preview generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
    </>
  )
}

export default App
