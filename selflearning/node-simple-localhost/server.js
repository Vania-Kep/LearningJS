const express = require('express');
const path = require('path');

const app = express();
var PORT = 3000;
PORT = 8080;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static('public'));

// Root route
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Simple Server</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; }
                .container { max-width: 600px; margin: 0 auto; }
                .btn { 
                    background-color: #007bff; 
                    color: white; 
                    padding: 10px 20px; 
                    text-decoration: none; 
                    border-radius: 5px; 
                    display: inline-block;
                    margin: 10px 0;
                }
                .btn:hover { background-color: #0056b3; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Welcome to Simple Server</h1>
                <p>Server is running on port ${PORT}</p>
                <a href="/login" class="btn">Login</a>
                <br>
                <a href="/login/callback" class="btn">Login Callback</a>
            </div>
        </body>
        </html>
    `);
});

// Login route
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Login callback route - handles both GET and POST requests
app.get('/login/callback', callbackGetHandler);
app.get('/authorization-code/callback', callbackGetHandler);

function callbackGetHandler(req, res) {
    console.log('🔍 GET /login/callback called');
    console.log('Query parameters:', req.query);
    
    const { code, state, error } = req.query;
    
    if (error) {
        console.log('❌ Error in callback:', error);
        return res.status(400).json({
            success: false,
            error: error,
            message: 'Login callback error'
        });
    }

    console.log('✅ Successful GET callback');
    res.json({
        success: true,
        method: 'GET',
        queryParams: req.query,
        message: 'Successfully reached the login callback endpoint!'
    });
}

// Login callback route - POST method for form submissions
app.post('/login/callback', callbackGetHandler);
app.post('/authorization-code/callback', callbackGetHandler);

function callbackGetHandler(req, res) {
    console.log('🔍 POST /login/callback called');
    console.log('Request body:', req.body);
    
    const { username, password } = req.body;
    
    // Simple authentication check (in real apps, use proper authentication)
    if (username && password) {
        console.log(`🔐 Attempting login for user: ${username}`);
        if (username === 'admin' && password === 'password') {
            console.log('✅ Login successful');
            res.json({
                success: true,
                method: 'POST',
                username: username,
                message: 'Login successful'
            });
        } else {
            console.log('❌ Invalid credentials');
            res.status(401).json({
                success: false,
                method: 'POST',
                message: 'Invalid username or password',
                hint: 'Try admin/password'
            });
        }
    } else {
        console.log('❌ Missing username or password');
        res.status(400).json({
            success: false,
            method: 'POST',
            message: 'Username and password are required'
        });
    }
}

// 404 handler
app.use((req, res) => {
    res.status(404).send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>404 - Not Found</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; text-align: center; }
                .container { max-width: 600px; margin: 0 auto; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>404 - Page Not Found</h1>
                <p>The requested URL was not found on this server.</p>
                <a href="/">← Back to Home</a>
            </div>
        </body>
        </html>
    `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Login callback available at http://localhost:${PORT}/login/callback`);
});
