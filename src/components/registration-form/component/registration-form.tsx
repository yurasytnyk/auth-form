import { 
  FC, 
  useEffect,
  useContext, 
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';

import { Props } from '../types/registration-form-types';
import { FormField } from '../../form-field/component';
import { FormFooter } from '../../form-footer/component';
import { FormHeader } from '../../form-header/component';
import { registrationSchema } from '../schemas/registration-form-schema';
import { useRegistrationFormStyles } from '../styles/registration-form-styles';
import { AuthContext } from '../../../context/auth-context';
import { RegistrationValues } from '../../../pages/registration-page/type/registration-page-types';
import { FormLayout } from '../../form-layout/component/form-layout';

export const RegistrationForm: FC<Props> = (props) => {
  const classes = useRegistrationFormStyles();
  const { 
    initialValues, 
    data, 
    footerData 
  } = props;
  
  const { 
    signUp, 
    isAuth, 
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleFormSubmit = (values: RegistrationValues) => {
    const {
      email,
      password,
    } = values;
    signUp(email, password);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
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
    </FormLayout>
  );
};
