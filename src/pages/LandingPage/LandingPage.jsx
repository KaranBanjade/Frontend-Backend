import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const scrollToBottom = () => {
    // if it is down scroll to top
    if (window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // change the text to up
      document.getElementsByClassName('scroll-to-bottom')[0].innerHTML = '👇';

    } else {
      // if it is up scroll to bottom
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      document.getElementsByClassName('scroll-to-bottom')[0].innerHTML = '👆';
    }
  };

  return (
    <div className="landing-page">
      <div className="top">
        <h1 className="title" style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          color: '#ff4244',
          textAlign: 'center',
          margin: '0 0 1rem 0',
          border: 'none',
        }}>Backend Code Generation Tool</h1>
        <p className="subtitle">Sick of writing the same boilerplate code over and over again?</p>
        <p>We present to you</p>
        <h1 className="highlight" style={{
          fontSize: '3.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          margin: '0 0 1rem 0',
          border: 'none',
        }}>THE BACKEND</h1>
        <p>One stop for generating the starting template for backends using</p>
        <h2 className="highlight" style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          textAlign: 'center',
          margin: '0 0 1rem 0',
          border: 'none',
        }}>Node, Express, MySQL</h2>
      </div>
      <div className="features">
        <h1 style={{
          color: 'rgb(0, 123, 255)'
        }}>Features</h1>
        <ul>
          <li>Generate the starting template for your backend</li>
          <li>Generate the code for your models</li>
          <li>Generate the code for your controllers</li>
          <li>Generate the code for your routes</li>
          <li>Generate the code for your database</li>
        </ul>
        <h2 className="highlight">Just NPM start your projects</h2>
      </div>
      <div className="usage">
        <h1 style={{
          color: 'rgb(0, 123, 255)'
        }}>How to Use</h1>
        <p>Just fill in the details and click on generate</p>
        <p>Copy the code and paste it in your project</p>
        <p>Run npm install and npm start</p>
        <p>And you are good to go</p>
      </div>
      <button className="generate-button" onClick={(e)=>{
        e.preventDefault();
        navigate('/dashboard');
      }}>Generate</button>

      <div className="scroll-to-bottom" style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        cursor: 'pointer',
        fontSize: '24px',
        color: '#333',
        backgroundColor: '#fff',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.3s ease',
        boxShadow: '0px 0px 10px 5px rgb(0, 123, 255)',
      }} onClick={scrollToBottom}>
        👇
      </div>
    </div>
  );
};

export default LandingPage;
