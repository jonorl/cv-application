import { useState } from 'react'
import '../styles/Experience.css'

export default function Experience() {
    const [value, setValue] = useState("");
  
    return (
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    );
  }