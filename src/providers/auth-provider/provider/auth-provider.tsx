import { Props } from '../types/auth-provider-types';
import { AuthContext } from '../../../context/auth-context';
import { useAuth } from '../../../hooks/useAuth';

export const AuthProvider = (props: Props) => {
  const { children } = props;
  const authContextValues = useAuth();

  return (
    <AuthContext.Provider value={authContextValues}>
      {children}
    </AuthContext.Provider>
  );
};
