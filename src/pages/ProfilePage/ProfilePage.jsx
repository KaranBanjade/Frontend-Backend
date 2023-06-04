import React, { useEffect, useState } from "react";
import "./ProfilePage.css"; // Import CSS file for styling

const ProfilePage = () => {
  const udata = {
    id: 1,
    name: "Dummy",
    email: "dummtmail2@mail/com",
    password: "dummy",
    phone: "1234567890",
    address: "dummy address",
  };
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState(udata);
  const [editMode, setEditMode] = useState(false);
  const [updatedData, setUpdatedData] = useState(null);

  useEffect(() => {
    // Get user ID from localStorage
    const storedUserId = localStorage.getItem("userId");
    setUserId(storedUserId);
  }, []);

  useEffect(() => {
    if (userId) {
      // Make API call to fetch user data using the userId
      fetchUserData(userId);
    }
  }, [userId]);

  const fetchUserData = async (userId) => {
    try {
      // Make API call to fetch user data
      const response = await fetch(`/api/user/${userId}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.log("Error fetching user data:", error);
    }
  };

  const handleEdit = () => {
    // Enable edit mode
    setEditMode(true);
    // Store the current user data to compare changes later
    setUpdatedData({ ...userData });
  };

  const handleInputChange = (e) => {
    // Update the corresponding field in the updatedData object
    setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      // Make API call to save updated user data
      await fetch(`/api/user/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      // Update userData with the updatedData
      setUserData(updatedData);
      // Disable edit mode
      setEditMode(false);
    } catch (error) {
      console.log("Error saving user data:", error);
    }
  };

  return (
    <div className="profile-container">
      {userData ? (
        <table className="profile-table">
          <thead>
            <tr>
              <th colSpan="2">Profile</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ID:</td>
              <td>{userData.id}</td>
            </tr>
            <tr>
              <td>Name:</td>
              <td>
                {editMode ? (
                  <input
                    type="text"
                    name="name"
                    value={updatedData.name || "Dummy"}
                    onChange={handleInputChange}
                  />
                ) : (
                  userData.name
                )}
              </td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>
                {editMode ? (
                  <input
                    type="email"
                    name="email"
                    value={updatedData.email}
                    onChange={handleInputChange}
                  />
                ) : (
                  userData.email
                )}
              </td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>
                {editMode ? (
                  <input
                    type="text"
                    name="phone"
                    value={updatedData.phone}
                    onChange={handleInputChange}
                  />
                ) : (
                  userData.phone
                )}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2">
                {editMode ? (
                  <button onClick={handleSave}>Save</button>
                ) : (
                  <button onClick={handleEdit}>Edit</button>
                )}
              </td>
            </tr>
          </tfoot>
        </table>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default ProfilePage;
