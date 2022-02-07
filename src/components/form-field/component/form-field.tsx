import { FC } from 'react';
import { TextField } from '@material-ui/core';

import { FormikValues, Props } from '../types/form-field-types';
import { useFormFieldStyles } from '../styles/form-field-styles';

export const FormField: FC<Props> = (props) => {
  const classes = useFormFieldStyles();
  const {
    id,
    type,
    label,
    placeholder,
    formik,
  } = props;

  const fieldId = id as keyof FormikValues;

  return (
    <TextField
      id={id}
      type={type}
      label={label}
      placeholder={placeholder}
      className={classes.formField}
      {...formik.getFieldProps(id)}
      helperText={
        formik.errors &&
        formik.touched[fieldId] && (
          <span style={{ color: 'red' }}>{formik.errors[fieldId]}</span>
        )
      }
      fullWidth
    />
  );
};