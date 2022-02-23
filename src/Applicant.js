import React from "react";

function Applicant({details}) {
    if(!details) {
        return <h3>Working on fetching application</h3>
    }
    return (
        <div className="applicant container">
           <h2>{details.firstName}</h2>
           <p>Gender</p> 
           <p>Height</p> 
           <p>City</p> 
        </div>
    )
}

export default Applicant;