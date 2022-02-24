import React from "react";

function Applicant({ details }) {
  if (!details) {
    return <h3>Working on fetching application</h3>;
  }
  return (
    <div className="applicant container">
      <h2>{details.firstName}</h2>
      <p>Gender{details.gender}</p>
      <p>Height{details.height}</p>
      <p>City{details.city}</p>
      {!!details.hobbies && !!details.hobbies.length && (
        <div>
          Checkboxes:
          <ul>
            {details.hobbies.map((like, idx) => (
              <li key={idx}>{like}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Applicant;
