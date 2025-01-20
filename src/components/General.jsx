import { useState } from 'react'
import '../styles/General.css'

export default function General() {
    const [value, setValue] = useState("");
  
    return (
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    );
  }