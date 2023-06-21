import React from 'react';

const TabelFormComponent = (props) => {
  const { value, index, fields, setFields, filterGlobal, filterIndex } = props;

  const fieldChangeHandler = (e, key) => {
    const { name, type, value, checked } = e.target;
    let data = [...fields];
    data[key][name] = type === 'checkbox' ? checked : value;
    setFields(data);
    filterGlobal(filterIndex, fields);
  };

  const styles = {
    row: {
      textAlign: 'center'
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
      margin: '0.5rem',
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
        <select name="type" value={value.type || "STRING"} onChange={(e) => fieldChangeHandler(e, index)} style={{
          ...styles.input,
          height: '40px',
          marginTop: '-20px',
        }}>
            <option value="STRING">String</option>
          <option value="INTEGER">Integer</option>
          <option value="UUID">UUID</option>
          <option value="UUIDV4">UUIDv4</option>
          <option value="ENUM">Enum</option>
          <option value="BOOLEAN">Boolean</option>
          <option value="DATE">Date</option>
          <option value="TEXT">Text</option>
          <option value="FLOAT">Float</option>
          <option value="DOUBLE">Double</option>
          <option value="DECIMAL">Decimal</option>
          <option value="ARRAY">Array</option>
          <option value="JSON">JSON</option>
          <option value="DOUBLE PRECISION">Double Precision</option>
          <option value="TIME">Time</option>
          <option value="TINYINT">Tinyint</option>
          <option value="SMALLINT">Smallint</option>
          <option value="MEDIUMINT">Mediumint</option>
          <option value="BIGINT">Bigint</option>
          <option value="UNSIGNED INTEGER">Unsigned Integer</option>
          <option value="UNSIGNED BIGINT">Unsigned Bigint</option>
          <option value="CHAR">Char</option>
          <option value="DATEONLY">Dateonly</option>
          <option value="NOW">Now</option>
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
