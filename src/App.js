import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
 
class App extends React.Component {
  state={
    todos:[]
  }
  addTodo=(todo)=>{
    todo.id=Math.random();
    this.setState({
      todos:[...this.state.todos,todo]
    })
  }
  deleteTodo=(tudu)=>{
    this.setState({
      todos:this.state.todos.filter(todo=>{
        return todo!==tudu
      })
    })
  }
  render(){
    return(
    <div className="TodoApp">
      <h1 className="center-align">My Todos</h1>
      <hr/>
      <Todo todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      <AddTodo addTodo={this.addTodo}/>
    </div>
    );
  }
    
  
}

export default App;
