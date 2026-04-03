import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask({ title, description });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className="task-form-container">
      <h2>➕ Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="task-form-group">
          <label htmlFor="title">Task Title *</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title..."
            required
          />
        </div>
        <div className="task-form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description (optional)..."
          />
        </div>
        <button type="submit" className="task-button">Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;
