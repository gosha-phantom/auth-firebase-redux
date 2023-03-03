import { useState } from 'react';
// @ts-ignore
import classes from './AuthForm.module.css'

interface AuthFormProps {
    title: string;
    handleBtnClick: (email: string, password: string) => void;
}

export const AuthForm = (props: AuthFormProps) => {
    const { title, handleBtnClick } = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={classes.AuthForm}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type={'button'} onClick={() => handleBtnClick(email, password)}>{title}</button>
        </div>
    );
};
