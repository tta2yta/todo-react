import logo from './logo.svg';
import './App.css';
import ToDoContainer from './components/ToDoContainer';
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
     <ToDoContainer />
    </div>
    </Router>
  );
}

export default App;
