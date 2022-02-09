import { 
  FC, 
  useContext, 
  useEffect 
} from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';

import { useUserPageStyles } from './styles/user-page-styles';
import { useAppSelector } from '../../../store/hooks/useAppSelector';
import { AuthContext } from '../../../context/auth-context';

export const UserPage: FC = () => {
  const classes = useUserPageStyles();
  const { signOut, fetchUser } = useContext(AuthContext);
  const user = useAppSelector((state) => state.user.data);
  const navigate = useNavigate();

  const handleClick = () => {
    signOut();
    localStorage.removeItem('token');
    navigate('/login');
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Container>
      <Grid container justifyContent="center" className={classes.cardWrapper}>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography color="primary" gutterBottom>
                {`${user.first_name} ${user.last_name}`}
              </Typography>

              <Avatar
                src={user.avatar}
                alt="User avatar image"
                className={classes.userAvatar}
              />

              <Typography color="primary">{user.email}</Typography>
            </CardContent>

            <CardActions className={classes.cardActions}>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleClick}
              >
                Log out
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
