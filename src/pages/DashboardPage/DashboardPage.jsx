import React from "react";
// import { useState } from "react";
import Components from "../../components";
const {CommonButtonComponent} = Components;
const DashboardPage = () => {

    
    return (
        <div>
            <CommonButtonComponent to="/dashboard" text="Dashboard Page" method={()=>{
                alert("Dashboard Page");
            }} />
            <br></br>
            <CommonButtonComponent to="/addnewbackend" text="Add New Backend" />
            <br></br>
            <CommonButtonComponent to="/viewallbackends" text="View All Backends" />
            <br></br>
            <CommonButtonComponent to="/downloadlastbackend" text="Download Last Backend" />
            <br></br>
            <CommonButtonComponent to="/profile" text="Profile" />
            <br></br>
            <CommonButtonComponent to="/logout" text="Logout" />
        </div>
    );
}

export default DashboardPage;