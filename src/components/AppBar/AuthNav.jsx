import { NavLink } from "react-router-dom";
import { Text } from "@chakra-ui/react";

export default function AuthNav() {
    return (
        <>
            <NavLink to="/register">
                <Text
                    mr={10}
                    fontSize={22}
                    color='#572470'>
                    Реєстрація
                </Text>
            </NavLink>
            <NavLink to="/login">
                <Text
                    mr={10}
                    fontSize={22}
                    color='#572470'>
                    Вхід
                </Text>
            </NavLink>
        </>
    );
}