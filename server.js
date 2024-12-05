const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));  // Adjust the path to the index file
});

// Start the server on port 4000
app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});
