import { useDispatch } from "react-redux";
import { useState } from "react";
import { authOperations } from "redux/authorization";
import css from './RegisterForm.module.css';
import { Text } from '@chakra-ui/react';

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
            <Text fontSize='32' color='#572470' pt={10} pb={10}>Будь ласка зареєструйтесь</Text>
            <form onSubmit={handleSubmit} autoComplete="off">
                <label className={css.register_label}> Повне ім'я
                    <input
                        className={css.register_input}
                        name="name"
                        type="text"
                        value={name}
                        onChange={handleChange}
                    />
                </label>
                <label className={css.register_label}> Пошта
                    <input
                        className={css.register_input}
                        name="email"
                        type="email"
                        value={email}
                        onChange={handleChange}
                    />
                </label>
                <label className={css.register_label}> Пароль
                    <input
                        className={css.register_input}
                        name="password"
                        type="password"
                        value={password}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit" className={css.register_btn}> Зареєструватись </button>
            </form>
        </>
    );
};