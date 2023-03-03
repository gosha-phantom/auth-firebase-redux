import { AuthForm } from 'shared/ui/AuthForm';
import { useNavigate } from 'react-router-dom';
import { setUser } from 'features/User/slices/userSlice';
import { getAuth, createUserWithEmailAndPassword  } from 'firebase/auth';
import { useAppDispatch } from 'shared/hooks';

export const Register = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleBtnRegister = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                navigate('/');
            })
            .catch(console.error);
    };

    return (
        <AuthForm
            title={'Register'}
            handleBtnClick={handleBtnRegister}
        />
    );
};
