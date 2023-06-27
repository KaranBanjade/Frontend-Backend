import { useState,useEffect } from "react";
import SingleComponentModel from "./SingleComponentModel";
import DownloadFunctions from "../../functions/project";
const ViewAllComponentsList = () => {
    const [components, setComponents] = useState([]);
    const [user, setUser ] = useState({});
    useEffect(() => {
      DownloadFunctions.GetAllUserProjects(setComponents);
      setUser(JSON.parse(localStorage.getItem("user")));
    },[])
    useEffect(() => {}, [components]);
    return (
        <div>
        <h1
            style={{
            textAlign: "center",
            color: "#3f51b5",
            marginTop: "2rem",
            }}
            
        >{user.username}'s Past Projects</h1>
        {
        components.length===0?
        <h1 style={{
          color: "#3f51b5",
          textAlign: "center",
          marginTop: "2rem",
          
        }}>No Past Projects</h1>:
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#f5f5f5",
        }}>
            {
                
                components.map((component) => (
                  <SingleComponentModel component={component}/>
              ))
            }
        </div>
      }
        </div>
    );
}

export default ViewAllComponentsList;