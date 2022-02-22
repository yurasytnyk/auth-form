import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import  {
  login,
  loginWithGoogle,
} from '../../store/features/login-form/routines';
import { logout } from '../../store/features/user-page/routines';
import { getUser } from '../../store/features/user-page/routines/user-page-routines';
import { registration } from '../../store/features/registration-form/routines';

export const useAuth = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const dispatch = useAppDispatch();
  
  const signIn = (email: string, password: string) => {
    dispatch(
      login({ email, password, })
    );
  };

  const signInWithGoogle = () => {
    dispatch(
      loginWithGoogle()
    );
  };

  const signOut = () => {
    dispatch(logout());
  };

  const signUp = (email: string, password: string) => {
    dispatch(registration({ email, password, }));
  };

  const fetchUser = () => {
    dispatch(getUser());
  };
  
  return {
    isAuth,
    signIn,
    signInWithGoogle,
    signOut,
    signUp,
    fetchUser,
  };
};
