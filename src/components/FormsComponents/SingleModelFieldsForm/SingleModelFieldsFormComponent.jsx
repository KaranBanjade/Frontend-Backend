import React from "react";
import { useEffect, useState } from "react";
import TabelFormComponent from "../../TableFormComponent/TableFormComponent";
const SingleModelFieldsFormComponent = ({ globalArray , setGlobalArray, index, filterGlobal, defaultGlobal}) => {
    const[fields,  setFields] = useState([{ name: "", type: " ", required: true, unique: false, default: "" }]);
    const[count, setCount] = useState(0);

    useEffect(() => {
        console.log("sup")
        console.log(globalArray);
    },[globalArray])

    // }, [fields])
    useEffect(() => {
        alert(index);
        console.log("GA",globalArray[index])
        if(!globalArray[index]){
            alert("global not set");
            setFields([{ name: "", type: " ", required: true, unique: false, default: "" }])
            defaultGlobal();
        }
        else{
            alert("global set");
            setFields(globalArray[index])
        }
    },[])
    // useEffect(() => {
    //     // console.log("GA Comp",globalArray);
    //     // setGlobalArray((prev)=>{
    //     //     console.log("Prev",prev);
    //     //     console.log("GA Comp", globalArray);
    //     //     return prev;
    //     // })
    //     // console.log("F",fields);
    // },[count])
    

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
                                filterGlobal(index, fields);
                                setCount(count+1);
                                console.log("GA Comp", globalArray);
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