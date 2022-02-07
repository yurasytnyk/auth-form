import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { withRouteGuard } from './hoks/with-route-guard/hok';

import { useAuth } from './hooks/useAuth/useAuth';
import { LoginPage } from './pages/login-page/module';
import { RegistrationPage } from './pages/registration-page/module';
import { UserPage } from './pages/user-page/module';

const Home = () => <div>Home page</div>;
const ProtectedHome = withRouteGuard(Home);

export const App: FC = () => {
  const isAuth = useAuth();

  return (
    <>
      <Routes>
        <Route path="/" element={<UserPage auth={isAuth} />} />
        <Route path="/home" element={<ProtectedHome auth={isAuth} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </>
  );
};
