import React, {useState} from 'react';

import {Input, Dropdown, DropdownToggle, DropdownMenu, Button} from 'reactstrap';


function Task(props){

    const [dropupOpen, setDropupOpen] = useState(false);
    const [editNameInput, setNameInputValue] = useState(props.task.name);
    const [editStatusInput, setStatusInputValue] = useState(props.task.status);

   
 // TODO: // TOGGLE EDIT POP UP BOX
    const toggleUp = () => setDropupOpen(prevState => !prevState);

   
    
  // TODO: // HANDLE SAVE BUTTON CLICK AND UPDATE TASK
    const editButtonHandler = () =>{
      props.editTask(props.task.id, {name: editNameInput, status: editStatusInput});
      toggleUp();
    }


//TODO: // INLINE STYLES 
  const taskFooterStyle ={
        backgroundColor: "#e8f1c708",
        display: "flex"
    }
    const taskStyle = {
        border: "1px solid #9da4c1",
        margin: "2px",
    }
  const dropStyle = {
      width: "30px",
      padding: "5px",
      }


    return (<div className="card" style={taskStyle}>
       <div className="class-body">
       <p className="card-text" style={{textAlign: "center"}}>{props.task.name}</p>
       <p className="card-text" style={{textAlign: "center"}}> priority:&nbsp;{props.task.priority}</p>

       <div className="card-footer" style={taskFooterStyle}>

       {/* TODO:  UP AND DOWN CONTROLL */}
        <button disabled={props.task.priority === props.priority[props.priority-1]} className="btn btn-outline-primary btn-sm"
                onClick={()=> props.updateStatus(props.task.id, "up")}>↑</button>

        <button disabled={props.task.priority === props.priority[0]} className="btn btn-outline-primary btn-sm"
                 onClick={()=> props.updateStatus(props.task.id, "down")}>↓</button>


        <div >
       {/*TODO:  EDIT FUNCTIANALITY */}
        <Dropdown direction="up" isOpen={dropupOpen} toggle={toggleUp}>
        <DropdownToggle outline color="info"  style={dropStyle}> ✎ </DropdownToggle>
                  <DropdownMenu style={{backgroundColor : "#bccac2"}}>
                  <Input style={{width: "80%", margin: "10px"}} onChange={(e)=> setNameInputValue(e.target.value)}
                    placeholder="edit task" value={editNameInput}>
                  </Input>
                  <Input type="select" style={{width: "80%", margin: "10px"}} onChange={(e)=> setStatusInputValue(e.target.value)} value={editStatusInput}>
                    <option value="todo">To do</option>
                    <option value="progress">In Progress</option>
                    <option value="review">Review</option>
                    <option value="done">Done</option>
                     
                  </Input>
               <div>

                   <Button style={{width: "45%", margin: "2px"}} color="primary"
                          onClick={editButtonHandler} > save</Button>
                   <Button style={{width: "45%", margin: "2px"}} color="primary"
                           onClick={toggleUp}>cancel</Button>
                  </div>
            </DropdownMenu>
        </Dropdown>
        </div>

        {/* TODO:  DELETE LEFT RIGHT CONTROL */}
        <button className="btn btn-outline-danger btn-sm"
                 onClick={()=> props.delTask(props.task.id)} ><i className="fa fa-trash"></i></button>

        <button className="btn btn-outline-primary btn-sm"
                onClick={()=> props.updateStatus(props.task.id, "left")}
                disabled={props.index === 0}>←</button>

        <button className="btn btn-outline-primary btn-sm"
                onClick={()=> props.updateStatus(props.task.id, 'right')}
                disabled={false}>→</button>
       </div>

      </div>

    </div>);
}

export default Task;
