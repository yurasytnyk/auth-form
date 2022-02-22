import { FC } from 'react';
import { 
  Navigate, 
  Route, 
  Routes, 
} from 'react-router-dom';

import { LoginPage } from './pages/login-page/module';
import { RegistrationPage } from './pages/registration-page/module';
import { TodoAppPage } from './pages/todoapp-page/module';
import { AuthProvider } from './providers/auth-provider/provider/auth-provider';
import { UserPageRoute } from './routes/user-page-route';

export const App: FC = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/protected/*" element={<UserPageRoute />} />
        <Route path="/todoapp" element={<TodoAppPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="*" element={<Navigate to="/protected" replace />} />
      </Routes>
    </AuthProvider>
  );
};
