import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {Container, Card} from 'react-bootstrap'
import {useState} from 'react'
function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Go shopping',
        day: 'Feb 5th at 2:30 pm',
        reminder: false
    },
    {
        id: 2,
        text: 'DO homework',
        day: 'Feb 6th at 2:30 pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Do exercise',
        day: 'Feb 7th at 2:30 pm',
        reminder: false
    },
    {
        id: 4,
        text: 'Walk the dog',
        day: 'Feb 8th at 2:30 pm',
        reminder: true
    }
  ])
  // addTask
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])

  }
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=>task.id !== id))
  }
  // toggle reminder 
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder:!task.reminder} : task))
  }
  const toggleAddTaskForm = () => {
    setShowAddTask(!showAddTask)
  }

  return (
    <Container style={{width: '50%'}} className="p-5">
      <Card body>
        <Header title='Task Manager' toggleAddTaskForm={toggleAddTaskForm} showAddTask={showAddTask}/>
        {showAddTask ? <AddTask onAdd={addTask} toggleAddTaskForm={toggleAddTaskForm}/>  : ""}
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No tasks to show.'}
      </Card>
    </Container>
  );
}
export default App;
