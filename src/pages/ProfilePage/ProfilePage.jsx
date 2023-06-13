import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [userData, setUserData] = useState({});
  const [isEditable, setIsEditable] = useState(false);
  const Navigate = useNavigate();
  useEffect(() => {
    fetchUserProfile()
      .then((userData) => {
        setUserData(userData);
      })
      .catch((error) => {
        console.log("Error fetching user profile data: ", error);
      });
  }, []);

  const fetchUserProfile = () => {
    // Simulating an asynchronous fetch request
    return new Promise((resolve, reject) => {
      // fetch api
      fetch("http://localhost:5000/user/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUserData(data.data);
          resolve(data.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const handleSave = () => {
    // Perform save operation
    saveUserProfile(userData)
      .then(() => {
        setIsEditable(false);
      })
      .catch((error) => {
        console.log("Error saving user profile data: ", error);
      });
  };

  const saveUserProfile = (profileData) => {
    return new Promise((resolve, reject) => {
    // Simulating an asynchronous save request
    fetch("http://localhost:5000/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(profileData),
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  })
}

  return (
    <div
      className="profile-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        className="profile-card"
        style={{
          width: "400px",
          padding: "30px",
          borderRadius: "5px",
          backgroundColor: "#ffffff",
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#007bff",
          color: "#ffffff",
          fontWeight: "bold"
        }}
      >
        {/* add a back button on top right */}
        <div style={{ width: "100%", textAlign: "right" }}>
          <button
            className="profile-button"
            style={{
              padding: "5px 10px",
              borderRadius: "5px",
              border: "none",
              outline: "none",
              cursor: "pointer",
              backgroundColor: "#ffffff",
              color: "#007bff",
              fontWeight: "bold"
            }}
            onClick={() => {
              Navigate("/dashboard")
            }}
          >
            { "👈Back"}
          </button>
        </div>
          
        <h1 className="profile-heading" style={{
          marginBottom: "30px",
          textAlign: "center",
          color: "#333333",
          fontSize: "30px",
          fontWeight: "bolder",
          color: "rgb(224, 71, 76)"
        }}>Profile Page</h1>
        <table className="profile-table">
          <tbody>
            <tr>
              <td>
                <label htmlFor="username" className="profile-label">
                  Username
                </label>
              </td>
              <td>
                <input
                  type="text"
                  id="username"
                  value={userData.username}
                  onChange={(e) =>
                    setUserData({ ...userData, username: e.target.value })
                  }
                  className="profile-input"
                  readOnly={!isEditable}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="name" className="profile-label">
                  Name
                </label>
              </td>
              <td>
                <input
                  type="text"
                  id="name"
                  value={userData.name}
                  onChange={(e) =>
                    setUserData({ ...userData, name: e.target.value })
                  }
                  className="profile-input"
                  readOnly={!isEditable}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="email" className="profile-label">
                  Email
                </label>
              </td>
              <td>
                <input
                  type="email"
                  id="email"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                  className="profile-input"
                  readOnly={!isEditable}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="phone" className="profile-label">
                  Phone
                </label>
              </td>
              <td>
                <input
                  type="text"
                  id="phone"
                  value={userData.phone}
                  onChange={(e) =>
                    setUserData({ ...userData, phone: e.target.value })
                  }
                  className="profile-input"
                  readOnly={!isEditable}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="description" className="profile-label">
                  Description
                </label>
              </td>
              <td>
                <textarea
                style={{
                  width: "100%",
                  height: "100px",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #dddddd",
                  resize: "none",
                  outline: "none",
                  boxSizing: "border-box",
                }}
                  id="description"
                  value={userData.description}
                  onChange={(e) =>
                    setUserData({ ...userData, description: e.target.value })
                  }
                  className="profile-input"
                  readOnly={!isEditable}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="button-container" >
  {isEditable ? (
    <button
      className="profile-button"
      onClick={handleSave}
      style={{
        backgroundColor: "red",
        color: "#ffffff",
        padding: "10px 20px",
        fontSize: "16px",
        borderRadius: "5px",
      }}
    >
      Save
    </button>
  ) : (
    <button
      className="profile-button"
      onClick={() => setIsEditable(true)}
      style={{
        backgroundColor: "rgb(224, 71, 76)",
        color: "#ffffff",
        padding: "10px 20px",
        fontSize: "16px",
        borderRadius: "5px",
      }}
    >
      Edit
    </button>
  )}
</div>

      </div>
    </div>
  );
};

export default ProfilePage;
