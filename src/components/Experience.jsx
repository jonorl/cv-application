export default function Experience({ experienceInfo, setExperienceInfo }) {

  const handleInputChange = (field, value) => {
    setExperienceInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAdd = () => {
    // something
  };

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

  const experienceFields = (
    <>
      <h2>Experience</h2>

      <label htmlFor="company">Company:</label>
      <input
        type="text"
        value={experienceInfo.company}
        placeholder="Springfield Nuclear Plant"
        onChange={(event) => handleInputChange('company', event.target.value)}
      />

      <label htmlFor="position">Position:</label>
      <input
        type="text"
        value={experienceInfo.position}
        placeholder="Head Bee guy"
        onChange={(event) => handleInputChange('position', event.target.value)}
      />

      <label htmlFor="responsibilities">Responsibilities:</label>
      <input
        type="text"
        value={experienceInfo.responsibilities}
        placeholder="Guard the bee"
        onChange={(event) => handleInputChange('responsibilities', event.target.value)}
      />

      <label htmlFor="date-from">Date From:</label>
      <input
        type="date"
        value={experienceInfo.dateFrom}
        onChange={(event) => handleInputChange('dateFrom', event.target.value)}
      />

      <label htmlFor="date-to">Date To:</label>
      <input
        type="date"
        value={experienceInfo.dateTo}
        onChange={(event) => handleInputChange('dateTo', event.target.value)}
      />
    </>
  )

  return (
    <div className="experience">

    {experienceFields}

      <div className="button-container">
        <button className="add-education" onClick={() => handleAdd()}>Add</button>
        <button className="delete-experience" onClick={() => handleDelete('company', 'position', 'responsibilities', 'dateFrom', 'dateTo')}>Delete</button>
      </div>
    </div>
  );
}