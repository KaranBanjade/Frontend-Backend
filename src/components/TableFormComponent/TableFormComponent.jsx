import React from "react";
import { useEffect, useState} from "react";

const TableFormComponent = (props) => {
    /*
   fieldsObject :{
            name:{
                type : "",
                required : false,
                unique : false,
                default : ""
            }
        }
    */

    const setModels = props?.setModels;
    const [fields, setFields] = useState({});
    
    const [currentField, setCurrentField] = useState("");
    return (
        <>
            <tr>
                <td>
                    <input type="text" 
                    // value={fieldName?fieldName:'' }   
                    onChange={(e) => {
                        setFields({
                            [e.target.value]: {
                                type: "",
                                required: false,
                                unique: false,
                                default: ""
                            }
                        }
                        )
                        setCurrentField(e.target.value);
                    }} />
                </td>
                <td>
                    <select 
                    // value={fieldsObject[fieldName]?.type?fieldsObject[fieldName].type:'string'} 
                    onChange={(e) => {
                        setFields((prev) => {
                            const updatedField = {
                                ...prev[currentField],
                                type: e.target.value,
                            };
                            return {
                                ...prev,
                                [currentField]: updatedField,
                            };
                        });
                    }} >
                        <option value="string">String</option>
                        <option value="number">Number</option>
                        <option value="boolean">Boolean</option>
                        <option value="date">Date</option>
                    </select>
                </td>
                <td>
                    <input 
                    // value={fieldsObject[fieldName].required?fieldsObject[fieldName].required:'off'} 
                    type="checkbox" onChange={(e) => {
                        setFields((prev) => {
                            const updatedField = {
                                ...prev[currentField],
                                required: e.target.value,
                            };
                            return {
                                ...prev,
                                [currentField]: updatedField,
                            };
                        });
                    }} />
                </td>
                <td>
                    <input type="checkbox" 
                    // value = {fieldsObject[fieldName].unique?fieldsObject[fieldName].unique:'off'} 
                    onChange={(e) => {
                        setFields((prev) => {
                            const updatedField = {
                                ...prev[currentField],
                                unique: e.target.value,
                            };
                            return {
                                ...prev,
                                [currentField]: updatedField,
                            };
                        });
                    }} />
                </td>
                <td>
                    <input type="text" 
                    // value = {fieldsObject[fieldName].unique?fieldsObject[fieldName].unique:''} 
                    onChange={(e) => {
                        setFields((prev) => {
                            const updatedField = {
                                ...prev[currentField],
                                default: e.target.value,
                            };
                            return {
                                ...prev,
                                [currentField]: updatedField,
                            };
                        });
                    }} />
                </td>
                <td>
                    <button onClick={(e) => {
                        e.preventDefault();
                        const obj = {
                            name: currentField,
                            
                        }
                    }}>+</button>
                </td>
            </tr>
        </>
    )
}

export default TableFormComponent;