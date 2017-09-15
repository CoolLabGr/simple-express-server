const express = require('express')
const path = require('path');

/* Instantiate the server */
const server = express()

/* Set the public folder */
server.use(express.static(path.join(__dirname, 'public')))

/* Start the Server */
server.listen(8080, () => {
  console.log('Server is on @ http://localhost:8080')
})
