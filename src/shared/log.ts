export class Log{
    static messages:any[];
    static info(s:string){
        Log.messages.push(s);
    }
}