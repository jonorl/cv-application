export default function Education({ educationInfo, setEducationInfo }) {

  const handleInputChange = (field, value) => {
    setEducationInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

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

      <h2>Education</h2>

      <label htmlFor="schoolName">School Name:</label>
      <input
        type="text"
        value={educationInfo.school}
        placeholder="Hollywood Upstairs Medical College"
        onChange={(event) => handleInputChange("school", event.target.value)}
      />

      <label htmlFor="title">Title:</label>
      <input
        type="text"
        value={educationInfo.title}
        placeholder="Nuclear Safety Engineer"
        onChange={(event) => handleInputChange("title", event.target.value)}
      />

      <label htmlFor="date">Graduation Date:</label>
      <input
        type="date"
        value={educationInfo.date}
        onChange={(event) => handleInputChange("date", event.target.value)}
      />

      <button className="delete-education" onClick={() => handleDelete('school', 'title', 'date')}>Delete</button>

    </div>
  );
}