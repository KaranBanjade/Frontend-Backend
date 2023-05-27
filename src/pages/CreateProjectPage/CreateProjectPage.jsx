import React, { useEffect, useState } from "react";
import "./CreateProjectPage.css";
import Components from "../../components";
import SidebarComponent from "../../components/SidebarComponent/SidebarComponent";
const { BeginFormComponent, DatabaseFormComponent,ModelsFormComponent,SingleModelFieldsFormComponent } = Components;
// {
//     "connObj": {
//       "name": "hackaminer",
//       "user": "facproadmin",
//       "pass": "#facproRDS2022#",
//       "host": "database-1.czb0dk8ckwzf.us-east-1.rds.amazonaws.com"
//     },
//     "models": [
//       {
//         "name": "Hospital",
//         "fieldsObject": {
//           "id": {
//             "type": "UUID",
//             "allowNull": "false",
//             "primaryKey": "true",
//             "defaultValue": "UUIDV4"
//           },
//           "name": {
//             "type": "STRING",
//             "allowNull": "false",
//             "primaryKey": "false",
//             "defaultValue": ""
//           }
//         }
//       }
//     ]
//   }

const CreateProjectPage = () => {
    const [counter, setCounter] = useState(0);
    const [models, setModels] = useState([]);
    //#todo
    // add props to recieve old data and set it to global array if needed
    const [globalArray, setGlobalArray] = useState([]);
    const filterGlobal = (index, fields) => {
        alert("filter");
        setGlobalArray((prev)=>{
            console.log("prev",prev)
            let dat = prev.map((value, key) => {
                console.log(value)
                if(key == index)
                    return fields;
                else
                    return value;
            })
            return dat;
        })
    }
    const defaultGlobal = () => {
        alert("default")
        setGlobalArray([...globalArray, [{ name: "", type: " ", required: true, unique: false, default: "" }]]);
    }
    // const [FormsArray, setFormsArray] = useState([<BeginFormComponent />, <DatabaseFormComponent />, <SingleModelFieldsFormComponent globalArray = {globalArray} setGlobalArray = {setGlobalArray} index = {0} filterGlobal = {filterGlobal} defaultGlobal = {defaultGlobal}/>])
    // let FormsArray = [
    //     <BeginFormComponent />,
    //     <DatabaseFormComponent />,
    //     <SingleModelFieldsFormComponent models = {models} setModels = {setModels} index = {0}/>
    // ]
    // useEffect(() => {
    //     setFormsArray((prev)=>{
    //         prev.map((value, key) => {
    //             if(key > 1){
    //                 return <SingleModelFieldsFormComponent globalArray = {globalArray} setGlobalArray = {setGlobalArray} index = {key-2} filterGlobal = {filterGlobal} defaultGlobal = {defaultGlobal}/>
    //             }
    //             else
    //                 return value;
    //         })
    //         return prev;
    //     })
    // }, [globalArray])
    useEffect(() => {
    }, [models,globalArray,counter])
    // useEffect(() => {
    //     // console.log(FormsArray)
    //     if(counter == FormsArray.length&&FormsArray[counter]==undefined){
    //         console.log("Updated");
    //         setFormsArray([...FormsArray, <SingleModelFieldsFormComponent globalArray = {globalArray} setGlobalArray = {setGlobalArray} index = {counter-2} />])}
    //         // FormsArray.push(<SingleModelFieldsFormComponent model = {models} setModel = {setModels}  index = {counter} />)
    // }, [counter])
    const returnForms = ()=>{
        if(counter==0)
            return <BeginFormComponent />
        else if(counter==1)
            return <DatabaseFormComponent />
        else if(counter==2)
            return <SingleModelFieldsFormComponent globalArray = {globalArray} setGlobalArray = {setGlobalArray} index = {0} filterGlobal = {filterGlobal} defaultGlobal = {defaultGlobal}/>
        else if(counter>2){
            // sdefaultGlobal();
            return <SingleModelFieldsFormComponent globalArray = {globalArray} setGlobalArray = {setGlobalArray} index = {counter-2} filterGlobal = {filterGlobal} defaultGlobal = {defaultGlobal}/>}
    }
    return (
        <>
        <div className="create-content">
            {/* <SidebarComponent className = "sidebar" models = {models}/> */}
            <div>
                {
                    <>
                    <h1>counter {counter}</h1>
                    {/* <h1>Size {FormsArray.length}</h1> */}
                    </>
                }
            {
                returnForms()
            }
            <button onClick={() => {
                // setCounter(counter + 1);                
                setCounter(counter + 1);
                }}>Next</button>
            {counter>0&&<button onClick={() => setCounter(counter - 1)}>Back</button>}
            </div>
        </div>
        </>
        
    )
}

export default CreateProjectPage;
