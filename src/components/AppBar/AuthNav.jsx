import { NavLink } from "react-router-dom";

export default function AuthNav() {
    return (
        <>
            <NavLink to="/register">
                Реєстрація
            </NavLink>
            <NavLink to="/login">
                Вхід
            </NavLink>
        </>
    );
}