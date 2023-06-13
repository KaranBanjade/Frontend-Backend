import React from "react";
import { Navigate, useNavigate } from "react-router";
import AuthFunction from "../../functions/auth";
import { toast } from "react-toastify";
const ProfileComponent = ({changeState, comp}) => {
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const resp = await AuthFunction.LogoutFunction();
      console.log(resp);
      if (resp.status === 200) {
        toast.success("Logout Successful");
        setTimeout(() => {
          Navigate("/login", { replace: true });
        }, 1000);
        
      } else {
        alert(resp.message);
        toast.error(resp.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
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
        <a href="/profile" style={buttonStyle}>
          Profile
        </a>
        <a href="/" style={buttonStyle} onClick={
          (e)=>{
            e.preventDefault();
            handleLogout();
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
