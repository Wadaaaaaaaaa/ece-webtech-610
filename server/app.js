const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to serve static files (CSS, JS, images, etc.)
app.use(express.static('public'));

// Middleware to parse JSON request bodies
app.use(express.json());

// Function to check if a file exists
function fileExists(filePath) {
  return fs.existsSync(filePath);
}

// Route 1: Explains how /hello works
app.get('/', (req, res) => {
  res.send(`
    <h1>How /hello Works</h1>
    <p>This is the /hello route. You can provide a 'name' query parameter to customize the response.</p>
    <p>For example: /hello?name=John</p>
  `);
});

// Route 2: /hello takes a 'name' query parameter
app.get('/hello', (req, res) => {
  const name = req.query.name;
  if (!name) {
    res.status(400).send('Please provide a "name" query parameter.');
  } else if (name.toLowerCase() === 'marwan') {
    res.send('Hello! I am an example application created by marwan .');
  } else {
    res.send(`Hello ${name}!`);
  }
});

// Route for /about
app.get('/about', (req, res) => {
    const contentPath = path.join(__dirname, 'content', 'about.json');
  
    if (fileExists(contentPath)) {
      const aboutData = require(contentPath);
      res.json(aboutData);
    } else {
      res.status(404).send('Not Found');
    }
  });


// Route 3: Any other path returns a 404 with a "Not Found" message
app.use((req, res) => {
  res.status(404).send('Not Found');
});





app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
