import React, { useState } from 'react';
import TaskContext, { initialTaskState } from '../contexts/TaskContext';

function TaskProvider({ children }: { children: React.ReactNode }) {
  const [taskState, setTaskState] = useState(initialTaskState);

  return (
    <TaskContext.Provider value={{ taskState, setTaskState }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
