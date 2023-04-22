const SingleModelFieldsFormComponent = (props) => {
    return (
        <>
            <h1>Models Settings</h1>
            <form>
                {
                    props.model.map((value, key) => {
                        return (<>
                            <label>Field</label>
                            <input type={"text"} id={key} name={value} value={value} onChange={(e) => {
                                e.preventDefault();
                                props.setModel(props.model.map((value, key) => {
                                    if (key == e.target.id) {
                                        return e.target.value;
                                    }
                                    else {
                                        return value;
                                    }
                                }))
                            }} />
                            {
                                props.model.length > 0
                                &&
                                <button id={key} onClick={
                                    (e) => {
                                        e.preventDefault();
                                        props.setModel(props.model.filter((value, key) => {
                                            return key != e.target.id;
                                        }))
                                    }
                                } >remove</button>}
                            <br />
                        </>)
                    })
                }
                <button onClick={(e) => {
                    e.preventDefault();
                    props.setModel([...props.model, ""]);
                }}>Add Model</button>

            </form>

        </>
    )
}

export default SingleModelFieldsFormComponent;