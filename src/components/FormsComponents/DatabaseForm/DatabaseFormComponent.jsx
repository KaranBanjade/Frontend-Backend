const DatabaseFormComponent = () => {
    return (
        <>
            <h1>
                Database Settings
            </h1>
            <form>
                <table>
                    <tr>
                        <td>
                            <label>Database Name</label>
                        </td>
                        <td>
                            <input type={"text"} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Database Type</label>
                        </td>
                        <td>
                            <select>
                                <option value="MongoDB">MongoDB</option>
                                <option value="PostgreSQL">PostgreSQL</option>
                                <option value="MySQL">MySQL</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Database Host</label>
                        </td>
                        <td>
                            <input type={"text"} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Database Port</label>
                        </td>
                        <td>
                            <input type={"text"} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Database Username</label>
                        </td>
                        <td>
                            <input type={"text"} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Database Password</label>
                        </td>
                        <td>
                            <input type={"text"} />
                        </td>
                    </tr>
                </table>
            </form>
        </>
    )

}

export default DatabaseFormComponent;
