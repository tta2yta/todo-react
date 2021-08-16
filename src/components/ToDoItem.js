import React from "react"
import styles from '../css/TodoItem.module.scss'
class ToDoItem extends React.Component{
    constructor(props){
        super(props)
        this.state={editing : false}
    }

    handleEditing=()=>{
        console.log("Editing")
        this.setState({editing:true})
    }

    handleUpdateDone=(e)=>{
        if(e.key==='Enter'){
            this.setState({editing:false})
        }
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

      const viewMode={}
      const editMode={}

      if(this.state.editing)
        viewMode.display="none"
      else
      editMode.display="none"
        return(
            
            <li key={this.props.key} className={styles.item}>
                <input type="checkbox" checked={completed} 
                onChange={()=>this.props.handleChangeProps(id)}
                className={styles.checkbox}/>
             
                <button onClick={()=>{this.props.handleDelItemProp(id)}}>Del</button>
                <span style={completed ? completedStyle : null}>
                {this.props.item.title}
                </span>
                <div onDoubleClick={()=>this.handleEditing()} style={viewMode}>...</div>
                <input type="text" value={title} className={styles.textInput} style={editMode} 
                onChange={e=>{this.props.handleUpdateItemProp(e.target.value, id)}}
                onKeyDown={this.handleUpdateDone} />
                </li>
        );
    }
}

export default ToDoItem