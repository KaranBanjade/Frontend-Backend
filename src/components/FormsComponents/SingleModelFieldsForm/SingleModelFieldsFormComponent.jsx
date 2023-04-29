import React, { useState } from 'react';
import TableFormComponent from '../../TableFormComponent/TableFormComponent';
const SingleModelFieldsFormComponent = (props) => {
    const models = props?.models;
    const setModels = props?.setModels;
    const index = props?.index;
    const [model, setModel] = useState("");
    // props.models
    // props.setModels
    // push into models
    /*object => {
        name : "",
        fieldsObject :{
            name:{
                type : "",
                required : false,
                unique : false,
                default : ""
            }
        }
    }*/
    return (
        <>
            <h1>Create Table</h1>
            <form style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                height: "100%",
                textAlign: "center"

            }}>
                <label htmlFor="name">Table Name</label>
                <input type="text" name="name" id="name" onChange={(e) => {
                    props.setModel(e.target.value)
                }} />
                <div id="fields" >
                    <table border={{
                        border: "1px solid black"
                    }}>
                        <thead>
                            <tr>
                                <th>Field Name</th>
                                <th>Field Type</th>
                                <th>Required</th>
                                <th>Unique</th>
                                <th>Default</th>
                            </tr>

                            {
                                (models&&models.length>0)
                                ?
                                <TableFormComponent setModels = {setModels} />
                                :
                                <TableFormComponent setModels={setModels}/>
                            }
                        </thead>
                    </table>
                </div>
            </form>
        </>
    )
}

export default SingleModelFieldsFormComponent;