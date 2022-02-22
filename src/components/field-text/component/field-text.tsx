import { FC } from 'react';

import { Props } from '../types/field-text-types';
import { RegistrationValues } from '../../../pages/registration-page/type/registration-page-types';

export const FieldText: FC<Props> = (props) => {
  const { 
    id,
    formik, 
  } = props;

  const fieldId = id as keyof RegistrationValues;

  return (
    <>
      {formik.errors && formik.touched[fieldId] && (
        <span style={{ color: 'red' }}>
          {formik.errors[fieldId]}
        </span>
      )}
    </>
  );
};
