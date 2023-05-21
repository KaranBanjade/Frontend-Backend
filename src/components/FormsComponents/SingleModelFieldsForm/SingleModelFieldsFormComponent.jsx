import React from "react";
import { useEffect, useState } from "react";
import TabelFormComponent from "../../TableFormComponent/TableFormComponent";
const SingleModelFieldsFormComponent = (props) => {
    const [fields, setFields] = useState([{ name: "karan", type: " ", required: true, unique: false, default: "" },{ name: "karan", type: " ", required: true, unique: false, default: "" }]);
    
    useEffect(() => {
        // console.log(fields);
    }, [fields])
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
            </table>
            </form>
        </>
    )
}

export default SingleModelFieldsFormComponent;