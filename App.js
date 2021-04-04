import './App.css';
import { useState, useEffect} from "react";
import Form from './Component/Form'
import Todos from './Component/Todos'

const App = () => {

    const [ InputTxt, setInputTxt] = useState("")
    const [ InputArr, setInputArr] = useState([])
    const [ status, setStatus ] = useState("all")
    const [ filter, setfilter ] = useState([])

    const filterHandler = () => {
        switch(status){
            case "completed":
                setfilter(InputArr.filter((i) => i.completed === true ));
                break;
            case "uncompleted":
                setfilter(InputArr.filter((i) => i.completed === false ));
                break;
            default:
                setfilter(InputArr)
                break;
        }
    }

    
    useEffect(() => {
        filterHandler();
    },[InputArr, status]);

    return(
        <div className="App">
            <header>
                <h2>TODO APP</h2>
            </header>
            <Form InputTxt={InputTxt} setInputTxt={setInputTxt} setInputArr={setInputArr} InputArr={InputArr} setStatus={setStatus} filter={filter}/>
            <Todos setInputArr={setInputArr} InputArr={InputArr} filter={filter}/>
        </div>
    )
}

export default App;