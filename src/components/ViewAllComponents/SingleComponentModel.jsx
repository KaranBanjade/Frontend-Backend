import { min } from "lodash";

const {useNavigate} = require("react-router-dom");
const editCurrentModel = (component, navigate) => {
    navigate("/addnewbackend", {state: {prevData: component}});
}
const SingleComponentModel = ({component}) => {    
    const {backendObject} = component;
    const {connObj, models} = backendObject;
    const obj = {
        connObj,
        models
    }
    const navigate = useNavigate();
    return (
        // flex card
        <>
        <div style={{
            height: "300px",
            padding: "30px",
            borderRadius: "5px",
            backgroundColor: "#ffffff",
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
            margin: "20px",
            cursor: "pointer",
            minWidth: "300px"
        }} onClick={(e)=>{
            editCurrentModel(obj, navigate);
        }}>
            <h1>{connObj.dbname||"Project Name"}</h1>
            <h2>{connObj.dbhost||"Project Description"}</h2>
            <ul>
                {models.map(model => <li>{model.name}</li>)||"Models"}
            </ul>
        </div>
        </>
    )
}

export default SingleComponentModel