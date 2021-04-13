import {Card} from 'react-bootstrap'
import {FaTimes} from 'react-icons/fa'
const Task = ({id, task, onDelete, onToggle}) => {
    return (
        <div>
            <Card body border={task.reminder ? "success" : "dark"} onDoubleClick={() => onToggle(task.id)}>
                <Card.Title>
                    {task.text} 
                    <FaTimes 
                        style={{color: 'red', curse: 'pointer'}} 
                        onClick={()=> onDelete(task.id)}
                    />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{task.day}</Card.Subtitle>
            </Card>
            <br></br>
        </div>
       
    )
}

export default Task
