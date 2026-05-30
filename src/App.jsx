import { useEffect, useMemo, useState } from 'react'
import TaskFilters from './components/TaskFilters'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import './App.css'

const STORAGE_KEY = 'task-manager.tasks'

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = window.localStorage.getItem(STORAGE_KEY)
      if (!savedTasks) return []

      const parsedTasks = JSON.parse(savedTasks)
      return Array.isArray(parsedTasks) ? parsedTasks : []
    } catch {
      return []
    }
  })
  const [filter, setFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  const addTask = (title) => {
    const trimmedTitle = title.trim()
    if (!trimmedTitle) return

    const newTask = {
      id: crypto.randomUUID(),
      title: trimmedTitle,
      completed: false,
    }

    setTasks((currentTasks) => [newTask, ...currentTasks])
  }

  const deleteTask = (taskId) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId))
  }

  const updateTask = (taskId, nextTitle) => {
    const trimmedTitle = nextTitle.trim()
    if (!trimmedTitle) return

    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, title: trimmedTitle } : task,
      ),
    )
  }

  const toggleTask = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesFilter =
        filter === 'all' ||
        (filter === 'active' && !task.completed) ||
        (filter === 'completed' && task.completed)

      const matchesSearch = task.title
        .toLowerCase()
        .includes(searchQuery.trim().toLowerCase())

      return matchesFilter && matchesSearch
    })
  }, [filter, searchQuery, tasks])

  const activeCount = tasks.filter((task) => !task.completed).length

  return (
    <main className="app">
      <section className="card">
        <h1>Task Manager</h1>
        <p className="subtitle">Plan your day and keep things organized.</p>

        <TaskInput onAddTask={addTask} />

        <TaskFilters
          activeCount={activeCount}
          currentFilter={filter}
          onFilterChange={setFilter}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <TaskList
          tasks={filteredTasks}
          onDeleteTask={deleteTask}
          onToggleTask={toggleTask}
          onUpdateTask={updateTask}
        />
      </section>
    </main>
  )
}

export default App
