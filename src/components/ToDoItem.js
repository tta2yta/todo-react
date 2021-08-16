import React from "react"
import styles from '../css/TodoItem.module.scss'
class ToDoItem extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
   
    render()
{
    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
      }
        return(
            
            <li key={this.props.key} className={styles.item}>
                <input type="checkbox" checked={this.props.item.completed} 
                onChange={()=>this.props.handleChangeProps(this.props.item.id)}
                className={styles.checkbox}/>
             
                <button onClick={()=>{this.props.handleDelItemProp(this.props.item.id)}}>Del</button>
                <span style={this.props.item.completed ? completedStyle : null}>
                {this.props.item.title}
                </span>
                </li>
        );
    }
}

export default ToDoItem