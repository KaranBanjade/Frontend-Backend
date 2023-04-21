const DatabaseFormComponent = () => {
    return (
        <>
        <h1>
            Database Settings
        </h1>
        <form>
            <label>Database Name</label>
            <input type={"text"}/>
            <br />
            <label>Database Type</label>
            <select>
                <option value="MongoDB">MongoDB</option>
                <option value="PostgreSQL">PostgreSQL</option>
                <option value="MySQL">MySQL</option>
            </select>
            <br />
            <label>Database Host</label>
            <input type={"text"}/>
            <br />
            <label>Database Port</label>
            <input type={"text"}/>
            <br />
            <label>Database Username</label>
            <input type={"text"}/>
            <br />
            <label>Database Password</label>
            <input type={"text"}/>
            <br />
        </form>
        </>
    )
    
}

export default DatabaseFormComponent;