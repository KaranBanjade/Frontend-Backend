import React from 'react';

const TabelFormComponent = (props) => {
  const { value, index, fields, setFields } = props;

  const fieldChangeHandler = (e, key) => {
    const { name, type, value, checked } = e.target;
    let data = [...fields];
    data[key][name] = type === 'checkbox' ? checked : value;
    setFields(data);
  };

  const styles = {
    row: {
      textAlign: 'center',
    },
    input: {
      padding: '0.5rem',
      borderRadius: '3px',
      border: '1px solid #ccc',
      width: '100%',
      boxSizing: 'border-box',
    },
    select: {
      padding: '0.5rem',
      borderRadius: '3px',
      border: '1px solid #ccc',
      width: '100%',
      boxSizing: 'border-box',
    },
    button: {
      padding: '0.5rem',
      borderRadius: '3px',
      backgroundColor: '#007bff',
      color: '#ffffff',
      border: 'none',
      cursor: 'pointer',
      margin: '0.2rem',
    },
  };

  return (
    <tr style={styles.row}>
      <td>
        <input name="name" type="text" value={value.name} onChange={(e) => fieldChangeHandler(e, index)} style={styles.input} />
      </td>
      <td>
        <select name="type" value={value.type || "string"} onChange={(e) => fieldChangeHandler(e, index)} style={styles.select}>
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
        <input name="default" type="text" value={value.default} onChange={(e) => fieldChangeHandler(e, index)} style={styles.input} />
      </td>
      {fields.length > 1 && (
        <>
          <td>
            <button onClick={(e) => {
              e.preventDefault();
              setFields(fields.filter((_, idx) => idx !== index));
            }} style={styles.button}>-</button>
          </td>
        </>
      )}
      <td>
        <button onClick={(e) => {
          e.preventDefault();
          const newData = [...fields];
          newData.splice(index + 1, 0, { name: '', type: 'String', required: false, unique: false, default: '' });
          setFields(newData);
        }} style={styles.button}>+</button>
      </td>
    </tr>
  );
};

export default TabelFormComponent;
