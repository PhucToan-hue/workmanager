import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import About from './pages/About';

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState('tasks');
  const [loading, setLoading] = useState(false);

  const API_URL = 'http://localhost:5000/api/tasks';

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTask = async (taskData) => {
    try {
      const response = await axios.post(API_URL, taskData);
      setTasks([response.data, ...tasks]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleToggleTask = async (taskId, completed) => {
    try {
      const response = await axios.put(`${API_URL}/${taskId}`, { completed: !completed });
      setTasks(tasks.map(task => task._id === taskId ? response.data : task));
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`${API_URL}/${taskId}`);
      setTasks(tasks.filter(task => task._id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>📋 Work Manager</h1>
        <nav className="navbar">
          <button 
            className={currentPage === 'tasks' ? 'active' : ''} 
            onClick={() => setCurrentPage('tasks')}
          >
            Tasks
          </button>
          <button 
            className={currentPage === 'about' ? 'active' : ''} 
            onClick={() => setCurrentPage('about')}
          >
            About
          </button>
        </nav>
      </header>

      <main className="container">
        {currentPage === 'tasks' ? (
          <>
            <TaskForm onAddTask={handleAddTask} />
            {loading ? <p>Loading...</p> : <TaskList tasks={tasks} onToggleTask={handleToggleTask} onDeleteTask={handleDeleteTask} />}
          </>
        ) : (
          <About />
        )}
      </main>
    </div>
  );
}

export default App;
