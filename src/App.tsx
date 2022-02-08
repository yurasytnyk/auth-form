import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { withRouteGuard } from './hoks/with-route-guard/hok';

import { LoginPage } from './pages/login-page/module';
import { RegistrationPage } from './pages/registration-page/module';
import { UserPage } from './pages/user-page/module';
import { AuthProvider } from './providers/auth-provider/provider/auth-provider';

const Home = () => <div>Home page</div>;
const ProtectedHome = withRouteGuard(Home);

export const App: FC = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path="/home" element={<ProtectedHome />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </AuthProvider>
  );
};
