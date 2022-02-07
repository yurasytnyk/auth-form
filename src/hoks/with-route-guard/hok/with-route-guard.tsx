import { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';

import { WithRouteGuardProps } from '../types/with-route-guard-types';

export function withRouteGuard<T extends WithRouteGuardProps>(Component: ComponentType<T>) {
  return (props: T) => {
    if (!props.auth) {
      return <Navigate to="/login" />
    } else {
      return <Component { ...props } />;
    }
  }
}
