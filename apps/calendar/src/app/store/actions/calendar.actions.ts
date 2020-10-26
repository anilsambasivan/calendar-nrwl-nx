import { createAction, props } from '@ngrx/store';
import { Task } from '../../models/day.model';

export const getTasks = createAction('[Task] - Get Tasks');
export const getTasksSuccess = createAction(
    '[Task] - Get Tasks Success',
    props<{ payload: Task[] }>()
);
export const getTasksFailed = createAction(
    '[Task] - Get Tasks Failed',
    props<{ payload: string }>()
);
export const addTask = createAction(
    '[Task] - Add Task',
    props<{ payload: Task }>()
);
export const addTaskSuccess = createAction(
    '[Task] - Add Task Success',
    props<{ payload: Task }>()
);
export const addTaskFailed = createAction(
    '[Task] - Add Task Failed',
    props<{ payload: string }>()
);