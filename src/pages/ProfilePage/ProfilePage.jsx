import React, { useState } from "react";

const ProfilePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform profile update logic here
  };

  const containerStyle = {
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

  const inputStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "3px",
    border: "1px solid #cccccc",
    marginBottom: "20px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "3px",
    backgroundColor: "#007bff",
    color: "#ffffff",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h1 style={headingStyle}>Edit Profile</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <label htmlFor="bio">Bio:</label>
        <textarea
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Save
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
