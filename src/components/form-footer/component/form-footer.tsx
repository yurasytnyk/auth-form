import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import { ILoginFormFooterData } from '../../login-form/types/login-form-types';
import { SubmitButton } from '../../submit-button/component';

export const FormFooter: FC<ILoginFormFooterData> = (props) => {
  const { 
    text, 
    linkText, 
    url 
  } = props;

  return (
    <footer>
      <SubmitButton
        variant="contained"
        color="primary"
        fullWidth={true}
        text="Sign In"
      />
      <Typography>
        {text} <NavLink to={url}>{linkText}</NavLink>
      </Typography>
    </footer>
  );
};
