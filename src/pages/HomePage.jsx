import { useNavigate } from 'react-router-dom';
import { useAuth } from 'shared/hooks/useAuth';
import { useDispatch } from 'react-redux';
import { removeUser } from 'features/User/slices/userSlice';
import {useEffect} from 'react';

export const HomePage = () => {
    const { isAuth } = useAuth();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if(!isAuth) { return navigate('/login') }
    }, [isAuth, navigate]);

    return (
        <div>
            Welcome to Home page!
            <button type={'button'} onClick={() => dispatch(removeUser())}>Log out</button>
        </div>
    );
};
