import { useState } from 'react'

function TaskInput({ onAddTask }) {
  const [title, setTitle] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onAddTask(title)
    setTitle('')
  }

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Add a new task..."
        aria-label="Task title"
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default TaskInput
