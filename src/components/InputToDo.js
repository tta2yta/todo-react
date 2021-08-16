import React from "react"

class InputToDo extends React.Component{
    constructor(props){
        super(props)
        this.state={title:""}
    }

    handleOnchange=(e)=>{
        console.log(e.target.name)
        this.setState({[e.target.name]: e.target.value})
    }

    addItem=()=>{
        console.log(this.state.title)
        this.props.handleAddItemProp(this.state.title)
        this.setState({title:""})
    }

    render(){
        return(
            <div>
                <form className="form-container">
                    <input type="text" name="title" className="input-text" placeholder="Ad Todo ..." value={this.state.title}
                    onChange={this.handleOnchange} />
                    <button onClick={()=>this.addItem()} className="input-submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default InputToDo