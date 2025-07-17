import React, { createContext } from 'react';
import TaskState from '../core/TaskState';
import type { TaskStateInterface } from '../core/TaskState';
type TaskContextProps = {
  taskState: TaskStateInterface;
  setTaskState: React.Dispatch<React.SetStateAction<TaskStateInterface>>;
};

export const initialTaskState: TaskStateInterface = new TaskState(null, 0);

const TaskContext = createContext<TaskContextProps>({
  taskState: initialTaskState,
  setTaskState: () => {},
});

export default TaskContext;
