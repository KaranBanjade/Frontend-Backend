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
      <h1>Fields</h1>
      <form>
        <table border={"1px solid black"}>
          <thead>
            <tr>
              <th>Field Name</th>
              <th>Type</th>
              <th>Required</th>
              <th>Unique</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            {fields.map((value, key) => {
              return <TabelFormComponent key={key} value={value} index={key} fields={fields} setFields={setFields} />;
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="5">
                <button
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