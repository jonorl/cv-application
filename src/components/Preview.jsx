import '../styles/Preview.css'

export default function Preview({ generalInfo, educationInfo}) {
    return <div className="preview">
        <h1>{generalInfo.fname} {generalInfo.lname}</h1>
        <h2>{generalInfo.email}</h2>
        <h2>{generalInfo.phone}</h2>
        <br />
        <h1>{educationInfo.school}</h1>
        <h2>{educationInfo.title}</h2>
        <h2>{educationInfo.date}</h2>
        </div>

}