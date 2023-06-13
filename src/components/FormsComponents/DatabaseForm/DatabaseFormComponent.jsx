import React, { useState, useEffect } from "react";

const DatabaseFormComponent = ({ databaseSettings, setDatabaseSettings }) => {
  const [inputValues, setInputValues] = useState({});
  useEffect(() => {
    setInputValues(databaseSettings);
  }, []);
  // useEffect(() => {
  //   // const timer = setTimeout(() => {
  //     setDatabaseSettings(inputValues);
  //   // }, 500);

  //   // return () => {
  //   //   clearTimeout(timer);
  //   // };
  // }, [inputValues, setDatabaseSettings]);


  const fieldOnChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    setDatabaseSettings(inputValues);
    console.log("datanase Settings\n",databaseSettings);
    console.log("inputValues\n",inputValues);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Database Settings</h1>
      <form>
        <table style={{ margin: "auto" }}>
          <tbody>
            <tr>
              <td>
                <label htmlFor="dbname">Database Name</label>
              </td>
              <td>
                <input
                  type="text"
                  name="dbname"
                  value={inputValues.dbname || ""}
                  onChange={fieldOnChangeHandler}
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "3px",
                    border: "1px solid #cccccc",
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="dbtype">Database Type</label>
              </td>
              <td>
                <select
                  name="dbtype"
                  value={inputValues.dbtype || "MySQL"}
                  onChange={fieldOnChangeHandler}
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "3px",
                    border: "1px solid #cccccc",
                  }}
                >
                  {/* <option value="PostgreSQL">PostgreSQL</option> */}
                  <option value="MySQL">MySQL</option>
                </select>

              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="dbhost">Database Host</label>
              </td>
              <td>
                <input
                  type="text"
                  name="dbhost"
                  value={inputValues.dbhost || ""}
                  onChange={fieldOnChangeHandler}
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "3px",
                    border: "1px solid #cccccc",
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="dbport">Database Port</label>
              </td>
              <td>
                <input
                  type="number"
                  name="dbport"
                  value={inputValues.dbport || "3306"}
                  onChange={fieldOnChangeHandler}
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "3px",
                    border: "1px solid #cccccc",
                  }}
                />

              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="dbusername">Database Username</label>
              </td>
              <td>
                <input
                  type="text"
                  name="dbusername"
                  value={inputValues.dbusername || ""}
                  onChange={fieldOnChangeHandler}
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "3px",
                    border: "1px solid #cccccc",
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="dbpassword">Database Password</label>
              </td>
              <td>
                <input
                  type="password"
                  name="dbpassword"
                  value={inputValues.dbpassword || ""}
                  onChange={fieldOnChangeHandler}
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "3px",
                    border: "1px solid #cccccc",
                  }}
                  placeholder="Not Suggested"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
};

export default DatabaseFormComponent;
