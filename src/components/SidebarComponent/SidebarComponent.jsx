import React from 'react';
import './SidebarComponent.css';
const SidebarComponent = ({ models, setCounter }) => {

  return (
    <div className="sidebar" style={{
        width: "20%",
    }}>
      <ul className="list" style={{
        listStyle: "square",
        color:"#E0474C"
      }}>
        <li className="list-item" >
            <button style={styles.button} onClick={()=>setCounter(1)}>
                Database Settings
          </button>
        </li>
        <li className="list-item">
          <button style={{
            // margin: "10px auto",
            padding: "5px 10px",
            borderRadius: "5px",
            backgroundColor: "#E0474C",
            color: "#fff",
            border: "none",
            cursor: "default",
            fontWeight: "bold",
          }}
          >
            Models
            </button>
          <ol className="model-list">
            {models.map((model, index) => (
                <li >
                <button style={styles.button} key={index} onClick={() => setCounter(index + 2)}>
                {model}
              </button>
              </li>
            ))}
          </ol>
        </li>
      </ul>
    </div>
  );
};

const styles = {
    button: {
      margin: "10px 0px",
      padding: "5px 10px",
      borderRadius: "5px",
      backgroundColor: "#E0474C",
      color: "#fff",
      border: "none",
      cursor: "pointer",
      fontWeight: "bold",
      display: "block",
      width: "13em",
    }
};

export default SidebarComponent;
