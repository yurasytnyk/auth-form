import { FC } from 'react';
import { 
  updateDoc, 
  deleteDoc, 
  doc,
} from 'firebase/firestore';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import { Props } from '../types/tasks-list-item-types';
import { tasksCollection } from '../../../firestore/collections/tasks-collection';
import { useTasksListItemStyles } from '../styles/tasks-list-item-styles';

export const TasksListItem: FC<Props> = (props) => {
  const { 
    id, 
    title, 
    completed,
  } = props;
  const classes = useTasksListItemStyles();

  const onDeleteHandler = async (id: string) => {
    await deleteDoc(doc(tasksCollection, id));
  };

  const onUpdateHandler = async (id: string, status: boolean) => {
    await updateDoc(doc(tasksCollection, id), {
      completed: !status,
    });
  };

  return (
    <li className={classes.tasksListItem}>
      {title}

      <div>
        {completed ? (
          <CheckBoxIcon onClick={() => onUpdateHandler(id, completed)} />
        ) : (
          <CheckBoxOutlineBlankIcon
            onClick={() => onUpdateHandler(id, completed)}
          />
        )}

        <DeleteIcon onClick={() => onDeleteHandler(id)} />
      </div>
    </li>
  );
};
