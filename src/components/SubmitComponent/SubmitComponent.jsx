const SubmitComponent = ({projectSettings,databaseSettings}) => {
    return(
        <div className="submit-component">
            <h1>Overview Of Project</h1>
            <table className="submit-table">
                <thead>
                    <tr>
                        <td>
                        <h2>Project Settings</h2>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Project Name </strong></td>
                        <td>{projectSettings.projectname}</td>
                    </tr>
                </tbody>
            </table>
            <table className="submit-table">
                <thead>
                    <tr>
                        <td>
                        <h2>Database Settings</h2>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Database Name </strong></td>
                        <td>{databaseSettings.dbname}</td>
                    </tr>
                    <tr>
                        <td><strong>Database Type </strong></td>
                        <td>{databaseSettings.dbtype}</td>
                    </tr>
                    <tr>
                        <td><strong>Database Host </strong></td>
                        <td>{databaseSettings.dbhost}</td>
                    </tr>
                    <tr>
                        <td><strong>Database Port </strong></td>
                        <td>{databaseSettings.dbport}</td>
                    </tr>
                    <tr>
                        <td><strong>Database Username </strong></td>
                        <td>{databaseSettings.dbusername}</td>
                    </tr>
                    <tr>
                        <td><strong>Database Password </strong></td>
                        <td>{databaseSettings.dbpassword}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SubmitComponent;