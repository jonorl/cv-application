import { useState } from 'react'
import '../styles/Education.css'

export default function Education() {
    const [value, setValue] = useState("");
  
    return (
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    );
  }