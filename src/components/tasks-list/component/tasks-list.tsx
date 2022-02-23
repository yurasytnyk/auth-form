import { FC } from 'react';

import { Props } from '../types/tasks-list-types';
import { useTasksListStyles } from '../styles/tasks-list-styles';
import { TasksListItem } from '../../tasks-list-item/component';

export const TasksList: FC<Props> = (props) => {
  const { 
    tasksListData,
    loading,
  } = props;
  const classes = useTasksListStyles();
  
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul className={classes.tasksList}>
      {tasksListData.map((item) => (
        <TasksListItem
          key={item.id!}
          id={item.id!}
          title={item.title}
          completed={item.completed}
        />
      ))}
    </ul>
  );
};
