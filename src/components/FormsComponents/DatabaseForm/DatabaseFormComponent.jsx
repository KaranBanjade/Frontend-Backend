import React from "react";

const DatabaseFormComponent = ({ databaseSettings, setDatabaseSettings }) => {
  const fieldOnChangeHandler = (e) => {
    e.preventDefault();
    setDatabaseSettings((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <>
      <h1>Database Settings</h1>
      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="dbname">Database Name</label>
              </td>
              <td>
                <input
                  type="text"
                  name="dbname"
                  value={databaseSettings?.dbname ? databaseSettings.dbname : ""}
                  onChange={(e) => fieldOnChangeHandler(e)}
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
                  value={databaseSettings?.dbtype ? databaseSettings.dbtype : "MySQL"}
                  onChange={(e) => fieldOnChangeHandler(e)}
                >
                  <option value="MongoDB">MongoDB</option>
                  <option value="PostgreSQL">PostgreSQL</option>
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
                  value={databaseSettings?.dbhost ? databaseSettings.dbhost : ""}
                  onChange={(e) => fieldOnChangeHandler(e)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="dbport">Database Port</label>
              </td>
              <td>
                <input
                  type="text"
                  name="dbport"
                  value={databaseSettings?.dbport ? databaseSettings.dbport : ""}
                  onChange={(e) => fieldOnChangeHandler(e)}
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
                  value={databaseSettings?.dbusername ? databaseSettings.dbusername : ""}
                  onChange={(e) => fieldOnChangeHandler(e)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="dbpassword">Database Password</label>
              </td>
              <td>
                <input
                  type="text"
                  name="dbpassword"
                  value={databaseSettings?.dbpassword ? databaseSettings.dbpassword : ""}
                  onChange={(e) => fieldOnChangeHandler(e)}
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
