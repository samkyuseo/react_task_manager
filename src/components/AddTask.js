import {Form, Button} from 'react-bootstrap'
import {useState } from 'react'
const AddTask = ( {onAdd, toggleAddTaskForm }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert('Please add a task')
            return
        }
        onAdd({text, day, reminder})
        toggleAddTaskForm()
        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <div>
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Label>Task</Form.Label>
                    <Form.Control type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
                    <Form.Text className="text-muted">Whats something you gotta do?</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Day and Time</Form.Label>
                    <Form.Control type="text" value={day} onChange={(e)=>setDay(e.target.value)}/>
                    <Form.Text className="text-muted">By when?</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Reminder</Form.Label>
                    <Form.Check type="checkbox" checked={reminder} label="Yes, remind me." value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
            <br></br>
        </div> 
    )
}

export default AddTask
