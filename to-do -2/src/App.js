// App.js
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCheck, faUndo, faEdit, faTrash, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto'
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');
  const [chartInitialized, setChartInitialized] = useState(false);

  useEffect(() => {
   
    setTasks([
      { text: 'Task 1', completed: true },
      { text: 'Task 2', completed: false },
    ]);

   
    setChartInitialized(true);

    
    return () => {
      setChartInitialized(false);
    };
  }, []);

  const handleAddTask = () => {
    if (editIndex !== null) {
      
      const updatedTasks = [...tasks];
      updatedTasks[editIndex].text = editText;
      setTasks(updatedTasks);
      setEditIndex(null);
      setEditText('');
    } else if (taskText.trim() !== '') {
     
      setTasks([...tasks, { text: taskText, completed: false }]);
      setTaskText('');
    }
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    const taskToEdit = tasks[index];
    setEditIndex(index);
    setEditText(taskToEdit.text);
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
    setEditText('');
  };

  
  const completedTasks = tasks.filter((task) => task.completed).length;
  const remainingTasks = tasks.length - completedTasks;

  
  const chartData = {
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        data: [completedTasks, remainingTasks],
        backgroundColor: ['#4caf50', '#e0e0e0'],
      },
    ],
  };

  
  const chartOptions = {
    maintainAspectRatio: false, 
    responsive: true,
    height: 150, 
    width: 150, 
  };

  return (
    <div className="App">
      <h1>Tasks ToDo</h1>
      <div className="card">
        <div>
          <input
            type="text"
            placeholder={editIndex !== null ? 'Edit task' : 'Add a new task'}
            value={editIndex !== null ? editText : taskText}
            onChange={(e) => (editIndex !== null ? setEditText(e.target.value) : setTaskText(e.target.value))}
          />
          <button onClick={handleAddTask}>
            {editIndex !== null ? <FontAwesomeIcon icon={faSave} /> : <FontAwesomeIcon icon={faPlus} />}
          </button>
          {editIndex !== null && <button className="cancel" onClick={handleCancelEdit}><FontAwesomeIcon icon={faTimes} /></button>}
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className={task.completed ? 'completed' : ''}>
              <span>{task.text}</span>
              <div>
                <button className="complete" onClick={() => handleToggleComplete(index)}>
                  {task.completed ? <FontAwesomeIcon icon={faUndo} /> : <FontAwesomeIcon icon={faCheck} />}
                </button>
                <button className="edit" onClick={() => handleEditTask(index)}>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="delete" onClick={() => handleRemoveTask(index)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </li>
          ))}
        </ul>
        {chartInitialized && (
          <div className="pie-chart-container">
            <Doughnut data={chartData} options={chartOptions} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
