import React from 'react';
import './FacultyOverview.css';

const FacultyOverview = () => {
  // Sample data
  const overviewData = [
    { subjectID: 'SUB101', subjectName: 'Mathematics', submissionDate: '2024-09-10', dueDate: '2024-09-15' },
    { subjectID: 'SUB102', subjectName: 'Physics', submissionDate: '2024-09-20', dueDate: '2024-09-20' },
    { subjectID: 'SUB103', subjectName: 'Chemistry', submissionDate: '2024-09-25', dueDate: '2024-09-22' },
    { subjectID: 'SUB104', subjectName: 'Biology', submissionDate: '2024-10-02', dueDate: '2024-10-01' },
    { subjectID: 'SUB105', subjectName: 'History', submissionDate: '2024-10-05', dueDate: '2024-10-05' },
    
  ];

  const calculateMark = (submissionDate, dueDate) => {
    const subDate = new Date(submissionDate);
    const dueDateObj = new Date(dueDate);
    const mark = subDate > dueDateObj ? -5 : 10; // Example: -5 marks if submitted late
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
