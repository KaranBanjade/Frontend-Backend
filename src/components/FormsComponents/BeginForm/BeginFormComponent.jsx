const BeginFormComponent = ({projectSettings, setProjectSettings}) => {
    const fieldOnChangeHandler = (e) => {
        e.preventDefault();
        setProjectSettings((prev) => {
          return {
            ...prev,
            [e.target.name]: e.target.value,
          };
        });
      };
    return (
        <>
            <h1>Project Settings</h1>
            <form>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <label htmlFor="projectname">Project Name</label>
                        </td>
                        <td>
                            <input type={"text"} value={projectSettings?.projectname?projectSettings.projectname:""} onChange={(e)=>fieldOnChangeHandler(e)}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </>
    )
}

export default BeginFormComponent;