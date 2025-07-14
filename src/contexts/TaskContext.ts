import React, { createContext } from 'react';
import initialTaskState from '../dto/Task.dto';
import type { TaskState } from '../types/Task.type';

type TaskContextProps = {
  state: TaskState;
  setState: React.Dispatch<React.SetStateAction<TaskState>>;
};

const TaskContext = createContext<TaskContextProps>({
  state: initialTaskState,
  setState: () => {},
});

export default TaskContext;
