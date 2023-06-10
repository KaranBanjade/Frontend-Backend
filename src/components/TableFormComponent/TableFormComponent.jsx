import React from 'react';

const TabelFormComponent = (props) => {
  const { value, index, fields, setFields } = props;

  const fieldChangeHandler = (e, key) => {
    const { name, type, value, checked } = e.target;
    let data = [...fields];
    data[key][name] = type === 'checkbox' ? checked : value;
    setFields(data);
  };

  return (
    <tr>
      <td>
        <input name="name" type="text" value={value.name} onChange={(e) => fieldChangeHandler(e, index)} />
      </td>
      <td>
        <select name="type" value={value.type||"string"} onChange={(e) => fieldChangeHandler(e, index)}>
          <option value="string">String</option>
          <option value="number">Number</option>
          <option value="boolean">Boolean</option>
          <option value="date">Date</option>
        </select>
      </td>
      <td>
        <input name="required" type="checkbox" checked={value.required} onChange={(e) => fieldChangeHandler(e, index)} />
      </td>
      <td>
        <input name="unique" type="checkbox" checked={value.unique} onChange={(e) => fieldChangeHandler(e, index)} />
      </td>
      <td>
        <input name="default" type="text" value={value.default} onChange={(e) => fieldChangeHandler(e, index)} />
      </td>
      {fields.length > 1 && (
        <>
          <td>
            <button onClick={(e) => {
              e.preventDefault();
              setFields(fields.filter((_, idx) => idx !== index));
            }}>-</button>
          </td>
        </>
      )}
       <td>
            <button onClick={(e) => {
              e.preventDefault();
              const newData = [...fields];
              newData.splice(index + 1, 0, { name: '', type: '', required: false, unique: false, default: '' });
              setFields(newData);
            }}>+</button>
          </td>
    </tr>
  );
};

export default TabelFormComponent;
