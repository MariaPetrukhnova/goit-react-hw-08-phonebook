import { useDispatch, useSelector } from "react-redux";
import { authOperations } from "redux/authorization";
import authSelectors from "redux/authorization/authSelectors";

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);
    return (
        <>
            <p>Вітаємо, {name}</p>
            <button
                type="button"
                onClick={() => dispatch(authOperations.logOut())} >
                Вийти
            </button>
        </>
    );
}