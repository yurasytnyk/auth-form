import { FC } from 'react';

import { Props } from '../types/tasks-list-item-types';
import { useTasksListItemStyles } from '../styles/tasks-list-item-styles';
import { TaskItemControls } from '../../task-item-controls/component';

export const TasksListItem: FC<Props> = (props) => {
  const { 
    id, 
    title, 
    completed,
  } = props;
  const classes = useTasksListItemStyles();

  return (
    <li className={classes.tasksListItem}>
      {title}

      <TaskItemControls 
        id={id}
        completed={completed}
      />
    </li>
  );
};
