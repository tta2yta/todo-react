import React from "react";
import ToDoItem from "./ToDoItem"

class ToDoList extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
            <ul>
                {this.props.todos.map(item=> (
                    <ToDoItem key={item.key} item={item} handleChangeProps={this.props.handleChangeProps}
                    handleDelItemProp={this.props.handleDelItemProp} />
                ))}
            </ul>
        );
    }
}

export default ToDoList