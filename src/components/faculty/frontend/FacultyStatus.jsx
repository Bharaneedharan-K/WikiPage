import React from 'react';
import './FacultyStatus.css';

const FacultyStatus = () => {
  const statusData = [
    { subjectID: 'IT123', subjectName: 'DAA', semester: '5', status: 'Pending', reason: '' },
    { subjectID: 'CS123', subjectName: 'DSA', semester: '7', status: 'Accepted', reason: '' },
    { subjectID: 'CB123', subjectName: 'OS', semester: '2', status: 'Rejected', reason: 'Content not Maching' },
    { subjectID: 'EC123', subjectName: 'EE', semester: '3', status: 'Pending', reason: '' },
    { subjectID: 'BT 123', subjectName: 'BT', semester: '6', status: 'Accepted', reason: '' },
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
