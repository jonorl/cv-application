import { useState } from 'react'
import '../styles/Experience.css'

export default function Experience() {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  return (
    <div className="experience">

      <h2>Experience</h2>

      <label htmlFor="company">Experience:</label>
      <input
        type="text"
        value={company}
        onChange={(event) => setCompany(event.target.value)}
      />

      <label htmlFor="position">Position:</label>
      <input
        type="text"
        value={position}
        onChange={(event) => setPosition(event.target.value)}
      />

      <label htmlFor="responsibilities">Responsibilities:</label>
      <input
        type="text"
        value={responsibilities}
        onChange={(event) => setResponsibilities(event.target.value)}
      />

      <label htmlFor="date-from">Date From:</label>
      <input
        type="date"
        value={dateFrom}
        onChange={(event) => setDateFrom(event.target.value)}
      />

      <label htmlFor="date-to">Date To:</label>
      <input
        type="date"
        value={dateTo}
        onChange={(event) => setDateTo(event.target.value)}
      />
    </div>
  );
}