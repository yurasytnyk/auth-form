import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks/useAppSelector';

export const useAuth = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth && location.pathname !== '/login') {
      navigate(location.pathname);
    } else if (isAuth) {
      navigate('/');
    }
  }, [isAuth]);

  return isAuth;
};
