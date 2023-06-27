import React, { useEffect, useState } from "react";
import TabelFormComponent from "../../TableFormComponent/TableFormComponent";

const SingleModelFieldsFormComponent = ({ globalArray, index, filterGlobal, defaultGlobal, models, setModels, handleDeleteModel }) => {
  const [fields, setFields] = useState([]);
  const [modelName, setModelName] = useState("");

  useEffect(() => {
    models[index] ? setModelName(models[index]) : setModelName("");

    if (globalArray[index] !== undefined) {
      setFields([...globalArray[index]]);
    } else {
      setFields([{ name: "", type: "", allowNull: true, unique: false, default: "" }]);
      defaultGlobal();
    }
  }, [globalArray, index, models]);

  const modelChangeHandler = (e) => {
    setModelName(e.target.value);
    const updatedModels = [...models];
    updatedModels[index] = e.target.value;
    setModels(updatedModels);
  };

  const styles = {
    container: {
      textAlign: "center",
    },
    heading: {
      margin: "1rem",
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    form: {
      margin: "auto",
    },
    table: {
      border: "2px solid rgb(224, 71, 76)",
      margin: "auto",
    },
    tableHeader: {
      textAlign: "center",
      fontWeight: "bold",
    },
    input: {
      padding: "0.5rem",
      borderRadius: "3px",
      border: "1px solid #ccc",
      width: "100%",
      boxSizing: "border-box",
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
    deleteButton: {
      backgroundColor: "#dc3545",
      color: "#ffffff",
      border: "none",
      borderRadius: "3px",
      padding: "0.5rem",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Model {index + 1}</h1>
      <form style={styles.form}>
        <table style={{
          ...styles.table,
          backgroundColor: "#f5f5f5",
        }}>
          <thead>
            <tr>
              <td>
                <label htmlFor="modelName">Model Name:</label>
              </td>
              <td>
                <input type="text" id="modelName" name="modelName" onChange={(e) => modelChangeHandler(e)} value={modelName} style={styles.input} />
              </td>
              {models.length > 1 && (
                <td>
                  <button style={styles.deleteButton} onClick={(e) => { handleDeleteModel(e, index); }} > Delete Model </button>
                </td>
              )}
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
              return <TabelFormComponent key={key} value={value} index={key} fields={fields} setFields={setFields} filterGlobal={filterGlobal} filterIndex={index} />;
            })}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default SingleModelFieldsFormComponent;
