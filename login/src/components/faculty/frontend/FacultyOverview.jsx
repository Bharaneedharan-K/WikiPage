import React from 'react';
import './FacultyOverview.css';

const FacultyOverview = () => {
  const overviewData = [
    { subjectID: 'IT132', subjectName: 'Software Engineering', submissionDate: '2024-09-10', dueDate: '2024-09-15' },
    { subjectID: 'CS123', subjectName: 'Operating System', submissionDate: '2024-09-20', dueDate: '2024-09-20' },
    { subjectID: 'CB123', subjectName: 'DSA', submissionDate: '2024-09-25', dueDate: '2024-09-22' },
    { subjectID: 'EC123', subjectName: 'Electronics', submissionDate: '2024-10-02', dueDate: '2024-10-01' },
    { subjectID: 'BT123', subjectName: 'Palnt', submissionDate: '2024-10-05', dueDate: '2024-10-05' },
    
  ];

  const calculateMark = (submissionDate, dueDate) => {
    const subDate = new Date(submissionDate);
    const dueDateObj = new Date(dueDate);
    const mark = subDate > dueDateObj ? -5 : 10;
    return mark;
  };

  return (
    <div className="faculty-overview-dashboard">
      <div className="faculty-overview-card">
        <h2 className="faculty-overview-title">Overview</h2>
        <table className="faculty-overview-table">
          <thead>
            <tr>
              <th>Subject ID</th>
              <th>Subject Name</th>
              <th>Submission Date</th>
              <th>Due Date</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {overviewData.map((data, index) => (
              <tr key={index}>
                <td>{data.subjectID}</td>
                <td>{data.subjectName}</td>
                <td>{data.submissionDate}</td>
                <td>{data.dueDate}</td>
                <td>{calculateMark(data.submissionDate, data.dueDate)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FacultyOverview;
