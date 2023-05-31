// {
//   "connObj": {
//     "name": "hackaminer",
//     "user": "facproadmin",
//     "pass": "#facproRDS2022#",
//     "host": "database-1.czb0dk8ckwzf.us-east-1.rds.amazonaws.com"
//   },
//   "models": [
//     {
//       "name": "ModelName",
//       "fieldsObject": {
//         "fieldName": {
//           "type": "UUID",
//           "allowNull": "false",
//           "primaryKey": "true",
//           "defaultValue": "UUIDV4"
//         },
//         "fieldName": {
//           "type": "STRING",
//           "allowNull": "false",
//           "primaryKey": "false",
//           "defaultValue": ""
//         }
//       }
//     }
//   ]
// }



import React, {useEffect, useState } from "react";
import "./CreateProjectPage.css";
import Components from "../../components";
// import SidebarComponent from "../../components/SidebarComponent/SidebarComponent";

const { BeginFormComponent, DatabaseFormComponent, SingleModelFieldsFormComponent, SubmitComponent, WelcomeComponent} = Components;

const CreateProjectPage = () => {
  const [counter, setCounter] = useState(0);
  const [globalArray, setGlobalArray] = useState([]);
  const [projectSettings, setProjectSettings] = useState({});
  const [databaseSettings, setDatabaseSettings] = useState({});
  const [submit, setSubmit] = useState(false);
  const [models, setModels] = useState([]);

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
    //       "name": "ModelName",
    //       "fieldsObject": {
    //         "fieldName": {
    //           "type": "UUID",
    //           "allowNull": "false",
    //           "primaryKey": "true",
    //           "defaultValue": "UUIDV4"
    //         },
    //         "fieldName": {
    //           "type": "STRING",
    //           "allowNull": "false",
    //           "primaryKey": "false",
    //           "defaultValue": ""
    //         }
    //       }
    //     }
  const handleSubmit = () => {
    setSubmit(prev => !prev);
    // API call here
    if (submit) {
      const data = []
      console.log(data);

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
      alert("Download Started");
    } else {
      alert("Submitted");
    }

    console.log("Project Settings: ", projectSettings);
    console.log("Database Settings: ", databaseSettings);
    console.log("Global Array: ", globalArray);
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
      {/* <SidebarComponent className="sidebar" setCounter={setCounter} /> */}
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
            <button style={styles.button} onClick={handleSubmit}>{submit ? "Finish" : "Submit"}</button>
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
