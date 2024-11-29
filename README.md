Node.js HTTP Server
  This is a simple Node.js HTTP server that listens on port 3000 and responds with appropriate messages for different routes. The server is designed to demonstrate basic HTTP handling and JSON response functionality.
Features
Responds with a welcome message for the root path (/).
Provides a JSON response for the /api endpoint.
Handles undefined routes with a 404 Not Found error.
Navigate to the project directory:
  cd <your-project-directory>
Run the server:
  node server.js
  The server will start running on http://localhost:3000
API Endpoints
  Root Path (/)
    Method: GET
    Response: Plain text message
    Welcome to the Node.js Server!
  /api
    Method: GET
    Response: JSON object
    {
      "message": "Hello, welcome to the Node.js API!",
      "success": true
    }
  Undefined Routes
    Response: Plain text message
    plaintext
    404 Not Found
