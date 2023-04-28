import { useDispatch } from "react-redux";
import { useState } from "react";
import { authOperations } from "redux/authorization";

export default function Register() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <>
            <h2>Будь ласка зареєструйтесь</h2>
            <form onSubmit={handleSubmit} autoComplete="off">
                <label> Повне ім'я
                    <input
                        name="name"
                        type="text"
                        value={name}
                        onChange={handleChange}
                    />
                </label>
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
                        onChange={handleChange}
                    />
                </label>
                <button type="submit"> Зареєструватись </button>
            </form>
        </>
    );
};