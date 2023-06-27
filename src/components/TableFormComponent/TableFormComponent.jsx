import React, { useEffect } from 'react';

const TabelFormComponent = (props) => {
  const { value, index, fields, setFields, filterGlobal, filterIndex } = props;
  useEffect(() => {},[fields])
  const  getInputType = () => {
    switch (value.type.toUpperCase()) {
      case 'STRING':
        return 'text';
      case 'INTEGER':
      case 'TINYINT':
      case 'SMALLINT':
      case 'MEDIUMINT':
      case 'BIGINT':
      case 'UNSIGNED INTEGER':
      case 'UNSIGNED BIGINT':
        return 'number';
      case 'UUID':
      case 'UUIDV4':
      case 'ENUM':
      case 'BINARY':
      case 'VARBINARY':
      case 'BIT':
      case 'CHAR':
        return 'text';
      case 'BOOLEAN':
        return 'checkbox';
      case 'DATE':
      case 'DATEONLY':
      case 'NOW':
        return 'date';
      case 'TEXT':
        return 'textarea';
      case 'FLOAT':
      case 'DOUBLE':
      case 'DECIMAL':
      case 'REAL':
      case 'DOUBLE PRECISION':
        return 'number';
      case 'BLOB':
      case 'JSON':
      case 'JSONB':
      case 'HSTORE':
        return 'string';
      case 'GEOMETRY':
      case 'GEOGRAPHY':
        return 'text';
      case 'CIDR':
      case 'INET':
      case 'MACADDR':
        return 'text';
      case 'RANGE':
        return 'range';
      default:
        return 'text';
    }
  }
  const getPlaceholder = () => {
    switch (value.type.toUpperCase()) {
      case 'STRING':
        return 'Enter a string';
      case 'INTEGER':
      case 'TINYINT':
      case 'SMALLINT':
      case 'MEDIUMINT':
      case 'BIGINT':
      case 'UNSIGNED INTEGER':
      case 'UNSIGNED BIGINT':
        return 'Enter an integer';
      case 'UUID':
        return 'Enter a UUID';
      case 'UUIDV4':
        return 'Enter a UUIDv4';
      case 'ENUM':
      case 'ARRAY':
        return 'Enter an option or array';
      case 'BOOLEAN':
        return 'Check or uncheck';
      case 'DATE':
        return 'Select a date';
      case 'TEXT':
        return 'Enter text';
      case 'FLOAT':
      case 'DOUBLE':
      case 'DECIMAL':
        return 'Enter a decimal number';
      case 'BLOB':
        return 'Select a file (BLOB)';
      case 'VIRTUAL':
        return 'Enter a virtual value';
      case 'JSON':
        return 'Enter JSON data';
      case 'JSONB':
        return 'Enter JSONB data';
      case 'GEOMETRY':
        return 'Enter a geometry';
      case 'GEOGRAPHY':
        return 'Enter a geography';
      case 'CIDR':
        return 'Enter a CIDR value';
      case 'INET':
        return 'Enter an INET value';
      case 'MACADDR':
        return 'Enter a MAC address';
      case 'RANGE':
        return 'Enter a range';
      case 'REAL':
      case 'DOUBLE PRECISION':
        return 'Enter a real number';
      case 'TIME':
        return 'Enter a time';
      case 'TINYINT':
        return 'Enter a tiny integer';
      case 'SMALLINT':
        return 'Enter a small integer';
      case 'MEDIUMINT':
        return 'Enter a medium integer';
      case 'BIGINT':
        return 'Enter a big integer';
      case 'UNSIGNED INTEGER':
        return 'Enter an unsigned integer';
      case 'UNSIGNED BIGINT':
        return 'Enter an unsigned big integer';
      case 'ZEROFILL':
        return 'Enter a zerofill value';
      case 'BINARY':
        return 'Enter a binary value';
      case 'VARBINARY':
        return 'Enter a varbinary value';
      case 'BIT':
        return 'Enter a bit';
      case 'CHAR':
        return 'Enter a char';
      case 'DATEONLY':
        return 'Select a date only';
      case 'HSTORE':
        return 'Enter Hstore data';
      case 'NOW':
        return 'Enter the current date and time';
      default:
        return '';
    }
  }
  
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
        <input name="allowNull" type="checkbox" checked={value.allowNull} onChange={(e) => fieldChangeHandler(e, index)} />
      </td>
      <td>
        <input name="unique" type="checkbox" checked={value.unique} onChange={(e) => fieldChangeHandler(e, index)} />
      </td>
      <td>
        <input name="default" type={getInputType()} value={value.default}  onChange={(e) => fieldChangeHandler(e, index)} style={styles.input} placeholder={getPlaceholder()} />
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
          newData.splice(index + 1, 0, { name: '', type: 'String', allowNull: false, unique: false, default: '' });
          setFields(newData);
        }} style={styles.button}>+</button>
      </td>
    </tr>
  );
};

export default TabelFormComponent;
