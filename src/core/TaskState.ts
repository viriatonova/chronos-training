import Task from './Task';

export interface TaskStateInterface {
  tasks: Task[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: Task | null;
  currentCycle: number;
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
}

class TaskState implements TaskStateInterface {
  private _tasks: Task[];
  private _secondsRemaining: number;
  private _formattedSecondsRemaining: string;
  private _activeTask: Task | null;
  private _currentCycle: number;
  private _config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
  constructor(activeTask: Task | null, secondsRemaining: number) {
    this._tasks = [];
    this._activeTask = activeTask;
    this._currentCycle = 0;
    this._secondsRemaining = secondsRemaining;
    this._formattedSecondsRemaining = '00:00';
    this._config = {
      workTime: 0,
      shortBreakTime: 0,
      longBreakTime: 0,
    };
  }

  get tasks() {
    return this._tasks;
  }
  get secondsRemaining() {
    return this._secondsRemaining;
  }
  get formattedSecondsRemaining() {
    return this._formattedSecondsRemaining;
  }
  get activeTask() {
    return this._activeTask;
  }
  get currentCycle() {
    return this._currentCycle;
  }
  get config() {
    return this._config;
  }
  set tasks(tasks: Task[]) {
    this._tasks = tasks;
  }
  set secondsRemaining(secondsRemaining: number) {
    this._secondsRemaining = secondsRemaining;
  }
  set formattedSecondsRemaining(formattedSecondsRemaining: string) {
    this._formattedSecondsRemaining = formattedSecondsRemaining;
  }
  set activeTask(activeTask: Task | null) {
    this._activeTask = activeTask;
  }
}

export default TaskState;
