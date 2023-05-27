import React, { useState } from "react";

const RegisterComponent = ({setLogin}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // Perform registration logic here
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setLogin(true);
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
        onSubmit={handleRegister}
      >
        <h1
          style={{
            marginBottom: "30px",
            textAlign: "center",
            color: "#333333",
          }}
        >
          Register
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
            htmlFor="email"
            style={{ display: "block", marginBottom: "5px", color: "#555555" }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <div style={{ marginBottom: "20px" }}>
          <label
            htmlFor="confirmPassword"
            style={{ display: "block", marginBottom: "5px", color: "#555555" }}
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
          Register
        </button>
        <a href="/" style={{
            paddingTop: "20px",
            border: "none",
            cursor: "pointer",
            textDecoration: "none",
            color: "#007bff",
            
        }} onClick={(e)=>handleLogin(e)}>Login</a>
      </form>
    </div>
  );
};

export default RegisterComponent;
