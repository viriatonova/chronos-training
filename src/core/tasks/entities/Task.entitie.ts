import TaskState from './TaskState.entitie';

class Task {
  public id: string;
  // public name: string;
  public duration: number;
  public startDate: number;
  public completeDate: number | null;
  public interruptDate: number | null;
  public type: keyof TaskState['config'];
  constructor(duration: number) {
    this.id = Date.now().toString();
    // this.name = name;
    this.duration = duration;
    this.startDate = Date.now();
    this.completeDate = null;
    this.interruptDate = null;
    this.type = 'workTime';
  }
}

export default Task;
