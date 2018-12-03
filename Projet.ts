import {task} from './task';
export class Projet{
    _task : task;
    constructor(task : task){
    this._task = task;
    }

    get_task(){
        return this._task;
    }

    set_tasks(task : task){
        this._task = task;
    }

    addtask(tasks:task, ntask:task){
        task[task.length] = ntask;
        return task;
    }

    getTask (tasks : task, pos : number){
task[pos] = null;
let permut : task;
       
for(let i = pos; i < task.length ; i++){
    permut = task[i];
    task[i] = task[i+1];
    task[i+1] = permut;
}
return task;
    }

    all (tasks : task){
        for (let i = 0; i < task.length; i++){
            console.log(task[i]);
        }
    }
    complete (tasks : task){
        for (let i = 0; i < task.length; i++){
            if(task[i].checked = false){
                console.log(task[i]);
            }
        }
    }
}
