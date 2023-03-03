import { AuthForm } from 'shared/ui/AuthForm';
import { useNavigate } from 'react-router-dom';
import { setUser } from 'features/User/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useAppDispatch } from 'shared/hooks';

export const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleBtnLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                navigate('/');
            })
            .catch((error) => {
                console.error(error);
                alert('Invalid User!');
            });
    };

    return (
        <AuthForm
            title={'Login'}
            handleBtnClick={handleBtnLogin}
        />
    );
};
