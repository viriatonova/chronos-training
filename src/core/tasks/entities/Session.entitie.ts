class Session {
  public id: string;
  public name: string;
  public color: string;

  constructor(name: string, color: string) {
    this.id = Date.now().toString();
    this.name = name;
    this.color = color;
  }
}

export default Session;
