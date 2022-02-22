import { FC } from 'react';
import { TextField } from '@material-ui/core';

import { Props } from '../types/form-field-types';
import { useFormFieldStyles } from '../styles/form-field-styles';
import { FieldText } from '../../field-text/component';

export const FormField: FC<Props> = (props) => {
  const classes = useFormFieldStyles();
  const {
    id,
    formik,
    ...rest
  } = props;

  return (
    <TextField
      id={id}
      className={classes.formField}
      {...formik.getFieldProps(id)}
      helperText={
        <FieldText 
          id={id}  
          formik={formik} 
        />
      }
      {...rest}
      fullWidth
    />
  );
};
