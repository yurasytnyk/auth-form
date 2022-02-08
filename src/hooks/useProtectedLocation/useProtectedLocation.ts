import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useProtectedLocation = (isAuth: boolean) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isAuth && location.pathname !== '/login') {
      navigate(location.pathname);
    } else if (isAuth) {
      navigate('/');
    }
  }, [isAuth]);
};
