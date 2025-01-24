import { useState } from 'react'

export default function Preview({ generalInfo, educationEntries, experienceEntries, }) {

    const [isSubmitted, setSubmitted] = useState(false);

    if (isSubmitted) {
        return <h2 className='submitted'>Your Application has been submitted!</h2>
    }

    function handleSubmit() {
        setSubmitted(true)
    }

    function renderOtherEducation() {
        return educationEntries.map((entry, index) => (
            <div key={index}>
                <h1>Education {index + 1}</h1>
                <h1>{entry.school}</h1>
                <h2>{entry.title}</h2>
                <h2>{entry.date}</h2>
                <br />
            </div>
        ));
    }

    const previewDivEducation = (
        <>
            {renderOtherEducation()}
        </>
    )

    
    function renderOtherExperience() {
        return experienceEntries.map((entry, index) => (
            <div key={index}>
                <h1>Experience {index + 1}</h1>
                <h1>{entry.company}</h1>
                <h2>{entry.position}</h2>
                <h2>{entry.responsibilities}</h2>
                <h2>{entry.dateFrom}</h2>
                <h2>{entry.dateTo}</h2>
                <br />
            </div>
        ));
    }

    const previewDivExperience = (
        <>
            {renderOtherExperience()}
        </>
    )


    return <div className="preview-container">

        <div className="preview">
            <h1>{generalInfo.fname} {generalInfo.lname}</h1>
            <h2>{generalInfo.email}</h2>
            <h2>{generalInfo.phone}</h2>
            <br />
            {previewDivEducation}
            {previewDivExperience}
        </div>

        <button className="submit" onClick={() => handleSubmit()}>Submit</button>
    </div>
}