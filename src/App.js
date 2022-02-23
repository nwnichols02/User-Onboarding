import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ApplicantForm from './ApplicantForm';
import Applicant from './Applicant';
import './App.css';


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
  const [applicant, setApplicant] = useState(initialApplicant);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

const getApplicant = () => {
  axios.get(`https://reqres.in/api/users`)
  .then(res => {
    console.log(res)
  })
  .catch(err => console.error(err))
}

const postNewApplicant = newApplicant => {
  axios.post(`https://reqres.in/api/users`)
  .then(res => {
    console.log(res)
  })
  .catch(err => console.error(err))
}


  return (
    <div className="App">
      <header className="App-header">
        <h1>Apply for Hunting Permits Today!</h1>
      </header>

    </div>
  );
}

