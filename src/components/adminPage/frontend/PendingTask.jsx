import React, { useState } from 'react';
import './PendingTask.css';

const PendingTask = () => {
  const initialTasks = [
    { id: 1, facultyId: 'FAC123', facultyName: 'John Doe', subjectId: 'SUB101', dueDate: '2024-09-15' },
    { id: 2, facultyId: 'FAC456', facultyName: 'Jane Smith', subjectId: 'SUB102', dueDate: '2024-09-20' },
    { id: 3, facultyId: 'FAC789', facultyName: 'Alice Johnson', subjectId: 'SUB103', dueDate: '2024-09-25' },
    { id: 4, facultyId: 'FAC321', facultyName: 'Robert Brown', subjectId: 'SUB104', dueDate: '2024-10-01' },
    { id: 5, facultyId: 'FAC654', facultyName: 'Emily White', subjectId: 'SUB105', dueDate: '2024-10-05' },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [filters, setFilters] = useState({ facultyName: '', subjectId: '', dueDate: '' });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleFilterApply = () => {
    const filteredTasks = initialTasks.filter((task) => {
      return (
        (filters.facultyName === '' || task.facultyName.toLowerCase().includes(filters.facultyName.toLowerCase())) &&
        (filters.subjectId === '' || task.subjectId.toLowerCase().includes(filters.subjectId.toLowerCase())) &&
        (filters.dueDate === '' || task.dueDate.includes(filters.dueDate))
      );
    });
    setTasks(filteredTasks);
  };

  const handleFilterReset = () => {
    setFilters({ facultyName: '', subjectId: '', dueDate: '' });
    setTasks(initialTasks);
  };

  return (
    <div className="pending-task-container">
      <div className="pending-task-header">
        <h2>Pending Tasks</h2>
        <button className="filter-button" onClick={handleFilterApply}>
          <i className="fas fa-filter"></i> Apply Filter
        </button>
      </div>
      <div className="filter-container">
        <input
          type="text"
          placeholder="Filter by Faculty Name"
          name="facultyName"
          value={filters.facultyName}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          placeholder="Filter by Subject ID"
          name="subjectId"
          value={filters.subjectId}
          onChange={handleFilterChange}
        />
        <input
          type="date"
          placeholder="Filter by Due Date"
          name="dueDate"
          value={filters.dueDate}
          onChange={handleFilterChange}
        />
        <button className="reset-button" onClick={handleFilterReset}>Reset Filters</button>
      </div>
      <table className="pending-task-table">
        <thead>
          <tr>
            <th>Faculty ID</th>
            <th>Faculty Name</th>
            <th>Subject ID</th>
            <th>Due Date</th>
            <th>Reminder</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.facultyId}</td>
                <td>{task.facultyName}</td>
                <td>{task.subjectId}</td>
                <td>{task.dueDate}</td>
                <td>
                  <button className="reminder-button">Send Reminder</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No tasks found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PendingTask;
