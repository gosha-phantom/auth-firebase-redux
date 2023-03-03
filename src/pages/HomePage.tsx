import { useNavigate } from 'react-router-dom';
import { useAuth } from 'shared/hooks/useAuth';
import { removeUser } from 'features/User/slices/userSlice';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/hooks';

export const HomePage = () => {
    const { isAuth } = useAuth();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

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
