import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "redux/authorization";
import { Text } from '@chakra-ui/react';
import css from './LoginForm.module.css';

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
            <Text fontSize='32' color='#572470' pt={10} pb={10}>Будь ласка увійдіть у свій аккаунт</Text>
            
            <form onSubmit={handleSubmit} autoComplete="off" className={css.login_form}>
                <label className={css.login_label}> Пошта
                    <input
                        className={css.login_input}
                        name="email"
                        type="email"
                        value={email}
                        onChange={handleChange}
                    />
                </label>
                <label className={css.login_label}> Пароль
                    <input
                        className={css.login_input}
                        name="password"
                        type="password"
                        value={password}
                        onChange={handleChange}/>
                </label>
                <button type="submit" className={css.login_btn}> Увійти </button>
            </form>
        </>
    )
};