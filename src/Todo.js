import React from 'react';

const Todo=({todos,deleteTodo})=>{
    const todoList=(todos.length)?(
        todos.map(todo=>{
        return(<div className="container" key={todo.id}>
                    <h3  className="indigo lighten-3">{todo.content}</h3>
                    <button className="waves-effect waves-light btn" onClick={()=>{deleteTodo(todo)}}>Delete Todo</button>
                    <hr/>
               </div>)
        })
    ):(
        <h3>U completed your today's tasks</h3>
    );
    return(
        <div>
            {todoList}
        </div>
        
    );
}
export default Todo;