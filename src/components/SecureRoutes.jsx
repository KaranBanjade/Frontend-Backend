import { useEffect } from "react";
import { useNavigate } from "react-router";
const SecureRoutes = ({component}) => {
    const Component = component;
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    useEffect(() => {
        if (!token) {
            navigate('/login', { replace: true });
        }
    }, []);
    return (
        <div>
            <Component />
        </div>
    );
}

export default SecureRoutes;