import React, { useEffect, useState } from "react";
import TabelFormComponent from "../../TableFormComponent/TableFormComponent";

const SingleModelFieldsFormComponent = ({ globalArray, index, filterGlobal, defaultGlobal }) => {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    if (globalArray[index] !== undefined) {
      setFields([...globalArray[index]]);
    } else {
      setFields([{ name: "", type: "", required: true, unique: false, default: "" }]);
      defaultGlobal();
    }
  }, [globalArray, index, defaultGlobal]);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Fields</h1>
      <form>
        <table style={{ margin: "auto" }}>
          <thead>
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
