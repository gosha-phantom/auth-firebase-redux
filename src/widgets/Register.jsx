import { AuthForm } from 'shared/ui/AuthForm';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from 'features/User/slices/userSlice';
import { getAuth, createUserWithEmailAndPassword  } from 'firebase/auth';

export const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleBtnRegister = (email, password) => {
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
