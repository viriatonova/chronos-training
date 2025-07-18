import Task from './Task.entitie.ts';
class TaskState {
  public tasks: Task[];
  public secondsRemaining: number;
  public formattedSecondsRemaining: string;
  public activeTask: Task | null;
  public currentCycle: number;
  public config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
  constructor(activeTask: Task | null, secondsRemaining: number) {
    this.tasks = [];
    this.activeTask = activeTask;
    this.currentCycle = 0;
    this.secondsRemaining = secondsRemaining;
    this.formattedSecondsRemaining = '00:00';
    this.config = {
      workTime: 5,
      shortBreakTime: 1,
      longBreakTime: 3,
    };
  }
}

export default TaskState;
