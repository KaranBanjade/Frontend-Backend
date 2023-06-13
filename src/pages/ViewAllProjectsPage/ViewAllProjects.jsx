import components from "../../components"
const { ViewAllComponentsList } = components;
const ViewAllProjects = () => {
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
        <ViewAllComponentsList />
        </div>
    );
}

export default ViewAllProjects;