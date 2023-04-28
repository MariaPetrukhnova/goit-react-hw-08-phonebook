import { Navigate } from "react-router-dom";
import useAuth from "services/authHook";

export default function PublicRoute({
    restricted = false,
    redirectTo='/',
    component: Component
}) {
    const { isLoggedIn } = useAuth();

    return (
        isLoggedIn&&restricted ? <Navigate to={redirectTo}/> : Component
    )
};