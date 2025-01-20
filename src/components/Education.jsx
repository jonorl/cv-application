import { useState } from 'react'
import '../styles/Education.css'

export default function Education() {
  const [school, setSchool] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="education">

      <h2>Education</h2>

      <label htmlFor="schoolName">School Name:</label>
      <input
        type="text"
        value={school}
        onChange={(event) => setSchool(event.target.value)}
      />

      <label htmlFor="title">Title:</label>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <label htmlFor="date">Graduation Date:</label>
      <input
        type="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />
    </div>
  );
}