import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheck, FaTrash } from 'react-icons/fa'
import './Do.css';

const Do = ({text, setInputArr, InputArr, id, item}) => {

    const deleteHandler = () => {
        setInputArr(InputArr.filter((el) => el.id !== item.id));
    };

    const completeHandler = ()=> {
        setInputArr(InputArr.map((items) => {
            if(items.id === item.id){
                return {
                    ...items,
                    completed: !items.completed
                };
            }
            return items;
        }));
    };

    return (
        <div className="todoo">
            <div className="row">
                <div className="col-sm-8">
                    <li className={`list-group-item ${item.completed ? "completed" : ""}`}>{text}</li>
                </div>
                <div className="col-sm-2">
                    <button className="btn btn-success checked" type="button" onClick={completeHandler}><FaCheck /></button>

                </div>
                <div className="col-sm-2">
                    <button className="btn btn-danger del" type="button" onClick={deleteHandler}><FaTrash /></button>
                </div>
            </div>
        </div>
    )
}
export default Do