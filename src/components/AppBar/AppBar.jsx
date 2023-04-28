import Navigation from "components/Navigation";
import AuthNav from "./AuthNav";
import UserMenu from "./UserMenu";
import useAuth from 'services/authHook';

export default function AppBar() {
    const { isLoggedIn } = useAuth();
    return (
        <>
            <header>
                <Navigation />
                {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </header>
    </>
    );
} 