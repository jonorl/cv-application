import { useState } from 'react'

import General from './General'
import Education from './Education'
import Experience from './Experience'
import Preview from './Preview'

function App() {

  // Default states for General

  const [generalInfo, setGeneralInfo] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: ""
  });

  // Education Related functions, states, props and templates.

  // Education state changes

  const [educationInfo, setEducationInfo] = useState({  // To render input on Preview
    school: "",
    title: "",
    date: "",
  });

  const [educationEntries, setEducationEntries] = useState([]); // To store all education entries
  const [currentEducationIndex, setCurrentEducationIndex] = useState(0); // To navigate through education entries
  const currentEducation = educationEntries[currentEducationIndex] || {}; // To render current education entry

  const handleInputChangeEducation = (field, value) => { // To handle input changes
    setEducationInfo({ ...educationInfo, [field]: value });
  };

  // Education button functions

  // const addEducationEntry = () => {
  //   setEducationEntries([...educationEntries, educationInfo]);
  //   setCurrentEducationIndex(educationEntries.length);
  //   console.log(educationEntries[currentEducationIndex].school)
  //   setEducationInfo({ school:educationEntries.school, title: "", date: "" });
  //   nextEducation();
  // };

  const submitEducationEntry = () => {
    // Create a new array by mapping through existing entries
    const updatedEntries = educationEntries.map((entry, index) => {
      // If this is the current index, update with current educationInfo
      if (index === currentEducationIndex) {
        return { ...educationInfo };
      }
      // Otherwise, return the original entry
      return entry;
    });
  
    // If no entries exist at the current index, append the new entry
    if (currentEducationIndex >= updatedEntries.length) {
      updatedEntries.push({ ...educationInfo });
    }
  
    // Update the entries array
    setEducationEntries(updatedEntries);
  };

  const addEducationEntry = () => {
    // Create a new array with the existing entries
    const updatedEntries = [...educationEntries];
    
    // Add a new blank entry to the array
    updatedEntries.push({ school: "", title: "", date: "" });
    
    // Update the entries array
    setEducationEntries(updatedEntries);
    
    // Move the current index to the newly created entry
    setCurrentEducationIndex(updatedEntries.length - 1);
    
    // Reset the educationInfo to blank
    setEducationInfo({ school: "", title: "", date: "" });
  };

  const nextEducation = () => {
    console.log("currentEducationIndex " + currentEducationIndex)
    if (currentEducationIndex < educationEntries.length - 1) {
      // When moving to next entry, update the educationInfo state 
      // with the details of the next entry
      setCurrentEducationIndex(currentEducationIndex + 1);
      console.log("currentEducationIndex " + currentEducationIndex)
      setEducationInfo({
        school: educationEntries[currentEducationIndex + 1].school,
        title: educationEntries[currentEducationIndex + 1].title,
        date: educationEntries[currentEducationIndex + 1].date
      });
      return currentEducationIndex
    }
    console.log("currentEducationIndex " + currentEducationIndex)
  };

  const prevEducation = () => {
    console.log("currentEducationIndex " + currentEducationIndex)
    if (currentEducationIndex > 0) {
      // When moving to previous entry, update the educationInfo state 
      // with the details of the previous entry
      setCurrentEducationIndex(currentEducationIndex - 1);


      setEducationInfo({
        school: educationEntries[currentEducationIndex - 1].school,
        title: educationEntries[currentEducationIndex - 1].title,
        date: educationEntries[currentEducationIndex - 1].date
      });
      return currentEducationIndex
    }
    console.log("currentEducationIndex " + currentEducationIndex)
  };

  // Education input fields template

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

  // Experience Related functions, states, props and templates.

  // Experience state changes

  const [experienceInfo, setExperienceInfo] = useState({
    company: "",
    position: "",
    responsibilities: "",
    dateFrom: "",
    dateTo: "",
  });

  // Render and passing props to components

  return (
    <>
      <h1>CV Builder</h1>
      <General generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
      <Education educationInfo={educationInfo} setEducationInfo={setEducationInfo} educationFields={educationFields} educationEntries={educationEntries} nextEducation={nextEducation} prevEducation={prevEducation} addEducationEntry={addEducationEntry} submitEducationEntry={submitEducationEntry} />
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
