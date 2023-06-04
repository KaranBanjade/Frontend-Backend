import React from "react";

const LandingPage = () => {
  const landingPageStyle = {
    textAlign: "center",
    padding: "20px",
  };

  const sectionStyle = {
    marginBottom: "50px",
  };

  const sectionContentStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const sectionTextStyle = {
    maxWidth: "600px",
    margin: "0 auto",
  };

  const profileImageStyle = {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    marginBottom: "20px",
  };

  const projectImageStyle = {
    width: "300px",
    height: "200px",
    marginLeft: "20px",
    objectFit: "cover",
  };

  const ctaButtonStyle = {
    padding: "10px 20px",
    fontSize: "18px",
    backgroundColor: "lightBlue",
    borderRadius: "4%",
    cursor: "pointer",
    textDecoration: "none",
  };

  return (
    <div style={landingPageStyle}>
      <h1>Welcome to My Project</h1>
      <div style={sectionStyle}>
        <div style={sectionContentStyle}>
          <img
            // src={profileImage}
            alt="Profile"
            style={profileImageStyle}
          />
          <div style={sectionTextStyle}>
            <h2>About Me</h2>
            <p>
              Hello! My name is [Your Name]. I'm a passionate developer with a strong focus on backend development. I have extensive experience in creating efficient and scalable solutions.
            </p>
            <p>
              With this project, I aim to simplify backend development by providing a tool that generates boilerplate code for Node.js based on your models and database data.
            </p>
            <p>
              If you have any questions, suggestions, or feedback, feel free to reach out to me at [Your Email Address]. I would be happy to assist you!
            </p>
          </div>
        </div>
      </div>
      <div style={sectionStyle}>
        <div style={sectionContentStyle}>
          <div style={sectionTextStyle}>
            <h2>About the Project</h2>
            <p>
              The [Project Name] is a powerful tool that automates the process of setting up the backend structure for your Node.js projects. It saves you time and effort by generating boilerplate code based on the models and database information you provide.
            </p>
            <p>
              Whether you're a beginner or an experienced developer, this tool will help you kickstart your backend development and allow you to focus on building your application's core features.
            </p>
            <p>
              To get started, simply navigate to the [Project Name] page and follow the instructions to input your models and database data. Once you submit the form, the generated backend code will be displayed for you to use in your project.
            </p>
          </div>
          {/* <img src={projectImage} alt="Project" style={projectImageStyle} /> */}
        </div>
      </div>
      <div style={sectionStyle}>
        <div style={sectionContentStyle}>
          <h2>Get Started</h2>
          <p>
            Start using [Project Name] today and simplify your backend development process. Experience the benefits of automated code generation and accelerate your project's progress.
          </p>
          <a style={ctaButtonStyle} href="/login" >Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
