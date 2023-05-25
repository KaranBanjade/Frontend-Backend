import React from "react";
import { useEffect, useState } from "react";
import TabelFormComponent from "../../TableFormComponent/TableFormComponent";
const SingleModelFieldsFormComponent = ({ globalArray , setGlobalArray, index}) => {
    const[fields,  setFields] = useState([]);
    const[count, setCount] = useState(0);
        
    // }, [fields])
    useEffect(() => {
        // console.log("GA",globalArray[index])
        if(globalArray[index] != undefined){
            alert("global set");
            setFields(globalArray[index])
            // console.log(fields, globalArray[index])
        }
        else{
            // set globalArray[index] to fields
            
            // setGlobalArray()
            setFields([{ name: "", type: " ", required: true, unique: false, default: "" }])
            setGlobalArray((prev)=>{
                let dat = prev;
                dat.push([{ name: "", type: " ", required: true, unique: false, default: "" }]);
                return dat;
            });
        }
    },[])
    useEffect(() => {
        console.log(globalArray);
        // console.log("F",fields);
    },[count])
    

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
                        {/* gloabal [field,[{},{}],[{},{}]]
                         [{},{}] */}
                        <td colSpan="5">
                            <button onClick={(e) => {
                                e.preventDefault();
                                // globalArray[index] to fields
                                // find globalarray[index] and set it to fields
                                // console.log(fields)
                                setGlobalArray(globalArray.map((value, key) => {
                                    // console.log(key, index);
                                    // console.log("Fields", fields,"\nGloabl", globalArray);
                                    // console.log("key", key, "index", index)
                                    // console.log(key==index)
                                    if(key == index)
                                        return fields;
                                    else
                                        return value;
                                }))
                                setCount(count+1);
                                // console.log("GA", globalArray);
                                // setGlobalArray([...globalArray, fields])
                                // setGlobalArray([...globalArray[index], fields])
                                // console.log(globalArray)
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