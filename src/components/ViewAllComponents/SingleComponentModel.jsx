
const {useNavigate} = require("react-router-dom");
const editCurrentModel = (component, navigate) => {
    navigate("/addnewbackend", {state: {prevData: component}});
}
const SingleComponentModel = ({component}) => {    
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
            cursor: "pointer"
        }} onClick={(e)=>{
            editCurrentModel(component, navigate);
        }}>
            <h1>{component.connObj.name||"component Name"}</h1>
            <h2>{component.connObj.host||"component Description"}</h2>
            <ul>
                {component.models.map(model => <li>{model.name}</li>)||"Models"}
            </ul>
        </div>
        </>
    )
}

export default SingleComponentModel