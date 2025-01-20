import { useState } from 'react'
import '../styles/App.css'

import General from './General'
import Education from './Education'
import Experience from './Experience'
import Preview from './Preview'

function App() {

  return (
    <>
      <h1>CV Builder</h1>
      <General/>
      <Education/>
      <Experience/>
      <Preview/>
    </>
  )
}

export default App
