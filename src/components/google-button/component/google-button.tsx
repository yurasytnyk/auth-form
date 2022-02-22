import { 
  FC, 
  useContext,
} from 'react';
import { Button } from '@material-ui/core';
import GoogleIcon from '@mui/icons-material/Google';

import { useGoogleButtonStyles } from '../styles/google-button-styles';
import { AuthContext } from '../../../context/auth-context';

export const GoogleButton: FC = () => {
  const classes = useGoogleButtonStyles();

  const { signInWithGoogle } = useContext(AuthContext);
  
  const onClickHandler = () => signInWithGoogle();

  return (
    <Button
        className={classes.googleBtn}
        onClick={onClickHandler}
      >
      <GoogleIcon />

      <span className={classes.googleBtnText}>
        Sign in with Google
      </span>
    </Button>
  );
};
