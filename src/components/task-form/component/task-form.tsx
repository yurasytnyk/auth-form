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
import {  TextField } from '@material-ui/core';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { tasksCollection } from '../../../firestore/collections/tasks-collection';
import { TaskValue } from '../types/task-form-types';
import { useTaskFormStyles } from '../styles/task-form-styles';

export const TaskForm: FC = () => {
  const classes = useTaskFormStyles();

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
      className={classes.taskForm}
      autoComplete="off"
    >
      <TextField 
        type="text"
        variant="outlined"
        {...formik.getFieldProps('task')}
        fullWidth
      />

      <button
        type="submit"
        className={classes.formAddBtn}
        disabled={!formik.values.task}
      >
        <AddCircleOutlineIcon />
      </button>
    </form>
  );
};
