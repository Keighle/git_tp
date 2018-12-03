import Date1 from './tp';
import {priority} from './priority';
export class task{
    content : string;
    checked : boolean;
    date : Date1;
    priority : Priority;

    getcontent() : string{
        return this.content;
    } 

    getchecked() : boolean{
        return this.checked;
    }

    getdate() : Date1{
        return this.date;
    }

    getpriority(){
        return this.priority;
    }

    setcontent(content : string){
        this.content = content;
    }

    setdate(date : Date1){
        this.date = date;
    }

    setpriority(priority : Priority){
        this.priority = priority;
    }

    setchecked(checked : boolean){
        this.checked = checked;
    }

    constructor(content : string, date : Date1, priority : Priority, checked : boolean){
        this.content = content;
        this.checked = checked;
        this.date = date;
        this.priority = priority;

    }

    add(content : string, date : Date1, priority : Priority){
        let id : number = Math.random()*58;
        return id;

    }

    update(content : string, date : Date1, priority : Priority, checked : boolean){
        this.content = content;
        this.checked = checked;
        this.date = date;
        this.priority = priority;
    }
  
    public close(checked : boolean){
        return true;
    }

    public toString (content : string, date : Date1, priority : Priority, checked : boolean){
        content = this.content;
        date = this.date;
        priority = this.priority;
        checked = this.checked;

        let taches : string = "CONTENU :"+content+"\n\n DATE :"+date+"\n\n PRIORITE :"+priority+"\n\n ETAT :"+checked;
        return taches;
    }
}