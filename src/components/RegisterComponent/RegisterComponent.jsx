import React, { useState } from "react";
import AuthFunction from "../../functions/auth";
import {toast} from "react-toastify";
import { useNavigate } from "react-router";
const RegisterComponent = ({ setLogin }) => {
  const Navigate = useNavigate();
  const initialCredentials = {
    username: "dummy User",
    name: "dummy",
    email: "karan@mail.com",
    number: "9999999999",
    password: "12345",
    confirmPassword: "12345",
  };
  const [credentials, setCredentials] = useState(initialCredentials);

  const handleRegister = async(e) => {
    e.preventDefault();
    const resp = AuthFunction.SignupFunction(credentials);    
    if(resp.status === 200){
      toast.success("Registered Successfully");
      setLogin(true);
      Navigate("/dashboard", { replace: true });
    }
    else{
      toast.error(resp.message);
    }
    

  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLogin(true);
  };

  return (
    <div style={formContainerStyle}>
      <form style={formStyle} onSubmit={handleRegister}>
        <h1 style={headingStyle}>Register</h1>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="username" style={labelStyle}>
            Username
          </label>
          <input
            type="text"
            id="username"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
            {...inputProps}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="email" style={labelStyle}>
            Email
          </label>
          <input
            type="email"
            id="email"
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            {...inputProps}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="password" style={labelStyle}>
            Password
          </label>
          <input
            type="password"
            id="password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            {...inputProps}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="confirmPassword" style={labelStyle}>
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={credentials.confirmPassword}
            onChange={(e) =>
              setCredentials({
                ...credentials,
                confirmPassword: e.target.value,
              })
            }
            {...inputProps}
          />
        </div>
        <button
          type="submit"
          style={{
            ...inputStyle,
            backgroundColor: "#007bff",
            color: "#ffffff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Register
        </button>
        <a
          href="/"
          style={{
            paddingTop: "20px",
            border: "none",
            cursor: "pointer",
            textDecoration: "none",
            color: "#007bff",
          }}
          onClick={handleLogin}
        >
          Login
        </a>
      </form>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "3px",
  border: "1px solid #cccccc",
};

const labelStyle = {
  display: "block",
  marginBottom: "5px",
  color: "#555555",
};

const formContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#f5f5f5",
};

const formStyle = {
  width: "400px",
  padding: "30px",
  borderRadius: "5px",
  backgroundColor: "#ffffff",
  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
};

const headingStyle = {
  marginBottom: "30px",
  textAlign: "center",
  color: "#333333",
};

const inputProps = {
  style: inputStyle,
};

export default RegisterComponent;
