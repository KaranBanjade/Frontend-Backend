import React, { useEffect, useState } from "react";
import "./CreateProjectPage.css";
import Components from "../../components";
import SidebarComponent from "../../components/SidebarComponent/SidebarComponent";

const { BeginFormComponent, DatabaseFormComponent, SingleModelFieldsFormComponent, SubmitComponent } = Components;

const CreateProjectPage = () => {
  const [counter, setCounter] = useState(0);
  const [globalArray, setGlobalArray] = useState([]);
  const [projectSettings, setProjectSettings] = useState({});
  const [databaseSettings, setDatabaseSettings] = useState({});
  const [submit, setSubmit] = useState(false);

  const filterGlobal = (index, fields) => {
    setGlobalArray(prev => {
      return prev.map((value, key) => (key === index ? fields : value));
    });
  };

  const defaultGlobal = () => {
    setGlobalArray(prev => [...prev, [{ name: "", type: " ", required: true, unique: false, default: "" }]]);
  };

  const handleNext = () => {
    setCounter(prev => prev + 1);
  };

  const handleBack = () => {
    if (submit) {
      setSubmit((prev) => (!prev))
      return;
    }
    setCounter(prev => prev - 1);
  };

  const handleSubmit = () => {
    setSubmit(true);
    console.log("Project Settings: ", projectSettings);
    console.log("Database Settings: ", databaseSettings);
    console.log("Global Array: ", globalArray);
  };

  const returnForms = () => {
    switch (counter) {
      case 0:
        return <BeginFormComponent projectSettings={projectSettings} setProjectSettings={setProjectSettings} />;
      case 1:
        return <DatabaseFormComponent databaseSettings={databaseSettings} setDatabaseSettings={setDatabaseSettings} />;
      case 2:
        return <SingleModelFieldsFormComponent globalArray={globalArray} setGlobalArray={setGlobalArray} index={0} filterGlobal={filterGlobal} defaultGlobal={defaultGlobal} />;
      default:
        return <SingleModelFieldsFormComponent globalArray={globalArray} setGlobalArray={setGlobalArray} index={counter - 2} filterGlobal={filterGlobal} defaultGlobal={defaultGlobal} />;
    }
  };

  return (
    <div className="create-content">
      {/* <SidebarComponent className="sidebar" setCounter={setCounter} /> */}
      <div>
        <h1>Counter: {counter}</h1>
        {!submit ? (
          returnForms()
        ) : (
          <SubmitComponent projectSettings={projectSettings} databaseSettings={databaseSettings} globalArray={globalArray} />
        )}
        {submit || <button onClick={handleNext}>Next</button>}
        {counter > 0 && <button onClick={handleBack}>Back</button>}
        {counter >= 2 && (
          <button onClick={handleSubmit}>{submit ? "Finish" : "Submit"}</button>
        )}
      </div>
    </div>
  );
};

export default CreateProjectPage;
