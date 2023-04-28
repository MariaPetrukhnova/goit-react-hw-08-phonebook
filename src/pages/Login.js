import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "redux/authorization";

export default function Login() {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target:{ name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.logIn({ email, password }));
        setEmail('');
        setPassword('');
    };

    return (
        <>
            <h2>Будь ласка увійдіть у свій аакаунт</h2>
            <form onSubmit={handleSubmit} autoComplete="off">
                <label> Пошта
                    <input
                        name="email"
                        type="email"
                        value={email}
                        onChange={handleChange}
                    />
                </label>
                <label> Пароль
                    <input
                        name="password"
                        type="password"
                        value={password}
                        onChange={handleChange}/>
                </label>
                <button type="submit"> Увійти </button>
            </form>
        </>
    )
};