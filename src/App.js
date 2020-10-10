import React, { useState } from 'react';
import './App.css';
import {v4 as uuid4} from 'uuid';
import Column from './Column';
import "bootstrap/dist/css/bootstrap.css";
import Header from './Header';
import {todos} from './Todos';



const statuses = ["todo", "progress", "review", "done"];
const priority = [1, 2, 3, 4]


function App() {
  const [columns, setColumns] = useState(statuses);
  const [tasks, setTasks] = useState(todos);
  const [delTasks, setDelTasks] = useState([])

  //TODO: left right controll.
 
  const changeTaskStatus = (taskId, direction) =>{
     const newTaskList = tasks.map(el =>{
       if(el.id === taskId){
         if(direction === 'right')el.status = columns[columns.indexOf(el.status) + 1]
         if(direction === 'left')el.status = columns[columns.indexOf(el.status) - 1];
         if(direction === 'up') { el.priority = priority[priority.indexOf(el.priority) + 1];}
         if(direction === 'down') { el.priority = priority[priority.indexOf(el.priority) - 1];}
       }
       return el;
     })
     setTasks(newTaskList);  
  }

  //TODO: create new task
  const createTask = (newName, newStatus) =>{
    const newObj = {name: newName, status: newStatus, id: uuid4(), priority: 0}
    const newTask = [...tasks, newObj];
    setTasks(newTask);
  }

//TODO: delete function
 const delTask = (taskId) =>{
   const newList = tasks.filter(el => el.id !== taskId);
   const newDelList = [...delTasks];
   const delItem = tasks.find(el => el.id === taskId);
   newDelList.push(delItem);
   setDelTasks(newDelList);
   setTasks(newList)
 }

//TODO: edit task
 const editTask = (id, updatedTask) =>{
   const newTasks = tasks.map(el =>{
     if(el.id === id){
     return {...el, ...updatedTask}
     }
     return el;
   });
   setTasks(newTasks);
 }

  //FIXME: SET UP Priority
const priorityChange = (id, value) =>{
   const newTasks = tasks.map(el => {
     if(el.id === id){
       el.priority = priority[priority.indexOf(el.priority) + value];
     }
     return el;
   });
   setTasks(newTasks)
   console.log('changing')
}

//TODO: RESTORE FUNCTION 
const restoreTask = (taskId) =>{
  const updatedTrashBin = delTasks.filter(el => el.id !== taskId);
  const newItem = delTasks.find(el => el.id === taskId);
  setDelTasks(updatedTrashBin);
  const newTaskList = [...tasks, newItem];
  setTasks(newTaskList);
}

//TODO: REMOVE PERMANENTLY FROM TRASH BIN
 const removePermanently = (taskId) =>{
   const newList = delTasks.filter(el => el.id !== taskId);
   setDelTasks(newList)
 }


  return (
    
    <div className="container">
        <Header 
          createTask={createTask}
          delTasks={delTasks}
          restoreTask={restoreTask}
          removePermanently={removePermanently}
        />
       <div className="row">
         {columns.map((el, index) => <Column 
           column={el}
           key={uuid4()}
           tasks={tasks}
           index={index}
           updateStatus={changeTaskStatus}
           upDown={priorityChange}
           delTask={delTask}
           priority={priority}
           editTask={editTask}
         />)}

     </div>
    
    </div>
  );
}

export default App;

