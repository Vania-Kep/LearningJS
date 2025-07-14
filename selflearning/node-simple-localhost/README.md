# Simple Node.js Server with Login Callback

A simple Express.js server that provides a login callback endpoint accessible at `http://localhost:3000/login/callback`.

## Features

- **Root Route** (`/`): Welcome page with navigation links
- **Login Route** (`/login`): Simple login form
- **Login Callback Route** (`/login/callback`): Handles both GET and POST requests
  - GET: For OAuth-style callbacks with query parameters
  - POST: For form submissions with username/password

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

## Running the Server

### Development Mode (with auto-restart)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:3000`

## Available Endpoints

- `GET /` - Home page
- `GET /login` - Login form
- `GET /login/callback` - Login callback (for OAuth-style authentication)
- `POST /login/callback` - Login callback (for form-based authentication)

## Testing the Login Callback

### Testing GET requests
Visit: `http://localhost:3000/login/callback?code=abc123&state=xyz789`

### Testing POST requests
1. Visit `http://localhost:3000/login`
2. Use credentials: `admin` / `password`
3. Submit the form to trigger the POST callback

## Project Structure

```
node-simple-localhost/
├── package.json
├── server.js
└── README.md
```

## Dependencies

- **express**: Web framework for Node.js
- **nodemon**: Development dependency for auto-restarting the server

## Notes

This is a simple demonstration server. In a production environment, you would need to implement:
- Proper authentication and authorization
- Session management or JWT tokens
- HTTPS encryption
- Input validation and sanitization
- Database integration
- Error handling and logging
