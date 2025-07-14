import type { TaskState } from '../types/Task.type';

const initialTaskState: TaskState = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '20:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 0,
    shortBreakTime: 0,
    longBreakTime: 0,
  },
};

export default initialTaskState;
