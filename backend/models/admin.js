// src/components/admin.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [adminEmails, setAdminEmails] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAdminEmails = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin'); // Adjust the API endpoint
        setAdminEmails(response.data);
      } catch (err) {
        console.error('Error fetching admin emails:', err);
        setError('Failed to fetch admin emails');
      }
    };

    fetchAdminEmails();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {error && <p>{error}</p>}
      <h2>Admin Emails:</h2>
      <ul>
        {adminEmails.map(email => (
          <li key={email._id}>{email.emailId}</li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
