import { react } from "@babel/types";
import React from "react";
import ToDoList from "./ToDoList"
import InputToDo from "./InputToDo"
import Header from "./Header";
import { v4 as uuidv4 } from "uuid";

class ToDoContainer extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            // toDoList:[{
            //     id:1,
            //     title:"list-1",
            //     completed:true
            // },
            // {
            //     id:2,
            //     title:"list-2",
            //     completed:true
            // },
            // {
            //     id:3,
            //     title:"list-3",
            //     completed:true
            // }]
            toDoList:[]
        }
    }

    handleChange=(id )=>{
        console.log(`changed${id}`)
        // this.setState({toDoList: this.state.toDoList.map(item=>{
        //     if(item.id === id){
        //         item.completed= !item.completed
        //     }
        //     return item;
        // })})

        this.setState(prevState=>({
            toDoList: prevState.toDoList.map(item=>{
                if(item.id === id){
                    return{
                        ...item,
                        completed: ! item.completed
                    }
                    
                }
                return item;
            }),
        }))

        console.log(this.state.toDoList)
    }

    handleDelItem=(id)=>{
        console.log("Deleted")

        // this.setState(prevState=>({
        //     toDoList: prevState.toDoList.filter(item=> item.id !== id)
        // }))

        this.setState({
            toDoList: this.state.toDoList.filter(item=> item.id !== id)
        })
    }

    handleAddItem=(title)=>{
        const newItem = {
        id:uuidv4(),
        title:title,
        completed:false
    }

    this.setState({toDoList: [...this.state.toDoList, newItem]})
    console.log(this.state.toDoList)

    }

    handleUpdateItem=(title, id)=>{
        console.log("Updated" + id + " " + title)
        this.setState({toDoList: this.state.toDoList.map(item=>{
            if (item.id == id)
                item.title=title
            return item;
        }
        
        )})

        console.log("update object " + JSON.stringify(this.state.toDoList))
    }

    componentDidUpdate(){
        console.log("update object " + this.state.toDoList);
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then(res=>res.json())
        .then(data=>this.setState({toDoList:data}))
    }

    render(){
        return(
            <div className="container">
            <div className="inner">
                <Header />
                <InputToDo handleAddItemProp={this.handleAddItem} />
                <ToDoList todos={this.state.toDoList} handleChangeProps={this.handleChange}
                handleDelItemProp={this.handleDelItem} handleUpdateItemProp={this.handleUpdateItem} />
            </div>
            </div>
        );
    }
}

export default ToDoContainer