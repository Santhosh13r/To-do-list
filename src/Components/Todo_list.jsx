
import React from 'react'
import { useState } from 'react'

const Todo_list = () => {

    const [Task, settask] = useState([]);
    const [Newtask, setnewtask] = useState("");


    function AddTask() {
        if (Newtask.trim()) {
            settask( [...Task ,Newtask]);
            Setnewtask(' ');  
        }
      


    }
    function MoveDownTask(index) {
        if (index < Task.length-1) {
            const updatetask =[...Task];
            [updatetask[index],updatetask[index + 1]]=[updatetask[index + 1], updatetask[index]];
            settask(updatetask);
            
        }

    }
    function MoveUpTask(index) {
        if (index > 0) {
            const updatetaskdown =[...Task];
            [updatetaskdown[index],updatetaskdown[index - 1]]=[updatetaskdown[index - 1], updatetaskdown[index]];
            settask(updatetaskdown);
            
        }


    }

    function HandleInputChange(e) {
        setnewtask(event.target.value);
    }

    function DeleteTask(index) {
        const update= Task.filter((_,i) => i !== index);
        settask(update);
        


    }

    function completedTask() {

    }
    return (
        <>
            <div className="container text-center mt-5 pt-5">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h4 ><strong>To-Do-List</strong></h4>
                    </div>
                    <div className=" data col-12 ">
                        <div className="d-inline-flex gap-2">
                            <input type="text" placeholder='    Enter a Task ...' onChange={HandleInputChange} value={Newtask} />
                            <button className='btn btn-outline-warning'  onClick={()=>AddTask()} >
                                <i class="fa-solid fa-plus "></i>
                                
                                Add
                            </button>

                        </div>

                        <ol className='list'>
                            {Task.map((Task, index) =>
                                <li key={index}>
                                    <span className='text  '>{Task}</span>

                                    <div className="grid gap-3 ">
                                    <button className='btn btn-outline-warning m-2 ' onClick={()=>DeleteTask(index)}><i class="fa-solid fa-trash"></i>  </button>
                                   
                                    <button className='btn btn-outline-warning  m-2' onClick={()=>MoveUpTask(index)}><i class="fa-solid fa-arrow-up-long"></i></button>
                                    <button className='btn btn-outline-warning m-2' onClick={()=>MoveDownTask(index)}><i class="fa-solid fa-angle-down"></i></button>
                                    </div>

                                    
                                </li>
                            )}
                        </ol>
                    </div>
                </div>
            </div>






        </>
    )
}

export default Todo_list