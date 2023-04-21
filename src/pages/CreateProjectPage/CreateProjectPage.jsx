import React, { useEffect, useState } from "react";
import Components from "../../components";
const { BeginFormComponent, DatabaseFormComponent,ModelsFormComponent } = Components;

const CreateProjectPage = () => {
    const [counter, setCounter] = useState(0);
    const [model, setModel] = useState([]);
    const FormsArray = {
        0: <BeginFormComponent />,
        1: <DatabaseFormComponent />,
        2: <ModelsFormComponent setModel = {setModel} model = {model}/>,
        3: <BeginFormComponent />
    }
    useEffect(() => {
        

    }, [counter])

    return (
        <>
            {
                FormsArray[counter]
            }
            <button onClick={() => setCounter(counter + 1)}>Next</button>
            {counter>0&&<button onClick={() => setCounter(counter - 1)}>Back</button>}

        </>
    )
}

export default CreateProjectPage;
