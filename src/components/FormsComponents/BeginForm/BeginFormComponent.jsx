const BeginFormComponent = () => {
    return (
        <>
            <h1>Project Settings</h1>
            <form>
                <table>
                    <tr>
                        <td>
                            <label>Project Name</label>
                        </td>
                        <td>
                            <input type={"text"} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Database Choice</label>
                        </td>
                        <td>
                            <select>
                                <option value="MongoDB">MongoDB</option>
                                <option value="PostgreSQL">PostgreSQL</option>
                                <option value="MySQL">MySQL</option>
                            </select>
                        </td>
                    </tr>
                </table>
            </form>
        </>
    )
}

export default BeginFormComponent;