import TaskState from './TaskState';

interface TaskInterface {
  id: string;
  name: string;
  color: string;
  duration: number;
  startDate: number;
  completeDate: number | null;
  interruptDate: number | null;
  type: keyof TaskState['config'];
}
class Task implements TaskInterface {
  private _id: string;
  private _name: string;
  private _color: string;
  private _duration: number;
  private _startDate: number;
  private _completeDate: number | null;
  private _interruptDate: number | null;
  private _type: keyof TaskState['config'];
  constructor(name: string, color: string, duration: number) {
    this._id = Date.now().toString();
    this._name = name;
    this._color = color;
    this._duration = duration;
    this._startDate = Date.now();
    this._completeDate = null;
    this._interruptDate = null;
    this._type = 'workTime';
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get color() {
    return this._color;
  }
  get duration() {
    return this._duration;
  }
  get startDate() {
    return this._startDate;
  }
  get completeDate() {
    return this._completeDate;
  }
  get interruptDate() {
    return this._interruptDate;
  }
  get type() {
    return this._type;
  }
}

export default Task;
