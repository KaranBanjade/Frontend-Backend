import React, { useState, useEffect } from "react";
const ModelsFormComponent = (props) => {
    const [models, setModels] = useState([""]);
    useEffect(() => {
        if(props.model.length>0){
            setModels(props.model)
        }
    },[])
    useEffect(() => {
        console.log(models)
        props.setModel(models)
    }, [models])
    // console.log(models);
    return (
        <>
            <h1>Models Settings</h1>
            <form>
                {
                    models.map((value, key) => {
                        return (<>
                            <label>Model Name</label>
                            <input type={"text"} id={key} name = {value} value = {value} onChange = {(e)=>{
                                e.preventDefault();
                                setModels(models.map((value,key)=>{
                                    if(key == e.target.id){
                                        return e.target.value;
                                    }
                                    else{
                                        return value;
                                    }
                                }))
                            }}/>
                            {
                                models.length > 0
                                &&
                                <button id = {key} onClick={
                                    (e) => {
                                        e.preventDefault();
                                        setModels(models.filter((value, key) => {
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
                setModels([...models, ""]);
            }}>Add Model</button>

        </form>

        </>
    )
}
export default ModelsFormComponent;