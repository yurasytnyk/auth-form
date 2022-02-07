import { FC } from 'react';

import { RegistrationForm } from '../../../components/registration-form/component';
import {
  registrationFormData,
  registrationFormFooterData,
} from '../../../components/registration-form/moks/registration-form-mock';

export const RegistrationPage: FC = () => {
  return (
    <RegistrationForm
      data={registrationFormData}
      footerData={registrationFormFooterData}
    />
  );
};
