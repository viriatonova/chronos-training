import React, { createContext } from 'react';
import { TaskState } from '../core/Task';
type TaskContextProps = {
  taskState: TaskState;
  setTaskState: React.Dispatch<React.SetStateAction<TaskState>>;
};

export const initialTaskState = new TaskState(null, 0, 0);

const TaskContext = createContext<TaskContextProps>({
  taskState: initialTaskState,
  setTaskState: () => {},
});

export default TaskContext;
