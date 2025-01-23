import { useState } from 'react'

import General from './General'
import Education from './Education'
import Experience from './Experience'
import Preview from './Preview'

function App() {

  // Default states for all input fields

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

  const [currentEducationIndex, setCurrentEducationIndex] = useState(0);
  const [educationEntries, setEducationEntries] = useState([]);

  const [experienceInfo, setExperienceInfo] = useState({
    company: "",
    position: "",
    responsibilities: "",
    dateFrom: "",
    dateTo: "",
  });

  // Education

  const handleInputChangeEducation = (field, value) => {
    setEducationInfo({ ...educationInfo, [field]: value });
  };

  const addEducationEntry = () => {
    setEducationEntries([...educationEntries, educationInfo]);
    setCurrentEducationIndex(educationEntries.length);
    setEducationInfo({ school: "", title: "", date: "" });
    nextEducation();
  };

  const currentEducation = educationEntries[currentEducationIndex] || {};

  const nextEducation = () => {
    if (currentEducationIndex < educationEntries.length - 1) {
      setCurrentEducationIndex(currentEducationIndex + 1);
    }
  };

  const prevEducation = () => {
    if (currentEducationIndex > 0) {
      setCurrentEducationIndex(currentEducationIndex - 1);
    }
  };


  const educationFields = (
    <>
      <h2>Education</h2>

      <label htmlFor="schoolName">School Name:</label>
      <input
        type="text"
        value={educationInfo.school}
        placeholder="Hollywood Upstairs Medical College"
        onChange={(event) => handleInputChangeEducation("school", event.target.value)}
      />

      <label htmlFor="title">Title:</label>
      <input
        type="text"
        value={educationInfo.title}
        placeholder="Nuclear Safety Engineer"
        onChange={(event) => handleInputChangeEducation("title", event.target.value)}
      />

      <label htmlFor="date">Graduation Date:</label>
      <input
        type="date"
        value={educationInfo.date}
        onChange={(event) => handleInputChangeEducation("date", event.target.value)}
      />
    </>
  )

  // Render

  return (
    <>
      <h1>CV Builder</h1>
      <General generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
      <Education educationInfo={educationInfo} setEducationInfo={setEducationInfo} educationFields={educationFields} educationEntries={educationEntries} nextEducation={nextEducation} prevEducation={prevEducation} addEducationEntry={addEducationEntry} />
      <Experience experienceInfo={experienceInfo} setExperienceInfo={setExperienceInfo} />
      <Preview generalInfo={generalInfo} setGeneralInfo={setGeneralInfo}
        educationInfo={educationInfo} setEducationInfo={setEducationInfo} currentEducation={currentEducation}
        currentEducationIndex={currentEducationIndex}
        educationEntries={educationEntries}
        experienceInfo={experienceInfo} setExperienceInfo={setExperienceInfo} />
    </>
  )
}

export default App
