import '../styles/Preview.css'

export default function Preview({ generalInfo }) {
    return <div className="preview">
        <h1>{generalInfo.fname} {generalInfo.lname}</h1>
        <h2>{generalInfo.email}</h2>
        <h2>{generalInfo.phone}</h2>
        </div>

}