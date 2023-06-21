import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import "./CreateProjectPage.css";
import { toast } from "react-toastify";
import Components from "../../components";
import SidebarComponent from "../../components/SidebarComponent/SidebarComponent";

const { DatabaseFormComponent, SingleModelFieldsFormComponent, SubmitComponent, WelcomeComponent } = Components;

const CreateProjectPage = () => {
  const Navigate = useNavigate();
  const [counter, setCounter] = useState(0);
  const [globalArray, setGlobalArray] = useState([]);
  const [projectSettings, setProjectSettings] = useState({
    name: "Project"
  });
  const [databaseSettings, setDatabaseSettings] = useState({
    dbname: "database",
    dbtype: "MySQL",
    dbhost: "localhost",
    dbport: "3306",
    dbusername: "admin",
    dbpassword: "",
  });
  const [submit, setSubmit] = useState(false);
  const [models, setModels] = useState([]);
  const [apiObject, setApiObject] = useState({});
  const location = useLocation();

  const buildStatesFromData = (data) => {
    setDatabaseSettings(data.connObj);
    setModels(data.models.map((model) => model.name));
    setGlobalArray(
      data.models.map((model) =>
        Object.entries(model.fieldsObject).map((field) => ({
          name: field[0],
          type: field[1].type,
          required: field[1].allowNull === "false",
          unique: field[1].primaryKey === "true",
          default: field[1].defaultValue,
        }))
      )
    );
  };

  const DownloadProject = (data) => {
    const api = "http://localhost:5000/addNewBackend";
    fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        toast.success("Downloading File");
        a.download = "download.zip";
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
        Navigate("/dashboard");
      })
      .catch((err) => {
        toast.error("Error in downloading file");
        console.log(err);
        return false;
      });
  };

  useEffect(() => {
    const prevData = location?.state?.prevData;
    if (prevData) {
      buildStatesFromData(prevData);
    }
  }, [location]);

  useEffect(() => {
    if (counter > 2) {
      if (models.length < globalArray.length) {
        setModels((prev) => [...prev, ""]);
      }
    }

    const data = globalArray.map((model) => {
      const fieldsObject = {};
      model.forEach((field) => {
        fieldsObject[field.name] = {
          type: field.type,
          allowNull: field.required,
          primaryKey: field.primary,
          unique: field.unique,
          defaultValue: field.default,
        };
      });
      return {
        name: model.name,
        fieldsObject,
      };
    });

    const user = localStorage.getItem("user");
    const userId = JSON.parse(user).id;

    setApiObject({
      userId: userId,
      connObj: databaseSettings,
      models: data,
    });
  }, [models, globalArray, databaseSettings]);

  const filterGlobal = (index, fields) => {
    setGlobalArray((prev) =>
      prev.map((value, key) => (key === index ? fields : value))
    );
  };

  const defaultGlobal = () => {
    setGlobalArray((prev) => [
      ...prev,
      [{ name: "", type: "String", required: false, unique: false, default: "" }],
    ]);
  };

  const handleNext = () => {
    setCounter((prev) => prev + 1);
  };

  const handleBack = () => {
    if (submit) {
      setSubmit((prev) => !prev);
      return;
    }
    setCounter((prev) => prev - 1);
  };

  const handleDeleteModel = (e, index) => {
    e.preventDefault();
    const updatedModels = [...models];
    updatedModels.splice(index, 1);
    setModels(updatedModels);
    const updatedGlobalArray = [...globalArray];
    updatedGlobalArray.splice(index, 1);
    setGlobalArray(updatedGlobalArray);
    setCounter((prev) => prev - 1);
  };

  const handleSubmit = () => {
    const check = globalArray.every((model) =>
      model.every((field) => field.name !== "")
    );
    if (!check) {
      toast.error("Please fill all fields");
      return;
    }
    setSubmit((prev) => !prev);

    if (submit) {
      DownloadProject(apiObject);
    }
  };

  const returnForms = () => {
    switch (counter) {
      case 0:
        return <WelcomeComponent />;
      case 1:
        return (
          <DatabaseFormComponent
            databaseSettings={databaseSettings}
            setDatabaseSettings={setDatabaseSettings}
          />
        );
      case 2:
        return (
          <SingleModelFieldsFormComponent
            globalArray={globalArray}
            setGlobalArray={setGlobalArray}
            index={0}
            filterGlobal={filterGlobal}
            defaultGlobal={defaultGlobal}
            models={models}
            setModels={setModels}
            handleDeleteModel={handleDeleteModel}
          />
        );
      default:
        return (
          <SingleModelFieldsFormComponent
            globalArray={globalArray}
            setGlobalArray={setGlobalArray}
            index={counter - 2}
            filterGlobal={filterGlobal}
            defaultGlobal={defaultGlobal}
            models={models}
            setModels={setModels}
            handleDeleteModel={handleDeleteModel}
          />
        );
    }
  };

  return (
    <div className="create-content">
      {counter > 0 && window.innerWidth>1100&& <SidebarComponent className="sidebar" setCounter={setCounter} models={models} />}
      <div id="forms-collection">
        {!submit ? (
          returnForms()
        ) : (
          <SubmitComponent
            projectSettings={projectSettings}
            databaseSettings={databaseSettings}
            globalArray={globalArray}
            models={models}
          />
        )}
        <div className="buttonsFooter" style={styles.buttonsFooter}>
          {!submit && (
            counter>0?<button style={styles.button} onClick={handleNext} >
               Next</button>:<button style={{
                padding: "10px 20px",
                borderRadius: "5px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "16px",
                outline: "none",
                marginLeft: "20rem",

               }} onClick={handleNext} >
                Get Started</button>
          )}
          {counter > 0 && (
            <button style={styles.button} onClick={handleBack}>
              Back
            </button>
          )}
          {counter >= 2 && (
            <button style={styles.button} onClick={handleSubmit}>
              {submit ? "Download" : "Overview"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateProjectPage;

const styles = {
  button: {
    padding: "10px 20px",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
    outline: "none",
    margin: "1rem",

  },
  buttonsFooter: {
    display: "flex",
    justifyContent: "space-between",
    width: "50%",
    margin: "auto",

  },
};
