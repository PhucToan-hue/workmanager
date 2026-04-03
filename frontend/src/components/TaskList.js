import React from 'react';

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  if (tasks.length === 0) {
    return (
      <div className="task-list-container">
        <div className="empty-state">
          <p>📭 No tasks yet. Add one to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="task-list-container">
      <h2>📝 Your Tasks ({tasks.length})</h2>
      {tasks.map((task) => (
        <div key={task._id} className={`task-item ${task.completed ? 'completed' : ''}`}>
          <div className="task-content">
            <div className="task-title">{task.title}</div>
            {task.description && <div className="task-description">{task.description}</div>}
          </div>
          <div className="task-actions">
            <button
              className="complete-btn"
              onClick={() => onToggleTask(task._id, task.completed)}
            >
              {task.completed ? '↩️ Undo' : '✓ Complete'}
            </button>
            <button
              className="delete-btn"
              onClick={() => onDeleteTask(task._id)}
            >
              🗑️ Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
