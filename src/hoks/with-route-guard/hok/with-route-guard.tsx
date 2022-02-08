import { ComponentType, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../../context/auth-context';

export function withRouteGuard(Component: ComponentType) {
  return () => {
    const { isAuth } = useContext(AuthContext);
    
    if (!isAuth) {
      return <Navigate to="/login" replace />
    } else {
      return <Component />;
    }
  }
}
