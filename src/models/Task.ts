
export class Task {
    public id: number
    public title: string
    public completed: boolean = false
    constructor(id:number,title:string)
    {
    this.id = id;
    this.title = title;
    }
   }