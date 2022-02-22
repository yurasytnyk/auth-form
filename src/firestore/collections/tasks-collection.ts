import { ITasks } from '../../pages/todoapp-page/types/todoapp-page-types';
import { FirebaseClient } from '../client/firebase-client';

export const tasksCollection = FirebaseClient.createCollection<ITasks>('tasks');
