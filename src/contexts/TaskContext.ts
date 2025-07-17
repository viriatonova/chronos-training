import React, { createContext } from 'react';
import TaskState from '../core/tasks/entities/TaskState.entitie';
type TaskContextProps = {
  taskState: TaskState;
  setTaskState: React.Dispatch<React.SetStateAction<TaskState>>;
};

export const initialTaskState: TaskState = new TaskState(null, 0);

const TaskContext = createContext<TaskContextProps>({
  taskState: initialTaskState,
  setTaskState: () => {},
});

export default TaskContext;
