import React, { useEffect, useState } from "react";
import "./CreateProjectPage.css";
import Components from "../../components";
import SidebarComponent from "../../components/SidebarComponent/SidebarComponent";

const { BeginFormComponent, DatabaseFormComponent, ModelsFormComponent, SingleModelFieldsFormComponent } = Components;

const CreateProjectPage = () => {
  const [counter, setCounter] = useState(0);
  const [globalArray, setGlobalArray] = useState([]);
  const [projectSettings, setProjectSettings] = useState({});
  const [databaseSettings, setDatabaseSettings] = useState({});


  const filterGlobal = (index, fields) => {
    setGlobalArray(prev => {
      return prev.map((value, key) => {
        if (key === index) {
          return fields;
        } else {
          return value;
        }
      });
    });
  };

  const defaultGlobal = () => {
    setGlobalArray(prev => [...prev, [{ name: "", type: " ", required: true, unique: false, default: "" }]]);
  };

  const returnForms = () => {
    if (counter === 0) {
      return <BeginFormComponent projectSettings = {projectSettings} setProjectSettings={setProjectSettings} />;
    } else if (counter === 1) {
      return <DatabaseFormComponent databaseSettings = {databaseSettings} setDatabaseSettings = {setDatabaseSettings}/>;
    } else if (counter === 2) {
      return <SingleModelFieldsFormComponent globalArray={globalArray} setGlobalArray={setGlobalArray} index={0} filterGlobal={filterGlobal} defaultGlobal={defaultGlobal} />;
    } else {
      return <SingleModelFieldsFormComponent globalArray={globalArray} setGlobalArray={setGlobalArray} index={counter - 2} filterGlobal={filterGlobal} defaultGlobal={defaultGlobal} />;
    }
  };

  return (
    <div className="create-content">
      {/* <SidebarComponent className="sidebar" setCounter = {setCounter} /> */}
      <div>
        <h1>Counter: {counter}</h1>
        {returnForms()}
        <button onClick={() => setCounter(counter + 1)}>Next</button>
        {counter > 0 && <button onClick={() => setCounter(counter - 1)}>Back</button>}
        {
          counter > 2 && <button onClick={() => {
            console.log("Project Settings: ", projectSettings);
            console.log("Database Settings: ", databaseSettings);
            console.log("Global Array: ", globalArray);
          }}>Submit</button>
        }
      </div>
    </div>
  );
};

export default CreateProjectPage;
