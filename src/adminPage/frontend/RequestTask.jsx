import React, { useState } from 'react';
import './RequestTask.css';

const RequestTask = () => {
  const [department, setDepartment] = useState('');
  const [faculty, setFaculty] = useState('');
  const [subjectID, setSubjectID] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Task Requested:', { department, faculty, subjectID, dueDate });
  };

  return (
    <div className="request-task-page">
      <h2>Request Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="request-task-form-group">
          <label htmlFor="department">Department</label>
          <input
            type="text"
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          />
        </div>
        <div className="request-task-form-group">
          <label htmlFor="faculty">Faculty</label>
          <input
            type="text"
            id="faculty"
            value={faculty}
            onChange={(e) => setFaculty(e.target.value)}
            required
          />
        </div>
        <div className="request-task-form-group">
          <label htmlFor="subjectID">Subject ID</label>
          <input
            type="text"
            id="subjectID"
            value={subjectID}
            onChange={(e) => setSubjectID(e.target.value)}
            required
          />
        </div>
        <div className="request-task-form-group">
          <label htmlFor="dueDate">Due Date</label>
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default RequestTask;
