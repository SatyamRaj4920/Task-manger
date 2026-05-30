const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'active', label: 'Active' },
  { id: 'completed', label: 'Completed' },
]

function TaskFilters({
  activeCount,
  currentFilter,
  onFilterChange,
  searchQuery,
  onSearchChange,
}) {
  return (
    <div className="controls">
      <p className="task-count">{activeCount} task(s) remaining</p>

      <div className="filter-buttons" role="tablist" aria-label="Task filters">
        {FILTERS.map((filter) => (
          <button
            key={filter.id}
            type="button"
            className={currentFilter === filter.id ? 'active' : ''}
            onClick={() => onFilterChange(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <input
        className="search-input"
        type="search"
        value={searchQuery}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search tasks..."
        aria-label="Search tasks"
      />
    </div>
  )
}

export default TaskFilters
