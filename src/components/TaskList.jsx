import TaskItem from './TaskItem'

function TaskList({ tasks, onDeleteTask, onToggleTask, onUpdateTask }) {
  if (tasks.length === 0) {
    return <p className="empty-state">No tasks found.</p>
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onToggleTask={onToggleTask}
          onUpdateTask={onUpdateTask}
        />
      ))}
    </ul>
  )
}

export default TaskList
