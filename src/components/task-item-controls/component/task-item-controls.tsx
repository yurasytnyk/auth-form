import { FC } from 'react';
import { 
  updateDoc, 
  deleteDoc, 
  doc,
} from 'firebase/firestore';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import { Props } from '../types/task-item-controls-types';
import { tasksCollection } from '../../../firestore/collections/tasks-collection';

export const TaskItemControls: FC<Props> = (props) => {
  const { 
    id,
    completed,
  } = props;

  const onDeleteHandler = async (id: string) => {
    await deleteDoc(doc(tasksCollection, id));
  };

  const onUpdateHandler = async (id: string, status: boolean) => {
    await updateDoc(doc(tasksCollection, id), {
      completed: !status,
    });
  };
  
  return (
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
  );
};
