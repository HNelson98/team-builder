import React, { useState } from 'react';
import Form from './Form'
import { v4 as uuidv4 } from 'uuid';
import './App.css';



function App() {
  const [teamMembers, setTeamMembers]= useState([])
  const [formValues, setFormValues]= useState({
    fname: '',
    lname: '',
    role: '',
  })

  const onInputChange = event => {
      const inputThatChanged = event.target.name
      const newValueForInput = event.target.value
     
     setFormValues({
      ...formValues,
      [inputThatChanged]: newValueForInput,
     })
  
    
   }
   const onFormSubmit = event => {
      event.preventDefault()
    
      const newMember = {
        fname: formValues.fname,
        lname: formValues.lname,
        role: formValues.role,
        id: uuidv4
      }
      setTeamMembers([...teamMembers, newMember])
  }

  



  return (
    <div className="App">
      <Form
          onInputChange={onInputChange}
          formValues={formValues}
          onFormSubmit={onFormSubmit}
      
      />
     <h3>Here is the team!:</h3>
      {
        teamMembers.map(fr => <div key={fr.id}>{fr.fname} {fr.lname}</div>)
      }
    </div>
  );
  }

export default App;
