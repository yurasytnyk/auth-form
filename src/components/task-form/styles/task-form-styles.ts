import { makeStyles } from '@material-ui/core';

export const useTaskFormStyles = makeStyles(() => ({
  taskForm: {
    position: 'relative',
  },
  formAddBtn: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
}));
