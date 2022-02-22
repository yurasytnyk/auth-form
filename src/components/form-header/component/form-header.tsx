import { FC } from 'react';
import { 
  Avatar, 
  Typography, 
} from '@material-ui/core';

import { Props } from '../types/form-header-types';

export const FormHeader: FC<Props> = (props) => {
  const { 
    className, 
    title, 
    subtitle, 
    icon, 
  } = props;

  return (
    <>
      <Avatar className={className}>{icon}</Avatar>

      <h2>{title}</h2>

      {subtitle && <Typography variant="caption">{subtitle}</Typography>}
    </>
  );
};
