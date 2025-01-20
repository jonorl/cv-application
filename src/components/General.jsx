import { useState } from 'react'
import '../styles/General.css'

export default function General() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submit, setSubmit] = useState("");

  const submitGeneral = () => {
    // Submit?? 
  };


  return (
    <div className="general">
      <h2>General Information</h2>

      <label htmlFor="fname">First name:</label>
      <input
        type="text"
        value={fname}
        onChange={(event) => setFname(event.target.value)}
      />

      <label htmlFor="lname">Last name:</label>
      <input
        type="text"
        value={lname}
        onChange={(event) => setLname(event.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <label htmlFor="phone">Phone:</label>
      <input
        type="phone"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />

      <button onClick={submitGeneral}>Submit</button>
    </div>
  );
}