import React from "react";

const WelcomeComponent = () => {
  return (
    <div>
    <div style={containerStyle}>
      <h1>Welcome to the MERN Stack Generator</h1>
      <p>This app will help you generate a MERN stack project with a few clicks of a button.</p>
      <p>To get started, click the "Start" button below.</p>
    </div>
    </div>
  );
};

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  marginTop: "20vh",
  width: "100vw",

};

export default WelcomeComponent;
