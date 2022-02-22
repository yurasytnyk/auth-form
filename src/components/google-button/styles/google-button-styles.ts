import { makeStyles } from '@material-ui/core';

export const useGoogleButtonStyles = makeStyles(() => ({
  googleBtn: {
    padding: 0,
    minWidth: 0,
    marginBottom: '10px',
    "&:hover": {
      backgroundColor: 'transparent',
    },
  },
  googleBtnText: {
    paddingLeft: '10px',
    textTransform: 'initial',
  },
}));
