import React from "react";
import { useNavigate } from "react-router";
const ProfileComponent = ({changeState, comp}) => {
  const navigate = useNavigate();
  return (
    <div style={containerStyle}>
      <div style={dashboardStyle}>
        <span>
        <h1 style={{ marginBottom: "40px", textAlign: "center" }}>Dashboard</h1>
        <button onClick={changeState} style={{
            width: "100%",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "5px",
            backgroundColor: "#E0474C",
            color: "#ffffff",
            border: "none",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "bold",
            textAlign: "center",
            textTransform: "uppercase",
            textDecoration: "none",
        }}>{comp}</button>
        </span>
        <a href="/addnewbackend" style={buttonStyle}>
          Profile
        </a>
        <a href="/" style={buttonStyle} onClick={
          (e)=>{
            e.preventDefault();
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            localStorage.removeItem("userId");
            navigate('/login', { replace: true });
          }
        }>
          Logout
        </a>
        
      </div>
    </div>
  );
};

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#f5f5f5",
};

const dashboardStyle = {
  width: "600px",
  padding: "30px",
  borderRadius: "5px",
  backgroundColor: "#ffffff",
  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const buttonStyle = {
  width: "100%",
  padding: "20px",
  marginBottom: "20px",
  borderRadius: "5px",
  backgroundColor: "#007bff",
  color: "#ffffff",
  border: "none",
  cursor: "pointer",
  fontSize: "18px",
  fontWeight: "bold",
  textAlign: "center",
  textTransform: "uppercase",
  textDecoration: "none",
};

export default ProfileComponent;
