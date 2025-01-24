export default function Experience({ submitExperienceEntry, setExperienceInfo, experienceFields, prevExperience, nextExperience, addExperienceEntry }) {

  const handleDelete = (company, position, responsibilities, dateFrom, dateTo) => {
    setExperienceInfo(prev => ({
      ...prev,
      [company]: "",
      [position]: "",
      [responsibilities]: "",
      [dateFrom]: "",
      [dateTo]: "",
    }));
  };


  return (
    <div className="experience">

    {experienceFields}

      <div className="button-container">
      <button className="submit" onClick={submitExperienceEntry}>Submit</button>
      <button className="add-experience" onClick={addExperienceEntry}>Add</button>
      <button className="prev-experience"onClick={prevExperience}>Prev</button>
      <button className="next-experience"onClick={nextExperience}>Next</button>
      <button className="delete-experience" onClick={() => handleDelete('company', 'position', 'responsibilities', 'dateFrom', 'dateTo')}>Delete</button>
      </div>
    </div>
  );
}