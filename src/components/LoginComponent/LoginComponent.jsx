import React, { useState } from "react";

const LoginComponent = ({setLogin}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
  };

  const handleRegister = (e) => {
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
        onSubmit={handleLogin}
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
            htmlFor="username"
            style={{ display: "block", marginBottom: "5px", color: "#555555" }}
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        >
          Login
        </button>
        <a href="/" style={{
            paddingTop: "20px",
            border: "none",
            cursor: "pointer",
            textDecoration: "none",
            color: "#007bff",
            
        }} onClick={(e)=>handleRegister(e)}>Register</a>
      </form>
    </div>
  );
};

export default LoginComponent;
