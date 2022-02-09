import { FC } from 'react';
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { AuthContext } from '../../../context/auth-context';

export const RouteGuard: FC = () => {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
