import { 
  FC, 
  useEffect, 
  useState, 
} from 'react';
import { 
  Container, 
  Grid, 
  Paper,
} from '@material-ui/core';

import {
  onSnapshot, 
  orderBy,  
  query,
} from 'firebase/firestore';

import { tasksCollection } from '../../../firestore/collections/tasks-collection';
import { TasksList } from '../../../components/tasks-list/component';
import { ITasks } from '../types/todoapp-page-types';
import { TaskForm } from '../../../components/task-form/component';
import { useTodoAppPageStyles } from '../styles/todoapp-page-styles';

export const TodoAppPage: FC = () => {
  const classes = useTodoAppPageStyles();

  const [data, setData] = useState<ITasks[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const tasksQuery = query(tasksCollection, orderBy('createdAt'));
    setLoading(true);

    const unsubscribe = onSnapshot(tasksQuery, (snapshot) => {
      const tasksData = snapshot.docs.map((doc) => ({
        ...doc.data(), 
        id: doc.id,
      }));

      setData(tasksData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Container className={classes.todoContainer}>
      <Grid container justifyContent="center">
        <Grid item xs={4}>
          <Paper elevation={5} className={classes.paperWrapper}>
            <TaskForm />

            <TasksList
              tasksListData={data} 
              loading={loading}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
