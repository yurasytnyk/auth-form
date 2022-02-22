import { FC } from 'react';
import { 
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { 
  FormikHelpers,
  FormikValues, 
  useFormik,
} from 'formik';
import { 
  Button, 
  TextField,
} from '@material-ui/core';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { tasksCollection } from '../../../firestore/collections/tasks-collection';
import { TaskValue } from '../types/task-form-types';

export const TaskForm: FC = () => {
  const onSubmitHandler = async (
    values: FormikValues, 
    actions: FormikHelpers<TaskValue>
  ) => {
    await addDoc(tasksCollection, {
      title: values.task,
      createdAt: serverTimestamp(),
      completed: false,
    });

    actions.resetForm();
  };
  
  const formik = useFormik({
    initialValues: {
      task: '',
    },
    onSubmit: onSubmitHandler,
  })

  return (
    <form 
      onSubmit={formik.handleSubmit}
      autoComplete="off"
    >
      <TextField 
        type="text"
        variant="outlined"
        {...formik.getFieldProps('task')}
        fullWidth
      />

      <Button
        type="submit"
        disabled={!formik.values.task}
      >
        <AddCircleOutlineIcon />
      </Button>
    </form>
  );
};
