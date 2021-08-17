import { react } from "@babel/types";
import React from "react";
import ToDoList from "./ToDoList"
import InputToDo from "./InputToDo"
import Header from "./Header";
import { v4 as uuidv4 } from "uuid";
import {Route, Switch} from "react-router-dom"
import About from "../pages/about";
import NoMatch from "../pages/nomatch";

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

    componentDidMount(){
        console.log("update object " + this.state.toDoList);
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then(res=>res.json())
        .then(data=>this.setState({toDoList:data}))

        const temp = localStorage.getItem("todos")
        // const loadedTodos = JSON.parse(temp)
        if (temp) {
            this.setState({
            todos: temp
            })
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.toDoList !== this.state.toDoList){
            const temp = JSON.stringify(this.state.todos)
            localStorage.setItem("todos", temp)
        
        }
    }

    render(){
        return(
            <>
            <Route exact path="/">
            <div className="container">
            <div className="inner">
                <Header />
                <InputToDo handleAddItemProp={this.handleAddItem} />
                <ToDoList todos={this.state.toDoList} handleChangeProps={this.handleChange}
                handleDelItemProp={this.handleDelItem} handleUpdateItemProp={this.handleUpdateItem} />
            </div>
            </div>
         </Route>
         <Route path="/about">
         <About />
        </Route>
        <Route path="/nomatch">
        <NoMatch />
        </Route>
         </>
        );
    }
}

export default ToDoContainer