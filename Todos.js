import 'bootstrap/dist/css/bootstrap.min.css';
import Do from './Do'

const Todos = ({InputArr, setInputArr, filter}) => {

    return (
        <>
            <div className="l">
                <ul className="list-group">
                    {filter.map((item) => (
                        <Do setInputArr={setInputArr} InputArr={InputArr} text={item.text} key={item.id} item={item} />
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Todos