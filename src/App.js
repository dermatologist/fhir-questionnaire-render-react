import React, { useState} from 'react';
import Form from "@rjsf/core";
// import axios from 'axios';
import { FhirJsonForm, FhirJsonResp } from 'fhirformjs'
import { TestQuestionnaire1 } from './testQuestionnaire1';
import { JsonEditor as Editor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';
import logo from './logo.svg';
import './App.css';

function App() {
  const [schemaState, setData] = useState(TestQuestionnaire1);

  // You may be fetching data from an endpoint as below

  /*
  useEffect(() => { 
    async function fetchData() {
      // You can await here
      const result = await axios.get(
        'https://www.hl7.org/fhir/questionnaire-example-f201-lifelines.json',
      );
      // ...
      setData(JSON.parse(FhirJsonForm(result.data)));
      console.log(schema)
    }
    fetchData();
  
    // const schema = JSON.parse(FhirJsonForm(data))

  }, [schema]);
  */

  let formData = {}
  let respData = {}
  function handleSubmit(data){
    respData = FhirJsonResp(FhirJsonForm(schemaState).model, data)
    console.log(respData)
  }
  function handleChange(data) {
    setData(data)  // You may like to save the edited form to your FHIR server
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form schema={FhirJsonForm(schemaState).schema} 
          uiSchema={FhirJsonForm(schemaState).uiSchema}
        formData={formData}
        onSubmit={e => handleSubmit(e.formData)}
        />
        <h2>Edit FHIR Questionnaire below (Change IDs if you duplicate an element)</h2>
        <Editor
          value={schemaState}
          onChange={e => handleChange(e)}
        />
      </header>
    </div>
  );
}

export default App;
