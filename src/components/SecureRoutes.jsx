import { useEffect } from "react";
import { useNavigate } from "react-router";
const SecureRoutes = ({component}) => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    useEffect(() => {
        if (!token) {
            navigate('/login', { replace: true });
        }
    }, []);
    return (
        <div>
            <component />
        </div>
    );
}

export default SecureRoutes;