import { FC } from 'react';
import { 
  Navigate, 
  Route, 
  Routes 
} from 'react-router-dom';
import { RouteGuard } from './hoks/route-guard/hok/route-guard';

import { LoginPage } from './pages/login-page/module';
import { RegistrationPage } from './pages/registration-page/module';
import { UserPage } from './pages/user-page/module';
import { AuthProvider } from './providers/auth-provider/provider/auth-provider';

export const App: FC = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<RouteGuard />}>
          <Route index element={<UserPage />} />
          <Route path="user2" element={<div>user 2</div>} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AuthProvider>
  );
};
