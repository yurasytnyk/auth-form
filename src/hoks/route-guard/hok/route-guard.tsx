import { FC } from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../../../context/auth-context';
import { Props } from '../types/route-guard-types';

export const RouteGuard: FC<Props> = (props) => {
  const { isAuth } = useContext(AuthContext);
  const { children } = props;

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
};
