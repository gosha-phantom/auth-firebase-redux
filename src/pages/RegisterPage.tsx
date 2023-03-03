import { Link } from 'react-router-dom';
import { Register } from '../widgets/Register';

export const RegisterPage = () => {

    return (
        <div>
            <h2>RegisterPage</h2>
            <Register />
            <p>Already have an account? <Link to={'/login'}>Login</Link></p>
        </div>
    );
};
