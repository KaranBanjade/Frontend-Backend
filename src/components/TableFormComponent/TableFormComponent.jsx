const React = require('react');


const TabelFormComponent = (props) => {
    const fields = props.fields;
    const setFields = props.setFields;
    const fieldChangeHandler = (e, key) => {
        let data = [...fields];
        const type = e.target.type;
        // console.log(type)
        // console.log(key, e.target.name, e.target.value)
        data[key][e.target.name] = type != "checkbox"?e.target.value:e.target.checked;
        // console.log(fields)
        setFields(data);
    }
    const value = props.value;
    const key = props.index;

    // useEffect(() => {
    //     // console.log(fields)
    // },[fields])
    return (
        <>
            <tr>
                <td>
                    <input name = "name" type="text" value={value.name} onChange={(e) => { fieldChangeHandler(e, key) }} />
                </td>
                <td>
                    <select name = "type" value={value.type} onChange={(e) => { fieldChangeHandler(e, key) }}>
                        <option value="string">String</option>
                        <option value="number">Number</option>
                        <option value="boolean">Boolean</option>
                        <option value="date">Date</option>
                    </select>
                </td>
                <td>
                    <input name = "required" type="checkbox" checked = {value.required} onChange={(e) => { fieldChangeHandler(e, key) }} />
                </td>
                <td>
                    <input name = "unique" type="checkbox" checked = {value.unique} onChange={(e) => { fieldChangeHandler(e, key) }} />
                </td>
                <td>
                    <input name = "default" type="text" value={value.default} onChange={(e) => { fieldChangeHandler(e, key) }} />
                </td>
                    {fields.length>1 && <td><button onClick={(e) => {
                        e.preventDefault();
                        setFields(fields.filter((value, index) => {
                            return index != key;
                        }))
                    }}>-</button></td>
                    }
                <td>
                    <button onClick={(e) => {
                        e.preventDefault();
                        // add one field under the clicked field
                        let data = [...fields];
                        // if(key==0)
                        //     data.splice(key, 0, { name: "", type: " ", required: true, unique: false, default: "" });
                        // else
                            data.splice(key+1, 0, { name: "", type: " ", required: true, unique: false, default: "" });
                        // if spliced at 0

                        setFields(data);
                    }}>+</button>

                </td>
                
            </tr>
        </>
    )
}

export default TabelFormComponent;