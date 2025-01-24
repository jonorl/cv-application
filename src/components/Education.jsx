import App from "./App";

export default function Education({ submitEducationEntry, setEducationInfo, educationFields, prevEducation, nextEducation, addEducationEntry }) {

  const handleDelete = (school, title, date) => {
    setEducationInfo(prev => ({
      ...prev,
      [school]: "",
      [title]: "",
      [date]: "",
    }));
  };

  return (
    <div className="education">

      {educationFields}

      <div className="button-container">
        <button className="submit" onClick={submitEducationEntry}>Submit</button>
        <button className="add-education" onClick={addEducationEntry}>Add</button>
        <button className="prev-education"onClick={prevEducation}>Prev</button>
        <button className="next-education"onClick={nextEducation}>Next</button>
        <button className="delete-education" onClick={() => handleDelete('school', 'title', 'date')}>Delete</button>
      </div>

    </div>
  );
}