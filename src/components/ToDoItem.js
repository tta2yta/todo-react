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
      const {id, title, completed}= this.props.item
        return(
            
            <li key={this.props.key} className={styles.item}>
                <input type="checkbox" checked={completed} 
                onChange={()=>this.props.handleChangeProps(id)}
                className={styles.checkbox}/>
             
                <button onClick={()=>{this.props.handleDelItemProp(id)}}>Del</button>
                <span style={completed ? completedStyle : null}>
                {this.props.item.title}
                </span>
                </li>
        );
    }
}

export default ToDoItem