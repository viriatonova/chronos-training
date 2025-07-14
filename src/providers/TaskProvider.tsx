import React from 'react';
import initialTaskState from '../dto/Task.dto';
import TaskContext from '../contexts/TaskContext';

const initialContextValue = {
  state: initialTaskState,
  setState: () => {},
};

function TaskProvider({ children }: { children: React.ReactNode }) {
  return (
    <TaskContext.Provider value={initialContextValue}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
