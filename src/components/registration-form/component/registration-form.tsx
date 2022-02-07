import { FC } from 'react';
import { useFormik } from 'formik';
import { Container, Grid, Paper } from '@material-ui/core';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';

import { FormField } from '../../form-field/component';
import { FormFooter } from '../../form-footer/component';
import { FormHeader } from '../../form-header/component';
import { Props } from '../types/registration-form-types';
import { registrationSchema } from '../schemas/registration-form-schema';
import { useRegistrationFormStyles } from '../styles/registration-form-styles';

export const RegistrationForm: FC<Props> = (props) => {
  const classes = useRegistrationFormStyles();
  const {
    data,
    footerData,
  } = props;

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: registrationSchema,
    onSubmit: (values, actions) => {
      console.log(values);
      actions.resetForm();
    },
  });

  return (
    <Container>
      <Grid container justifyContent="center">
        <Paper elevation={5} className={classes.formPaper}>
          <Grid item xs={12}>
            <form
              onSubmit={formik.handleSubmit}
              autoComplete="off"
              noValidate
              className={classes.formWrapper}
            >
              <FormHeader
                className={classes.formAvatar}
                title="Sign Up"
                icon={<AddCircleOutline />}
              />

              {data.map((field, indx) => (
                <FormField
                  key={indx}
                  id={field.type}
                  type={field.type}
                  label={field.label}
                  placeholder={field.placeholder}
                  formik={formik}
                />
              ))}

              <FormFooter
                text={footerData.text}
                linkText={footerData.linkText}
                url={footerData.url}
              />
            </form>
          </Grid>
        </Paper>
      </Grid>
    </Container>
  )
};
