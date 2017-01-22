export class Log {
  static messages: string[] = [];
  static info(message: string) {
    this.messages.push(message);
    console.info(message);
  }
}