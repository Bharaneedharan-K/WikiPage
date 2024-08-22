import React, { useState } from 'react';
import './RequestTask.css';

const RequestTask = () => {
  const [tasks, setTasks] = useState([
    {
      facultyName: 'Dr. John Doe (FD001)',
      subjectName: 'Artificial Intelligence (CS501)',
      unitNumber: 1,
      topic: 'Introduction to AI',
      lectureMaterial: 'material_link_1.pdf',
      lectureVideo: 'video_link_1.mp4',
      discourseName: 'discourse_1',
    },
    {
      facultyName: 'Dr. Jane Smith (FD002)',
      subjectName: 'Data Structures (CS301)',
      unitNumber: 2,
      topic: 'Binary Trees',
      lectureMaterial: 'material_link_2.pdf',
      lectureVideo: 'video_link_2.mp4',
      discourseName: 'discourse_2',
    },
    {
      facultyName: 'Dr. Alan Brown (FD003)',
      subjectName: 'Operating Systems (CS401)',
      unitNumber: 3,
      topic: 'Memory Management',
      lectureMaterial: 'material_link_3.pdf',
      lectureVideo: 'video_link_3.mp4',
      discourseName: 'discourse_3',
    },
    // Add more entries here
    {
      facultyName: 'Dr. Sarah Green (FD004)',
      subjectName: 'Machine Learning (CS601)',
      unitNumber: 4,
      topic: 'Neural Networks',
      lectureMaterial: 'material_link_4.pdf',
      lectureVideo: 'video_link_4.mp4',
      discourseName: 'discourse_4',
    },
    {
      facultyName: 'Dr. Emily White (FD005)',
      subjectName: 'Database Systems (CS201)',
      unitNumber: 5,
      topic: 'Normalization',
      lectureMaterial: 'material_link_5.pdf',
      lectureVideo: 'video_link_5.mp4',
      discourseName: 'discourse_5',
    },
    {
      facultyName: 'Dr. Michael Clark (FD006)',
      subjectName: 'Computer Networks (CS701)',
      unitNumber: 6,
      topic: 'Network Protocols',
      lectureMaterial: 'material_link_6.pdf',
      lectureVideo: 'video_link_6.mp4',
      discourseName: 'discourse_6',
    },
    {
      facultyName: 'Dr. Laura Davis (FD007)',
      subjectName: 'Software Engineering (CS801)',
      unitNumber: 7,
      topic: 'Agile Methodologies',
      lectureMaterial: 'material_link_7.pdf',
      lectureVideo: 'video_link_7.mp4',
      discourseName: 'discourse_7',
    },
    {
      facultyName: 'Dr. Brian Wilson (FD008)',
      subjectName: 'Algorithms (CS901)',
      unitNumber: 8,
      topic: 'Dynamic Programming',
      lectureMaterial: 'material_link_8.pdf',
      lectureVideo: 'video_link_8.mp4',
      discourseName: 'discourse_8',
    },
    {
      facultyName: 'Dr. Olivia King (FD009)',
      subjectName: 'Computer Graphics (CS601)',
      unitNumber: 9,
      topic: 'Rendering Techniques',
      lectureMaterial: 'material_link_9.pdf',
      lectureVideo: 'video_link_9.mp4',
      discourseName: 'discourse_9',
    },
    {
      facultyName: 'Dr. Kevin Miller (FD010)',
      subjectName: 'Cybersecurity (CS501)',
      unitNumber: 10,
      topic: 'Encryption Techniques',
      lectureMaterial: 'material_link_10.pdf',
      lectureVideo: 'video_link_10.mp4',
      discourseName: 'discourse_10',
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
            <th>Faculty Name with ID</th>
            <th>Subject Name with Code</th>
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
