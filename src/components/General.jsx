import '../styles/General.css'


import Input from "./Input"

export default function General({ generalInfo, setGeneralInfo }) {
  const handleInputChange = (field, value) => {
    setGeneralInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const submitGeneral = () => {
    // Submit?? 
  };

  const deleteGeneral = () => {
    // Delete?? 
  };

  return (
    <div className="general">
      <h2>General Information</h2>

      <label htmlFor="fname">First name:</label>
      <input
        type="text"
        value={generalInfo.fname}
        onChange={(event) => handleInputChange('fname', event.target.value)}
      />

      <label htmlFor="lname">Last name:</label>
      <Input
        value={generalInfo.lname}
        onChange={(event) => handleInputChange('lname', event.target.value)}
      />

      {/* <label htmlFor="email">Email:</label>
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
      /> */}

      <button className="submit-general" onClick={submitGeneral}>Submit</button>

      <button className="delete-general" onClick={deleteGeneral}>Delete</button>

    </div>
  );
}