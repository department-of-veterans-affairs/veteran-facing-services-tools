const express = require('express');
const path = require('path');

const port = process.env.PORT || 8080;
const app = express();

// Serve static assets normally
app.use(express.static(path.resolve(__dirname, 'dist')));

// Handle every other route with index.html, which contains
// the application's ReactDOM.render() method.
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port);
// eslint-disable-next-line no-console
console.log(`Server started on port ${port}`);
