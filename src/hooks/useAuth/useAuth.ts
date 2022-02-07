import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks/useAppSelector';

export const useAuth = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth]);

  return isAuth;
};
