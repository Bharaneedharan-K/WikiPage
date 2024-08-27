import React from 'react';
import './FacultyStatus.css';

const FacultyStatus = () => {
  // Sample data
  const statusData = [
    { subjectID: 'SUB101', subjectName: 'Mathematics', semester: 'Fall 2024', status: 'Pending', reason: '' },
    { subjectID: 'SUB102', subjectName: 'Physics', semester: 'Fall 2024', status: 'Accepted', reason: '' },
    { subjectID: 'SUB103', subjectName: 'Chemistry', semester: 'Fall 2024', status: 'Rejected', reason: 'Late submission' },
    { subjectID: 'SUB104', subjectName: 'Biology', semester: 'Fall 2024', status: 'Pending', reason: '' },
    { subjectID: 'SUB105', subjectName: 'History', semester: 'Fall 2024', status: 'Accepted', reason: '' },
  ];

  return (
    <div className="faculty-status-dashboard">
      <div className="faculty-status-card">
        <h2 className="faculty-status-title">Faculty Status</h2>
        <table className="faculty-status-table">
          <thead>
            <tr>
              <th>Subject ID</th>
              <th>Subject Name</th>
              <th>Semester</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {statusData.map((status, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td>{status.subjectID}</td>
                  <td>{status.subjectName}</td>
                  <td>{status.semester}</td>
                  <td>
                    <span className={`status ${status.status.toLowerCase()}`}>{status.status}</span>
                    {status.status === 'Rejected' && <div className="status-reason">Reason: {status.reason}</div>}
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FacultyStatus;
