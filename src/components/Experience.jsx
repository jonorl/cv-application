export default function Experience(experienceInfo, setExperienceInfo) {

  const handleInputChange = (field, value) => {
    setExperienceInfo(prev => ({
      ...prev,
      [field]: value
    }));
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

  return (
    <div className="experience">

      <h2>Experience</h2>

      <label htmlFor="company">Experience:</label>
      <input
        type="text"
        value={setExperienceInfo.company}
        onChange={(event) => handleInputChange('company', event.target.value)}
      />

      <label htmlFor="position">Position:</label>
      <input
        type="text"
        value={setExperienceInfo.position}
        onChange={(event) => handleInputChange('position', event.target.value)}
      />

      <label htmlFor="responsibilities">Responsibilities:</label>
      <input
        type="text"
        value={setExperienceInfo.responsibilities}
        onChange={(event) => handleInputChange('responsibilities', event.target.value)}
      />

      <label htmlFor="date-from">Date From:</label>
      <input
        type="date"
        value={setExperienceInfo.dateFrom}
        onChange={(event) => handleInputChange('dateFrom', event.target.value)}
      />

      <label htmlFor="date-to">Date To:</label>
      <input
        type="date"
        value={setExperienceInfo.dateTo}
        onChange={(event) => handleInputChange('dateTo', event.target.value)}
      />

      <button className="delete-experience" onClick={() => handleDelete('company', 'position', 'responsibilities', 'dateFrom', 'dateTo')}>Delete</button>

    </div>
  );
}