import React, { useEffect, useState } from "react";
import "./CreateProjectPage.css";
import Components from "../../components";
import SidebarComponent from "../../components/SidebarComponent/SidebarComponent";
const { BeginFormComponent, DatabaseFormComponent,ModelsFormComponent,SingleModelFieldsFormComponent } = Components;

const CreateProjectPage = () => {
    const [counter, setCounter] = useState(0);
    const [model, setModel] = useState([]);
    // const [fieldsLength, setFieldsLength] = useState(0);
    
    let FormsArray = {
        0: <BeginFormComponent />,
        1: <DatabaseFormComponent />,
        2: <ModelsFormComponent setModel = {setModel} model = {model}/>,
        3: <SingleModelFieldsFormComponent model = {model} setModel = {setModel}/>
    }
    // useEffect(() => {
    //     if(model.length!=fieldsLength){
    //         setFieldsLength(model.length);
    //     }
    //     const fieldsObject = {}
    //     model.map((value,key)=>{
    //         fieldsObject.push(<SingleModelFieldsFormComponent model = {value}/>);
    //     })
    //     FormsArray[3] = fieldsObject;
    // }, [model])

    useEffect(() => {}, [counter, model])

    return (
        <>
        <div className="create-content">
            <SidebarComponent className = "sidebar" models = {model}/>
            <div>
            {
                FormsArray[counter]
            }
            <button onClick={() => setCounter(counter + 1)}>Next</button>
            {counter>0&&<button onClick={() => setCounter(counter - 1)}>Back</button>}
            </div>
        </div>
        </>
        
    )
}

export default CreateProjectPage;
