import {useEffect, useState} from "react"


function Todo(){
const [todo,setTodo]=useState("")
const [to,setTo]=useState([])
function handleSubmit(){
    console.log(todo)
const newtodo=[...to,todo]
setTo(newtodo)
    }

function minus(index){

    const mi = [...to]
    mi.splice(index,1)
    setTo(mi)
}

useEffect(()=>{
    minus()
},[])


return(
    
    <>
    <h1> TODOLIST</h1>
    <input type="text " name="todo"  placeholder ="Addlist" value={todo} onChange={e=>setTodo(e.target.value)}/>
    <button type="submit" onClick={handleSubmit}>ADD</button>

    {to.map((item,index)=>{
        return( 
            <>
            <p> {index +1}</p>
          
            <p key={index}>{item}</p>
            <button onClick={()=>minus(index)} >&minus;</button>

        </>
        )

    })}

    
    </>
)
}
export default Todo