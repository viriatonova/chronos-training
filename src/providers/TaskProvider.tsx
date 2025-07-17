import React, { useState, useEffect } from 'react';
import TaskContext, { initialTaskState } from '../contexts/TaskContext';

function TaskProvider({ children }: { children: React.ReactNode }) {
  const [taskState, setTaskState] = useState(initialTaskState);

  useEffect(() => {
    console.log(taskState);
  }, [taskState]);
  return (
    <TaskContext.Provider value={{ taskState, setTaskState }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
