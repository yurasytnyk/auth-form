import { AuthContext } from '../../../context/auth-context';

import { Props } from '../types/auth-provider-types';
import { useAuth } from '../../../hooks/useAuth';
import { useProtectedLocation } from '../../../hooks/useProtectedLocation';

export const AuthProvider = (props: Props) => {
  const { children } = props;
  const authContextValues = useAuth();
  useProtectedLocation(authContextValues.isAuth);

  return (
    <AuthContext.Provider value={authContextValues}>
      {children}
    </AuthContext.Provider>
  );
};
