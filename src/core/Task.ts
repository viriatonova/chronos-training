export class Task {
  public id: string;
  public name: string;
  public color: string;
  public duration: number;
  public startDate: number;
  public completeDate: number | null;
  public interruptDate: number | null;
  public type: keyof TaskState['config'];
  constructor(name: string, color: string, duration: number) {
    this.id = Date.now().toString();
    this.name = name;
    this.color = color;
    this.duration = duration;
    this.startDate = Date.now();
    this.completeDate = null;
    this.interruptDate = null;
    this.type = 'workTime';
  }
}

export class TaskState {
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
  constructor(
    activeTask: Task | null,
    currentCycle: number,
    secondsRemaining: number,
  ) {
    this.tasks = [];
    this.activeTask = activeTask;
    this.currentCycle = currentCycle;
    this.secondsRemaining = secondsRemaining;
    this.formattedSecondsRemaining = '00:00';
    this.config = {
      workTime: 0,
      shortBreakTime: 0,
      longBreakTime: 0,
    };
  }
}
