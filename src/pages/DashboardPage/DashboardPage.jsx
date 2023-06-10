import React, {useState} from "react";

import Components from "../../components";
const { BackendComponent, ProfileComponent } = Components;
const DashboardPage = () => {
  const [comp, setComp] = useState("Project Options"); 
  const changeState = (e) => {
    e.preventDefault();
    setComp((prev)=>{
      if(prev === "Project Options"){
        return "Profile Options"
      }
      else{
        return "Project Options"
      }
    })
  }
 return (
  <>
  {
    comp=="Project Options"?<BackendComponent changeState = {changeState} comp = {comp}/>:<ProfileComponent changeState = {changeState} comp = {comp}/>
  }
  </>
 )
};

export default DashboardPage;