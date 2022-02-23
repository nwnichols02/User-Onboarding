import React from "react";

export default function ApplicantForm(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = () => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <form className="form-container">
      <div className="form-div">
        <h2>Personal Information</h2>
        <div className="errors">
          <div>{errors.firstName}</div>
          <div>{errors.gender}</div>
          <div>{errors.height}</div>
          <div>{errors.city}</div>
          <div>{errors.elk}</div>
          <div>{errors.deer}</div>
          <div>{errors.pheasant}</div>
          <div>{errors.hunterEducation}</div>
        </div>

        <div className="form-personal-info">
          <label>First Name
            <input
              value={values.firstName}
              onChange={onChange}
              name="firstName"
              type="text"
            />
          </label>
          <label>Gender
            <select
              value={values.gender}
              onChange={onChange}
              name="gender"
              type="text"
            >
              <option value="">- Select an option -</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label>Height(in feet)
            <input
              value={values.height}
              onChange={onChange}
              name="height"
              type="range"
              min="4"
              max="7"
            />
          </label>
          <label>City
            <input
              value={values.city}
              onChange={onChange}
              name="city"
              type="text"
            />
          </label>
        </div>

    {/* Checkboxes */}
        <div className="checkbox">
          <label>Elk
            <input
              type="checkbox"
              name="elk"
              checked={values.elk}
              onChange={onChange}
            />
          </label>
          <label>Deer
            <input
              type="checkbox"
              name="deer"
              checked={values.deer}
              onChange={onChange}
            />
          </label>
          <label>Pheasant
            <input
              type="checkbox"
              name="pheasant"
              checked={values.pheasant}
              onChange={onChange}
            />
          </label>
          <label>Grouse
            <input
              type="checkbox"
              name="grouse"
              checked={values.grouse}
              onChange={onChange}
            />
          </label>
          <label>Do you have Hunter Education?
            <input
              type="checkbox"
              name="hunterEducation"
              checked={values.hunterEducation}
              onChange={onChange}
            />
          </label>
          <label>Are you a resident?
            <input
              type="checkbox"
              name="resident"
              checked={values.resident}
              onChange={onChange}
            />
          </label>
          <label>Terms and Conditions
            <input
              type="checkbox"
              name="terms"
              checked={values.terms}
              onChange={onChange}
            />
          </label>
        </div>
        <button disabled={disabled}>submit</button>
      </div>
    </form>
  );
}
