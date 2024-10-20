import React, { useState } from 'react';
import './TaskAssign.css';

const TaskAssign = () => {
  const [formData, setFormData] = useState({
    faculty: '',
    dueDate: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Task assigned:', formData);
  };

  return (
    <div className="task-assign-container">
      <h1>Assign Task</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="faculty">Faculty *</label>
          <select
            id="faculty"
            name="faculty"
            value={formData.faculty}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select Faculty</option>
            <option value="Faculty 1">Faculty 1</option>
            <option value="Faculty 2">Faculty 2</option>
            <option value="Faculty 3">Faculty 3</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="dueDate">Due Date *</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="assign-task">Assign Task</button>
        </div>
      </form>
    </div>
  );
};

export default TaskAssign;
