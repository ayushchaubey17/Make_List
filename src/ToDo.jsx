import React from 'react'
import { useState } from 'react'

export default function ToDo() {

    let [list,update] = useState([]);
    let [newTodo,setNewToDo] = useState([]);

    let [time,newTime] = useState('');


   

    setInterval(() => {
        let date = new Date();
    let x = date.toLocaleTimeString();
    newTime(x);


    }, 1000);

    let add = () =>{

        update([...list,newTodo]);
        setNewToDo(''); 

    }


    let change = (event)=>{
        setNewToDo(event.target.value);
    }
 

  return (<>
    <div className='text-center'>
      <h1 className="text-blue-800 font-bold text-4xl">TO Do List</h1>
      <h2>{time}</h2>
      <input type="text" className="w-4/6 mr-2 border-2 my-2 p-1  rounded-md" value={newTodo}  onChange={change} placeholder='Enter the task' />
        <button onClick={add} className="bg-sky-600 p-1 px-2 rounded-md font-bold text-white">Add</button>


        <h2>your tasks</h2>
       
    </div>

    <div className="">

<ul className="font-bold text-xl w-9/12 mx-auto">
            {
            list.map((el)  =>{
              return  <> <li className="list-none flex justify-between">
              <p className="">{el}</p>
             <div className="space-x-4">
              <i class="fa-solid fa-circle-check"></i>
             <i className="fa-solid fa-square-xmark text-gray-800"></i>

             </div>
                            </li>
                           </>
            })
        }
        </ul>
        <p className="mx-auto text-white font-bold p-2 rounded-md cursor-pointer bg-slate-800 w-fit ">clear All</p>
       
    </div>
    </>
  )
}
