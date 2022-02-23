import React, { useEffect, useState } from 'react';
import './App.css';
import Applicant from './Applicant';

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




  return (
    <div className="App">
      <header className="App-header">
        <h1>Apply for Hunting Permits Today!</h1>
      </header>

    </div>
  );
}

