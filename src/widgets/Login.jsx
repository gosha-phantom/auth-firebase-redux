import { AuthForm } from 'shared/ui/AuthForm';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from 'features/User/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleBtnLogin = (email, password) => {
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
