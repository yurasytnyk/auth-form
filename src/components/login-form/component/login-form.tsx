import { FC } from 'react';
import { useFormik } from 'formik';
import { Container, Grid, Paper } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { loginSchema } from '../schemas/loginSchema';
import { useLoginFormStyles } from '../styles/login-form-styles';
import { FormHeader } from '../../form-header/component';
import { Props } from '../types/login-form-types';
import { useAppDispatch } from '../../../store/hooks/useAppDispatch';
import { login } from '../../../store/features/login-form/routines';
import { FormField } from '../../form-field/component';
import { FormFooter } from '../../form-footer/component';

export const LoginForm: FC<Props> = (props) => {
  const classes = useLoginFormStyles();
  const { data, footerData } = props;

  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    },
    validationSchema: loginSchema,
    onSubmit: (values, actions) => {
      dispatch(
        login({
          email: 'eve.holt@reqres.in',
          password: 'cityslicka',
        })
      );
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
                title="Sign In"
                icon={<LockOutlinedIcon />}
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
  );
};
