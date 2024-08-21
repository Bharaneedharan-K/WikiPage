import React, { useState } from 'react';
import './TaskAssign.css';

const TaskAssign = () => {
  const [formData, setFormData] = useState({
    department: '',
    faculty: '',
    subjectId: '',
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
    // Implement form submission logic here
    console.log('Task assigned:', formData);
  };

  return (
    <div className="form-container">
      <h1>Assign Task</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="department">Department *</label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="Enter Department"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="faculty">Faculty *</label>
          <input
            type="text"
            id="faculty"
            name="faculty"
            value={formData.faculty}
            onChange={handleChange}
            placeholder="Enter Faculty"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="subjectId">Subject ID *</label>
          <input
            type="text"
            id="subjectId"
            name="subjectId"
            value={formData.subjectId}
            onChange={handleChange}
            placeholder="Enter Subject ID"
            required
          />
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
          <button type="submit" className="assign-button">Assign Task</button>
        </div>
      </form>
    </div>
  );
};

export default TaskAssign;