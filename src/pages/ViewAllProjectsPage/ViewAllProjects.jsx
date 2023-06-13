import components from "../../components"
import { useNavigate } from "react-router";
const { ViewAllComponentsList } = components;
const ViewAllProjects = () => {
    const Navigate = useNavigate();
    return (
        <div>
        <h1
        style={{
            fontSize: "4rem",
            fontWeight: "bold",
            color: "#000000",
            margin: "20px 0px",
            textAlign: "center",
            fontFamily: "monospace",
            textTransform: "uppercase",
            letterSpacing: "2px"
        }}
        >View All Projects</h1>
        {/* back button */}
        <button onClick={(e)=>{
            e.preventDefault();
            Navigate("/dashboard");
        }}
        style={{
            padding: "10px 20px",
            borderRadius: "5px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            margin: "auto",
            display: "block",
        }}
        >
            👈Back
        </button>
        <ViewAllComponentsList />
        </div>
    );
}

export default ViewAllProjects;