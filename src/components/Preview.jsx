import { useState } from 'react'

export default function Preview({ generalInfo, educationInfo, educationEntries, currentEducationIndex, currentEducation, experienceInfo, }) {

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

                {/* <h1>Education {educationEntries.length + 1}</h1>
                <h1>{educationInfo.school}</h1>
                <h2>{educationInfo.title}</h2>
                <h2>{educationInfo.date}</h2>
                <br /> */}
            </>
        )

        const previewDivExperience = (
            <>
                <h1>{experienceInfo.company}</h1>
                <h2>{experienceInfo.position}</h2>
                <h2>{experienceInfo.responsibilities}</h2>
                <h2>{experienceInfo.dateFrom}</h2>
                <h2>{experienceInfo.dateTo}</h2>
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