import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { Container, Grid, Paper } from '@material-ui/core';

export const LoginForm: FC<Props> = (props) => {
  const classes = useLoginFormStyles();
  const {
    data,
    footerData,
  } = props;

  const formik = useFormik({
    initialValues: {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    },
    validationSchema: loginSchema,
    onSubmit: (values, actions) => {
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
            </form>
          </Grid>
        </Paper>
      </Grid>
    </Container>
  );
};
