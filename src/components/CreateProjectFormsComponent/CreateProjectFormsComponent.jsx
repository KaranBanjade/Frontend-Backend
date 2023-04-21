const forms = {
    1: <>
            <div>
                <h1>Database</h1>
                <form>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        // value={project.name}
                        // onChange={handleInputChange}
                    />
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        // value={project.description}
                        // onChange={handleInputChange}
                    />
                    <button type="submit">Create</button>
                </form>
            </div>
            </>,
    2: <>
            <div>
                <h1>Tables</h1>
                <form>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        // value={project.name}
                        // onChange={handleInputChange}
                    />
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        // value={project.description}
                        // onChange={handleInputChange}
                    />
                    <button type="submit">Create</button>
                </form>
            </div>
            </>,
    3: () => {
        return (
            <div>
                <h1>Models</h1>
                <form>

                </form>
            </div>
        )
    }
};


const CreateProjectFormsComponent = (step) => {
    return (
        <>
            {forms[step]}
        </>
    )
}

export default CreateProjectFormsComponent;