import { 
  FC, 
  useContext, 
  useEffect,
} from 'react';
import { 
  FormikValues, 
  useFormik,
} from 'formik';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { Props } from '../types/login-form-types';
import { loginSchema } from '../schemas/login-schema';
import { useLoginFormStyles } from '../styles/login-form-styles';
import { FormHeader } from '../../form-header/component';
import { FormField } from '../../form-field/component';
import { FormFooter } from '../../form-footer/component';
import { AuthContext } from '../../../context/auth-context';
import { useNavigate } from 'react-router-dom';
import { FormLayout } from '../../form-layout/component/form-layout';

export const LoginForm: FC<Props> = (props) => {
  const classes = useLoginFormStyles();
  const { 
    data,
    initialValues,
    footerData, 
  } = props;

  const { 
    isAuth, 
    signIn, 
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleFormSubmit = (values: FormikValues) => {
    const { 
      email, 
      password, 
    } = values;
    signIn(email, password);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: handleFormSubmit,
  });

  useEffect(() => {
    if (isAuth) {
      navigate('/protected');
    }
  }, [isAuth]);

  return (
    <FormLayout>
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
    </FormLayout>
  );
};
