import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ApplicantForm from './ApplicantForm';
import Applicant from './Applicant';
import './App.css';
import formSchema from './formSchema';
import * as yup from 'yup';


const initialFormValues = {
  firstName: '',
  gender: '',
  height: '',
  city: '',
  elk: false,
  deer: false,
  pheasant: false,
  grouse: false,
  hunterEducation: false,
  resident: false,
  terms: false,
}

const initialFormErrors = {
  firstName: '',
  gender: '',
  height: '',
  city: '',
}

const initialApplicant = [];
const initialDisabled = true;

export default function App() {
  const [applicants, setApplicant] = useState(initialApplicant);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

const getApplicant = () => {
  axios.get(`https://reqres.in/api/users`)
  .then(res => {
    setApplicant(res.data)
    console.log(res.data)
  })
  .catch(err => console.error(err))
}

const postNewApplicant = newApplicant => {
  axios.post(`https://reqres.in/api/users`
  )
  .then(res => {
    setApplicant([res.data, ...applicants]);
    setFormValues(initialFormValues);
    })
  .catch(err => console.error(err))
}

const validate = (name, value) => {
  yup.reach(formSchema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: '' }))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
}

const inputChange = (name, value) => {
  // 🔥 STEP 10- RUN VALIDATION WITH YUP
  validate(name, value);
  setFormValues({
    ...formValues,
    [name]: value // NOT AN ARRAY
  })
}

const formSubmit =
 () => {
   const newApplicant = {
    firstName: formValues.firstName.trim(),
    gender: formValues.gender.trim(),
    height: formValues.height.trim(),
    city: formValues.city.trim(),
    elk: false,
    deer: false,
    pheasant: false,
    grouse: false,
    hunterEducation: false,
    resident: false,
    terms: false,
   }
   postNewApplicant(newApplicant)
 }

 useEffect(() => {
  getApplicant()
}, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Apply for Hunting Permits Today!</h1>
      </header>
      <div className='personalinfo'>
      <ApplicantForm
      values={formValues}
      submit={formSubmit}
      change={inputChange}
      disabled={disabled}
      errors={formErrors}
      />
    {/* {applicant.map(applicants => {
      return (
        <Applicant key={applicants.id} details={applicants}/>
      )
    })} */}
  
      </div> 

      
    </div>
  );
}

