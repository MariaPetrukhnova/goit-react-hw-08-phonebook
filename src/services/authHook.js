import { useSelector } from "react-redux";
import { getUsername, getIsLoggedIn, getRefreshing } from "redux/authorization/authSelectors";

export default function useAuth() {
    return {
        isLoggedIn: useSelector(getIsLoggedIn),
        isRefreshing: useSelector(getRefreshing),
        user: useSelector(getUsername),
    }
};