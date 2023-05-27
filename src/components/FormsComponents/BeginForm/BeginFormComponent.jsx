import React, { useState, useEffect } from "react";
import "./BeginFormComponent.css";

const BeginFormComponent = ({ projectSettings, setProjectSettings }) => {
  const [inputValue, setInputValue] = useState(projectSettings.projectname || "");

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setProjectSettings((prev) => {
        return {
          ...prev,
          projectname: inputValue,
        };
      });
    }, 500);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [inputValue, setProjectSettings]);

  const fieldOnChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="begin-form-component">
      <h1>Project Settings</h1>
      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="projectname">Project Name</label>
              </td>
              <td>
                <input
                  type="text"
                  value={inputValue}
                  onChange={fieldOnChangeHandler}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default BeginFormComponent;
