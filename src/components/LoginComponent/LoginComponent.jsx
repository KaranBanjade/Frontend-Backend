import React, { useState } from "react";
import AuthFunction from "../../functions/auth";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router";
const LoginComponent = ({ setLogin }) => {
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const resp = await AuthFunction.LoginFunction(credential, password);
      console.log(resp)
      if (resp.status === 200) {
        toast.success('Login Successful');
        Navigate("/dashboard", { replace: true });
      }
      else {
        alert(resp.message);
        toast.error(resp.message);
      }
    }
    catch (error) {
      console.log(error);
      toast.error(error.message);
    }

  };

  const handleChange = (e) => {
    e.preventDefault();
    setLogin(false);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <form
        style={{
          width: "400px",
          padding: "30px",
          borderRadius: "5px",
          backgroundColor: "#ffffff",
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1
          style={{
            marginBottom: "30px",
            textAlign: "center",
            color: "#333333",
          }}
        >
          Login
        </h1>
        <div style={{ marginBottom: "20px" }}>
          <label
            htmlFor="credential"
            style={{ display: "block", marginBottom: "5px", color: "#555555" }}
          >
            Credential
          </label>
          <input
            type="text"
            id="credential"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "3px",
              border: "1px solid #cccccc",
            }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label
            htmlFor="password"
            style={{ display: "block", marginBottom: "5px", color: "#555555" }}
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "3px",
              border: "1px solid #cccccc",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "3px",
            backgroundColor: "#007bff",
            color: "#ffffff",
            border: "none",
            cursor: "pointer",
          }}
          onClick={(e) => handleLogin(e)}
        >
          Login
        </button>
        <a href="/" style={{
          paddingTop: "20px",
          border: "none",
          cursor: "pointer",
          textDecoration: "none",
          color: "#007bff",

        }} onClick={(e) => handleChange(e)}>Register</a>
      </form>
    </div>
  );
};

export default LoginComponent;
