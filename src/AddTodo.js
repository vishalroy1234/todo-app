import React from 'react';

class AddTodo extends React.Component{
    state={
        content:''
    }
    handleChange=(e)=>{
        this.setState({
            content:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content:''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add ur todo</h4>
                    <input type="text" onChange={this.handleChange} value={this.state.content}></input>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i className="material-icons right">send</i>
                    </button>

                </form>
            </div>
        );
    }
}
export default AddTodo;