import React from "react"

class ToDoItem extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
            <li key={this.props.key}>
                <input type="checkbox" checked={this.props.item.completed} 
                onChange={()=>this.props.handleChangeProps(this.props.item.id)}/>
                {this.props.item.title}
                <button onClick={()=>{this.props.handleDelItemProp(this.props.item.id)}}>Del</button>
                </li>
        );
    }
}

export default ToDoItem