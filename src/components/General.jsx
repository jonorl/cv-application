export default function General({ generalInfo, setGeneralInfo }) {
  
  const handleInputChange = (field, value) => {
    setGeneralInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDelete = (fname, lname, email, phone) => {
    setGeneralInfo(prev => ({
      ...prev,
      [fname]: "",
      [lname]: "",
      [email]: "",
      [phone]: "",
    }));
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
      <input
        type="text"
        value={generalInfo.lname}
        onChange={(event) => handleInputChange('lname', event.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        value={generalInfo.email}
        onChange={(event) => handleInputChange('email', event.target.value)}
      />

      <label htmlFor="phone">Phone:</label>
      <input
        type="phone"
        value={generalInfo.phone}
        onChange={(event) => handleInputChange('phone', event.target.value)}
      />

      <button className="delete-general" onClick={() => handleDelete('fname', 'lname', 'email', 'phone')}>Delete</button>

    </div>
  );
}