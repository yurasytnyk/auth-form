import { FC } from 'react';
import { 
  Route, 
  Routes,
} from 'react-router-dom';

import { RouteGuard } from '../../hoks/route-guard/hok';
import { UserPage } from '../../pages/user-page/module';

export const UserPageRoute: FC = () => {
  return (
    <RouteGuard>
      <Routes>
        <Route index element={<UserPage />} />
      </Routes>
    </RouteGuard>
  );
};
