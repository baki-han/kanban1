import React, {useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, 
         ModalFooter, Input, Label} from 'reactstrap';
import DeletedTask from "./DeletedTask";


function Header(props){

    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [nameInput, setNameInput] = useState("");
    const [statusInput, setStatusInput] = useState("todo");
   
    const addButtonNewTaskHandler = () =>{
        props.createTask(nameInput, statusInput);
        setNameInput("");
        setStatusInput("todo")
        toggle();
    }

    //TODO: Toggle modal
    function toggle () {setModal(!modal)};
    function toggle2() {setModal2(!modal2)}


   //TODO: DELETE FROM TRASH BIN HANDLER

    
    return (
       <div>
       
           <nav className="navbar navbar-light" style={{backgroundColor: "#daebfb", border: "2px solid #c0e2ef", borderRadius: "5px" }}>
           <a href=" " className="navbar-brand">KANBAN</a>
               <Button  color="info" type="button"
                 onClick={toggle}>add new task</Button>

              <Button color="warning" type="button"
                 onClick={toggle2}><i className="fa fa-trash"></i></Button>
         </nav>

    {/*TODO: TRASH MODAL */}

     <>
      <Modal isOpen={modal2} >
        <ModalHeader >Deleted Tasks: </ModalHeader>
         <ModalBody>
           <ul>    
              {props.delTasks.map(el => 
              <DeletedTask 
                 key={el.id}
                 task={el}
                 restoreTask={props.restoreTask}
                 removePermanently={props.removePermanently}
               />)}
            </ul>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle2}>Close</Button>
        </ModalFooter>
      </Modal>
     </>

      
    <>
      <Modal isOpen={modal} >
        <ModalHeader >Modal title</ModalHeader>
         <ModalBody>
          <Label >Name</Label>
           <Input type="text"  placeholder="add task" onChange={(e)=> setNameInput(e.target.value)} value={nameInput} />
           <Label >Status</Label>
           <Input type="select" onChange={(e) => setStatusInput(e.target.value)} value={statusInput}>
            <option value="todo">To do</option>
            <option value="progress">In Progress</option>
            <option value="review">Review</option>
            <option value="done">Done</option>
      
          </Input>
          </ModalBody>
         <ModalFooter>
          <Button color="primary" onClick={addButtonNewTaskHandler} >add</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal> 
   </>

       </div>
    );
}

export default Header;

// this is a comment




// import React, {useState} from "react";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, 
//        Label, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


// function Header(props){
  

//     const [modal, setModal] = useState(false);
//     const [nameInput, setNameInput] = useState("");
//     const [statusInput, setStatusInput] = useState("todo");
//     const [dropdownOpen, setDropdownOpen] = useState(false);
   

//     const addButtonNewTaskHandler = () =>{
//         props.createTask(nameInput, statusInput);
//         setNameInput("");
//         setStatusInput("todo")
//         toggle();
//     }

   

//     //TODO: Toggle modal
//     function toggle () {setModal(!modal)};
//     const toggleDropDown = () => setDropdownOpen(prevState => !prevState);
    
//     return (
//        <div>
       
//            <nav className="navbar navbar-light" style={{backgroundColor: "#e3f2fd" }}>
//            <a href=" " className="navbar-brand">Navbar</a>
//               <Button  color="info" type="button"
//                  onClick={toggle}>add new task</Button>


//       <Dropdown isOpen={dropdownOpen} toggle={toggleDropDown} >
//          <DropdownToggle className="btn btn-warning" caret>
//           <i className="fa fa-trash"></i>
//           </DropdownToggle>
//          <DropdownMenu right>
//             <DropdownItem header>Deleted tasks: </DropdownItem>
//             <hr/>
//             <ul>
                
//                {props.delTasks.map(el => <li> <DropdownItem onClick={()=> alert("cj")}> {el.name}</DropdownItem></li>)}
//             </ul>
    
//         </DropdownMenu>
//         </Dropdown>
//        </nav>
//        <>
    
     
//       <Modal isOpen={modal} >
//         <ModalHeader >Modal title</ModalHeader>
//         <ModalBody>
//         <Label >Name</Label>
//         <Input type="text"  placeholder="add task" onChange={(e)=> setNameInput(e.target.value)} value={nameInput} />
//         <Label >Status</Label>
//         <Input type="select" onChange={(e) => setStatusInput(e.target.value)} value={statusInput}>
//           <option value="todo">To do</option>
//           <option value="progress">In Progress</option>
//           <option value="review">Review</option>
//           <option value="done">Done</option>
    
//         </Input>
//         </ModalBody>
//         <ModalFooter>
//           <Button color="primary" onClick={addButtonNewTaskHandler} >add</Button>{' '}
//           <Button color="secondary" onClick={toggle}>Cancel</Button>
//         </ModalFooter>
//       </Modal>
    
//      </>

//        </div>
//     );
// }

// export default Header;

// // this is a comment