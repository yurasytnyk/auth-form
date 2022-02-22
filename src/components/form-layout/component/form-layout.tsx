import { FC } from 'react';
import { 
  Container, 
  Grid, 
  Paper, 
} from '@material-ui/core';

import { useFormLayoutStyles } from '../styles/form-layout-styles';

export const FormLayout: FC = (props) => {
  const { children } = props;
  const classes = useFormLayoutStyles();

  return (
    <Container>
      <Grid container justifyContent="center">
        <Paper elevation={5} className={classes.formPaper}>
          <Grid item xs={12}>
            {children}
          </Grid>
        </Paper>
      </Grid>
    </Container>
  );
};
