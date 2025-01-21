import '../styles/Preview.css'

export default function Preview({ generalInfo }) {
    console.log("Preview generalInfo:", generalInfo);
    return <div className="preview">
        <h1>{generalInfo.fname} {generalInfo.lname}</h1>
        <h2>Test</h2>
        </div>

}