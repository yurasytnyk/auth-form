import { FormikProps } from 'formik';

import { RegistrationValues } from '../../../pages/registration-page/type/registration-page-types';

export interface Props {
  id: string;
  formik: FormikProps<RegistrationValues>;
}
