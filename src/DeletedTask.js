import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card  } from 'reactstrap';


const DeletedTask = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
     
    <li> 
    {props.task.name}

    <div  style={{display: "inline", marginBottom: "0px"}}>
    <Button color="primary" size="sm" style={{marginRight: "5px", float: "right"}}
           onClick={()=> props.restoreTask(props.task.id)} >restore</Button>

    <Button id="Popover1" type="button" color="danger" onClick={toggle} size="sm" style={{float: "right", marginRight: "5px"}}>
        delete
        </Button>
             
        <Collapse isOpen={isOpen}>
        <Card style={{backgroundColor: "#b5e6e1"}}>
            <CardBody>

           <div style={{color: "brown"}}><strong>Are you sure you want to permanently delete this task ?</strong> </div>

            <hr/>

            <div style={{width: "80px", margin:"auto"}}>
                <Button type="button" color="danger" size="sm" style={{marginRight: "2px"}}
                    onClick={()=> {props.removePermanently(props.task.id); toggle();}}>yes</Button>

                <Button type="button" color="info" size="sm" onClick={toggle} >no</Button>

            </div>
      
            </CardBody>
        </Card>
        
       </Collapse>
    </div> 
      <hr style={{marginTop: "20px"}}></hr> 
    </li>  
  );
}

export default DeletedTask;