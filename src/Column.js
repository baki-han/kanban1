import React from 'react';
import Task from './Task';

function Column(props){

    const cardStyle = {
        border: "1px solid #ccc",
        borderRadius: "5px",
        margin: "10px 5px",
        padding: "4px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        // height: "180px",
        // overflow: "scroll"
    }
 

    return (
    
     <div className="col-4 col-sm" style={cardStyle}>
        <div className="card-header">
          <h4 >{props.column}</h4> 
        </div>
        
        {props.tasks.filter((el) => el.status === props.column)
        .sort((a, b) => b.priority - a.priority)
        .map((elem, i) =>
          <Task key={elem.id}
               id={elem.id}
               task={elem}
               updateStatus={props.updateStatus}
               columnIndex={props.index}
               taskIndex={i}
               upDown={props.upDown}
               delTask={props.delTask}
               priority={props.priority}
               editTask={props.editTask}
          />)}
     
    </div>)
}

export default Column;