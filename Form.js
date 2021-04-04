import 'bootstrap/dist/css/bootstrap.min.css';
import {FaPlus} from 'react-icons/fa'

const Form = ({InputTxt, setInputTxt, InputArr, setInputArr, setStatus}) => {

    const changeHandle = (e) => {
        setInputTxt(e.target.value)
        console.log(e.target.value)
    };

    const addHandler = (e) =>{
        e.preventDefault();
        setInputArr([...InputArr,{text:InputTxt, completed:false, id:Math.floor(Math.random()*10)+1}]);
        setInputTxt("")
        console.log(InputArr)
    };

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return (
        <form>
            <div className="form-group">
                <div className="form-row">
                    <div className="col">
                        <div className="input-group ">
                            <input 
                                type="text" 
                                className="form-control" 
                                value={InputTxt}
                                onChange={changeHandle} />
                            <button className="btn btn-secondary" type="button" onClick={addHandler}><FaPlus /></button>
                        </div>
                    </div>
                    <div className="col">
                        <select className="form-control" onChange={statusHandler}>
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="uncompleted">Uncomplete</option>
                        </select>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Form