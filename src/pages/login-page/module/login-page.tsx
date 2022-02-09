import { FC } from 'react';

import { LoginForm } from '../../../components/login-form/component';
import { 
  loginFormData, 
  loginFormFooterData 
} from '../../../components/login-form/moks/login-form-mocks';

export const LoginPage: FC = () => {
  return (
    <LoginForm 
      data={loginFormData} 
      footerData={loginFormFooterData} 
    />
  );
};
