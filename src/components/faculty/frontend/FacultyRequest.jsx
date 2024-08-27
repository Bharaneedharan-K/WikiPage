import React from 'react';
import './FacultyRequest.css';

const FacultyRequest = () => {
  // Sample data
  const requestData = [
    { subjectID: 'SUB101', subjectName: 'Mathematics', semester: 'Fall 2024', dueDate: '2024-09-15' },
    { subjectID: 'SUB102', subjectName: 'Physics', semester: 'Fall 2024', dueDate: '2024-09-20' },
    { subjectID: 'SUB103', subjectName: 'Chemistry', semester: 'Fall 2024', dueDate: '2024-09-25' },
    { subjectID: 'SUB104', subjectName: 'Biology', semester: 'Fall 2024', dueDate: '2024-10-01' },
    { subjectID: 'SUB105', subjectName: 'History', semester: 'Fall 2024', dueDate: '2024-10-05' },
  ];

  return (
    <div className="faculty-request-dashboard">
      <div className="faculty-request-card">
        <h2 className="faculty-request-title">Request Uploads</h2>
        <div className="faculty-request-filters">
          <input type="text" placeholder="Filter by Subject Name" className="faculty-request-filter" />
          <input type="text" placeholder="Filter by Semester" className="faculty-request-filter" />
          <input type="date" className="faculty-request-filter" />
          <button className="faculty-request-apply-button">Apply Filter</button>
          <button className="faculty-request-reset-button">Reset Filters</button>
        </div>
        <table className="faculty-request-table">
          <thead>
            <tr>
              <th>Subject ID</th>
              <th>Subject Name</th>
              <th>Semester</th>
              <th>Due Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {requestData.map((request, index) => (
              <tr key={index}>
                <td>{request.subjectID}</td>
                <td>{request.subjectName}</td>
                <td>{request.semester}</td>
                <td>{request.dueDate}</td>
                <td>
                  <button className="faculty-request-upload-button">Upload</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FacultyRequest;
