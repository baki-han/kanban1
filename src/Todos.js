import { v4 as uuidv4 } from 'uuid';

class Todo{
    constructor(name, status, priority){
        this.name = name;
        this.status = status;
        this.priority = priority
        this.id = uuidv4();
    }  
}

const todos =[
   new Todo("study", "todo", 1),
   new Todo("sleep", "done",2),
   new Todo("eat", "done", 3),
   new Todo("code", "todo", 2),
   new Todo("pet the cat", "review", 2),
   new Todo("workout", "progress", 1),
   new Todo("buy food", "review", 2),
   new Todo("instagram", "progress", 3),
 ];

export  {todos};


