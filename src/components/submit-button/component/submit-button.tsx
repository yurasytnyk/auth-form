import { FC } from 'react';
import { Button } from '@material-ui/core';
import { useSubmitButtonStyles } from '../styles/submit-button-styles';
import { Props } from '../types/submit-button-types';

export const SubmitButton: FC<Props> = (props) => {
  const { 
    variant, 
    color, 
    fullWidth, 
    text 
  } = props;
  const classes = useSubmitButtonStyles();

  return (
    <Button
      type="submit"
      variant={variant}
      color={color}
      className={classes.submitBtn}
      fullWidth={fullWidth}
    >
      {text}
    </Button>
  );
};
