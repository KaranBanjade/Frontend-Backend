import React from "react";
import { useEffect, useState } from "react";
import TabelFormComponent from "../../TableFormComponent/TableFormComponent";
const SingleModelFieldsFormComponent = (props) => {
    const globalArray = props.globalArray;
    const setGlobalArray = props.setGlobalArray;
    const index = props.index;
    const[fields,  setFields] = useState([])

    // if(globalArray[index] == undefined)
    //     const [fields, setFields] = useState();
    // else
    //     const [fields, setFields] = useState(globalArray[index]);
    // useEffect(() => {
    //     console.log(globalArray);
    // },[])
    // useEffect(() => {
        
    // }, [fields])
    useEffect(() => {
        console.log(globalArray)
        if(globalArray[index] != undefined)
            setFields(globalArray[index])
        else
            setFields([{ name: "", type: " ", required: true, unique: false, default: "" }])
    },[])

    return (
        <>
            <h1>Fields</h1>
            <form>
            <table border={"1px solid black"}>
                <thead>
                    <tr>
                        <th>Field Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Unique</th>
                        <th>Default</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        fields.map((value, key) => {
                           return <TabelFormComponent key = {key} value={value} index={key} fields = {fields} setFields = {setFields} />
                    })
                }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="5">
                            <button onClick={(e) => {
                                e.preventDefault();
                                console.log(globalArray[index])
                                // setglobalArray[index] to fields
                                // find globalarray[index] and set it to fields
                                setGlobalArray(globalArray.map((value, key) => {
                                    if(key == index)
                                        return fields;
                                    else
                                        return value;
                                }))
                                // setGlobalArray([...globalArray, fields])
                                // setGlobalArray([...globalArray[index], fields])
                                console.log(globalArray)
                                }}>Save</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
            </form>
        </>
    )
}

export default SingleModelFieldsFormComponent;