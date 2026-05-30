import { useState } from 'react'

function TaskItem({ task, onDeleteTask, onToggleTask, onUpdateTask }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(task.title)

  const handleUpdate = (event) => {
    event.preventDefault()

    const trimmedValue = editValue.trim()
    if (!trimmedValue) {
      setEditValue(task.title)
      setIsEditing(false)
      return
    }

    onUpdateTask(task.id, trimmedValue)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditValue(task.title)
    setIsEditing(false)
  }

  return (
    <li className="task-item">
      <label className="task-main">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
          aria-label={`Mark ${task.title} as ${task.completed ? 'incomplete' : 'complete'}`}
        />

        {isEditing ? (
          <form onSubmit={handleUpdate} className="edit-form">
            <input
              type="text"
              value={editValue}
              onChange={(event) => setEditValue(event.target.value)}
              autoFocus
              aria-label="Edit task"
            />
          </form>
        ) : (
          <span className={task.completed ? 'completed' : ''}>{task.title}</span>
        )}
      </label>

      <div className="task-actions">
        {isEditing ? (
          <>
            <button type="button" onClick={handleUpdate}>
              Save
            </button>
            <button type="button" className="ghost" onClick={handleCancel}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <button type="button" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button type="button" className="danger" onClick={() => onDeleteTask(task.id)}>
              Delete
            </button>
          </>
        )}
      </div>
    </li>
  )
}

export default TaskItem
