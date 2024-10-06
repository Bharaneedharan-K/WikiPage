const mongoose = require('mongoose');

const uri = 'mongodb+srv://bharanee:vrSNFD3%40GH%40HM49@wiki.fmwbqjf.mongodb.net/?retryWrites=true&w=majority'; // Update with your actual connection string

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    // Proceed with adding admin email
    const adminEmail = { emailId: 'bharanee2684@gmail.com' }; // Replace with the actual admin email
    
    // Assuming you have an Admin model set up
    const Admin = mongoose.model('Admin', new mongoose.Schema({ emailId: String }));
    
    return Admin.create(adminEmail);
  })
  .then(() => {
    console.log('Admin email added successfully');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error adding admin email:', err);
    mongoose.connection.close();
  });
