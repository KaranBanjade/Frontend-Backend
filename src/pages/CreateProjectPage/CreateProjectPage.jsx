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

    let FormsArray = {
        0: <BeginFormComponent />,
        1: <DatabaseFormComponent />,
        2: <SingleModelFieldsFormComponent models = {models} setModels = {setModels} index = {0}/>,
    }

    useEffect(() => {}, [counter, models])

    return (
        <>
        <div className="create-content">
            <SidebarComponent className = "sidebar" models = {models}/>
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
