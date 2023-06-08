import React, {useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./CreateProjectPage.css";
import Components from "../../components";
import SidebarComponent from "../../components/SidebarComponent/SidebarComponent";
// import DownloadProject from "../../functions/project";
const { BeginFormComponent, DatabaseFormComponent, SingleModelFieldsFormComponent, SubmitComponent, WelcomeComponent} = Components;
const DownloadProject = (data) =>{
  // const api = "https://scriptsorcerers-backend.adaptable.app/ ";
  const api = "http://localhost:5000/addNewBackend"
fetch(api, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then(res => res.blob())
  .then(blob => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "download.zip";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }
  );
}
const CreateProjectPage = () => {
//   const prevData = {
//     "connObj": {
//         "dbname": "Database",
//         "dbtype": "PostgreSQL",
//         "dbhost": "localhost",
//         "dbport": "3306",
//         "dbusername": "Karan",
//         "dbpassword": "Password"
//     },
//     "models": [
//         {
//             "name": "Model",
//             "fieldsObject": {
//                 "Field": {
//                     "type": "number",
//                     "allowNull": true,
//                     "defaultValue": "Default field"
//                 },
//                 "Field2": {
//                     "type": "boolean",
//                     "allowNull": true,
//                     "defaultValue": "Default Field2"
//                 }
//             }
//         },
//         {
//             "name": "Model2",
//             "fieldsObject": {
//                 "Karan": {
//                     "type": "date",
//                     "allowNull": true,
//                     "defaultValue": "Banjade"
//                 }
//             }
//         }
//     ]
// }
  const [counter, setCounter] = useState(0);
  const [globalArray, setGlobalArray] = useState([]);
  const [projectSettings, setProjectSettings] = useState({});
  const [databaseSettings, setDatabaseSettings] = useState({});
  const [submit, setSubmit] = useState(false);
  const [models, setModels] = useState([]);
  const [apiObject, setApiObject] = useState({});
  const location = useLocation();
  const buildStatesFromData = (data) => {
    setDatabaseSettings(data.connObj);
    setModels(data.models.map(model => model.name));
    setGlobalArray(data.models.map(model => Object.entries(model.fieldsObject).map(field => ({name: field[0], type: field[1].type, required: field[1].allowNull==="false", unique: field[1].primaryKey==="true", default: field[1].defaultValue}))));
  };
  useEffect(() => {
    // recieve data from previous page using location
    const prevData = location?.state?.prevData;
    if(prevData){
      buildStatesFromData(prevData);
    }
    // buildStatesFromData(prevData);
    // console.log("ga",globalArray);
    // console.log("ds",databaseSettings);
    // console.log("m",models);
    // apiCall(prevData);
  },[])
  useEffect(() => {
    if(counter>2){
      if(models.length<globalArray.length){
        setModels(prev => [...prev, ""])
      }
    }
  },[counter])
  const filterGlobal = (index, fields) => {
    setGlobalArray(prev => {
      return prev.map((value, key) => (key === index ? fields : value));
    });
  };

  const defaultGlobal = () => {
    setGlobalArray(prev => [...prev, [{ name: "", type: " ", required: true, unique: false, default: ""}]]);
  };

  const handleNext = () => {
    setCounter(prev => prev + 1);
  };

  const handleBack = () => {
    if (submit) {
      setSubmit(prev => !prev);
      return;
    }
    setCounter(prev => prev - 1);
  };

  const handleDeleteModel = (e, index) => {
    e.preventDefault();
    const updatedModels = [...models];
    updatedModels.splice(index, 1);
    setModels(updatedModels);
    const updatedGlobalArray = [...globalArray];
    updatedGlobalArray.splice(index, 1);
    setGlobalArray(updatedGlobalArray);
    setCounter(prev => prev - 1);
  };
  const handleSubmit = () => {
    setSubmit(prev => !prev);
    // API call here
    if (submit) {
      const data = []
      // console.log(data);

      globalArray.forEach((model, index) => {
        const fieldsObject = {};
        model.forEach(field => {
          fieldsObject[field.name] = {
            type: field.type,
            allowNull: field.required,
            primaryKey: field.primary,
            defaultValue: field.default,
          };
        });
        data[index] = {
          name: models[index],
          fieldsObject,
        };
      })
      console.log(data);

      setApiObject({
        userId: "64821ee0e02bb85a07ab27d9",
          connObj: databaseSettings,
          models: data,
      });
      alert("Downloading...");
      DownloadProject(apiObject);
    } else {
      alert("Not Submit");
    }
  };

  const returnForms = () => {
    switch (counter) {
      case 0:
        // return <BeginFormComponent projectSettings={projectSettings} setProjectSettings={setProjectSettings} />;
        return <WelcomeComponent/>;
      case 1:
        return <DatabaseFormComponent databaseSettings={databaseSettings} setDatabaseSettings={setDatabaseSettings} />;
      case 2:
        return <SingleModelFieldsFormComponent globalArray={globalArray} setGlobalArray={setGlobalArray} index={0} filterGlobal={filterGlobal} defaultGlobal={defaultGlobal} models={models} setModels={setModels} handleDeleteModel = {handleDeleteModel}/>;
      default:
        return <SingleModelFieldsFormComponent globalArray={globalArray} setGlobalArray={setGlobalArray} index={counter - 2} filterGlobal={filterGlobal} defaultGlobal={defaultGlobal} models={models} setModels={setModels} handleDeleteModel = {handleDeleteModel}/>;
    }
  };

  return (
    <div className="create-content">
      <SidebarComponent className="sidebar" setCounter={setCounter} models={models} />
      <div>
        {!submit ? (
          returnForms()
        ) : (
          <SubmitComponent projectSettings={projectSettings} databaseSettings={databaseSettings} globalArray={globalArray} models = {models}/>
        )}
        <div className="buttonsFooter" style={styles.buttonsFooter}>
          {submit || <button style={styles.button} onClick={handleNext}>Next</button>}
          {counter > 0 && <button style={styles.button} onClick={handleBack}>Back</button>}
          {counter >= 2 && (
            <button style={styles.button} onClick={handleSubmit}>{submit ? "Download" : "Overview"}</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateProjectPage;

const styles = {
  button: {
    margin: "10px auto",
    padding: "10px 20px",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  buttonsFooter:{
    display: "flex",
    justifyContent: "space-between",
    width: "50%",
    margin: "auto",

  }
};
