import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import { login } from '../../store/features/login-form/routines';
import { logout } from '../../store/features/user-page/routines';
import { getUser } from '../../store/features/user-page/routines/user-page-routines';
import { registration } from '../../store/features/registration-form/routines';

export const useAuth = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const dispatch = useAppDispatch();
  
  const signIn = () => {
    dispatch(
      login({
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      })
    );
  };

  const signOut = () => {
    dispatch(logout());
  };

  const signUp = () => {
    dispatch(registration());
  };

  const fetchUser = () => {
    dispatch(getUser());
  };
  
  return {
    isAuth,
    signIn,
    signOut,
    signUp,
    fetchUser,
  };
};
