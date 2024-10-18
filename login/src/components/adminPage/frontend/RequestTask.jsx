import React, { useState } from 'react';
import './RequestTask.css';

const RequestTask = () => {
  const [tasks] = useState([
    {
      facultyName: 'AAAA(CS123)',
      subjectName: 'Artificial Intelligence Study',
      unitNumber: 1,
      topic: 'Introduction to AI',
      lectureMaterial: 'material_link_1.pdf',
      lectureVideo: 'video_link_1.mp4',
      discourseName: 'discourse_1',
    },
    {
      facultyName: 'SSSS (CS123)',
      subjectName: 'Data Structures',
      unitNumber: 2,
      topic: 'Binary Trees',
      lectureMaterial: 'material_link_2.pdf',
      lectureVideo: 'video_link_2.mp4',
      discourseName: 'discourse_2',
    },
    {
      facultyName: 'DDDD (CS003)',
      subjectName: 'Operating Systems (CS401)',
      unitNumber: 3,
      topic: 'Memory Management',
      lectureMaterial: 'material_link_3.pdf',
      lectureVideo: 'video_link_3.mp4',
      discourseName: 'discourse_3',
    },
    {
      facultyName: 'FFFF (EC123)',
      subjectName: 'Machine Learning (CS601)',
      unitNumber: 4,
      topic: 'Neural Networks',
      lectureMaterial: 'material_link_4.pdf',
      lectureVideo: 'video_link_4.mp4',
      discourseName: 'discourse_4',
    },
    
    
  ]);

  const handleApprove = (index) => {
    console.log(`Approved task ${index + 1}`);
    // Implement approval logic here
  };

  const handleReject = (index) => {
    const reason = prompt('Please provide a reason for rejection:');
    if (reason) {
      console.log(`Rejected task ${index + 1} for reason: ${reason}`);
      // Implement rejection logic here
    }
  };

  return (
    <div className="request-task-container">
      <h2>Request Task</h2>
      <table className="request-task-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject Code</th>
            <th>Unit Number</th>
            <th>Topic</th>
            <th>Lecture Material</th>
            <th>Lecture Video</th>
            <th>Discourse Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.facultyName}</td>
              <td>{task.subjectName}</td>
              <td>{task.unitNumber}</td>
              <td>{task.topic}</td>
              <td><a href={task.lectureMaterial} target="_blank" rel="noopener noreferrer">Material</a></td>
              <td><a href={task.lectureVideo} target="_blank" rel="noopener noreferrer">Video</a></td>
              <td><a href={task.discourseName} target="_blank" rel="noopener noreferrer">Discourse</a></td>
              <td>
                <button onClick={() => handleApprove(index)}>Approve</button>
                <button onClick={() => handleReject(index)}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RequestTask;
