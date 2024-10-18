import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FacultyRequest.css';

const FacultyRequest = () => {
  const requestData = [
    { subjectID: 'IT123', subjectName: 'DSA', semester: 'Sem 8', dueDate: '2024-09-15', daysPending: -9 },
    { subjectID: 'CS123', subjectName: 'OS', semester: 'Sem 2', dueDate: '2024-09-20', daysPending: -4 },
    { subjectID: 'CB123', subjectName: 'DAA', semester: 'Sem 4', dueDate: '2024-09-25',  daysPending: 1},
    { subjectID: 'EC123', subjectName: 'EE', semester: 'Sem 1', dueDate: '2024-10-01', daysPending: 6 },
    { subjectID: 'BT123', subjectName: 'BT', semester: 'Sem 8', dueDate: '2024-10-05', daysPending: 10 },
  ];

  const navigate = useNavigate();

  const handleUploadClick = (dueDate) => {
    navigate('/faculty/upload', { state: { dueDate } });
  };

  return (
    <div className="faculty-request-dashboard">
      <div className="faculty-request-card">
        <h2 className="faculty-request-title">Requested Task</h2>
        <table className="faculty-request-table">
          <thead>
            <tr>
              <th>Subject ID</th>
              <th>Subject Name</th>
              <th>Semester</th>
              <th>Due Date</th>
              <th>Days Pending</th>
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
                <td>{request.daysPending}</td>
                <td>
                  <button
                    className="faculty-request-upload-button"
                    onClick={() => handleUploadClick(request.dueDate)}
                  >
                    Upload
                  </button>
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
