import React, { useEffect, useState } from "react";
import TabelFormComponent from "../../TableFormComponent/TableFormComponent";

const SingleModelFieldsFormComponent = ({ globalArray, index, filterGlobal, defaultGlobal, models, setModels, handleDeleteModel }) => {
  const [fields, setFields] = useState([]);
  const [modelName, setModelName] = useState(""); // New state variable for modelName

  useEffect(() => {
    models[index]?setModelName(models[index]):setModelName("");

    if (globalArray[index] !== undefined) {
      setFields([...globalArray[index]]);
    } else {
      setFields([{ name: "", type: "", required: true, unique: false, default: "" }]);
      defaultGlobal();
    }
  }, [globalArray, index, defaultGlobal, models]);

  const modelChangeHandler = (e) => {
    setModelName(e.target.value); 
    const updatedModels = [...models];
    updatedModels[index] = e.target.value;
    setModels(updatedModels);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Model {index+1}</h1>
      <form>
        <table style={{ margin: "auto" }}>
          <thead>
            <tr>
              <td>
                <label htmlFor="modelName">Model Name:</label>
              </td>
              <td>
                <input type="text" id="modelName" name="modelName" onChange={(e)=>modelChangeHandler(e)} value={modelName}/>
              </td>
              {
                models.length > 1&& <td>
                <button style={styles.saveButton} onClick={(e) => { handleDeleteModel(e, index); }} > Delete Model </button>
              </td>}
              </tr>
            <tr>
              <th style={styles.tableHeader}>Field Name</th>
              <th style={styles.tableHeader}>Type</th>
              <th style={styles.tableHeader}>Required</th>
              <th style={styles.tableHeader}>Unique</th>
              <th style={styles.tableHeader}>Default</th>
            </tr>
          </thead>
          <tbody>
            {fields.map((value, key) => {
              return <TabelFormComponent key={key} value={value} index={key} fields={fields} setFields={setFields} />;
            })}
          </tbody>
          <tfoot>
            <tr >
              <td>
                <button
                  style={styles.saveButton}
                  onClick={(e) => {
                    e.preventDefault();
                    filterGlobal(index, fields);
                  }}
                >
                  Save
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </form>
    </>
  );
};

export default SingleModelFieldsFormComponent;

const styles = {
  tableHeader: {
    textAlign: "center",
  },
  saveButton: {
    width: "100%",
    padding: "10px",
    borderRadius: "3px",
    backgroundColor: "#007bff",
    color: "#ffffff",
    border: "none",
    cursor: "pointer",
    textAlign: "center",
  },
};
