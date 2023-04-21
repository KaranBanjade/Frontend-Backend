const BeginFormComponent = () => {
    return (
        <>
        <h1>Project Settings</h1>
        <form>
            <label>Project Name</label>
            <input type={"text"}/>
            <br />
            <label>Database Choice</label>
            <select>
                <option value="MongoDB">MongoDB</option>
                <option value="PostgreSQL">PostgreSQL</option>
                <option value="MySQL">MySQL</option>
            </select>
        </form>
        </>
    )
}

export default BeginFormComponent;