import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import { Props } from '../types/form-footer-types';
import { SubmitButton } from '../../submit-button/component';
import { GoogleButton } from '../../google-button/component';

export const FormFooter: FC<Props> = (props) => {
  const { 
    text,
    buttonText,
    linkText,
    url,
  } = props;

  return (
    <footer>
      <SubmitButton
        variant="contained"
        color="primary"
        fullWidth={true}
        text={buttonText}
      />

      <GoogleButton />
      
      <Typography>
        {text} <NavLink to={url}>{linkText}</NavLink>
      </Typography>
    </footer>
  );
};
