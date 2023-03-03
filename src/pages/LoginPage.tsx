import { Link } from 'react-router-dom';
import { Login } from 'widgets/Login';

export const LoginPage = () => {
    return (
        <div>
            <h2>LoginPage</h2>
            <Login />
            <p>Have no account? <Link to={'/register'}>Register</Link></p>
        </div>
    );
};
