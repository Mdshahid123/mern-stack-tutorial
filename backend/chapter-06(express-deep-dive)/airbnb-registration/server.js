const express = require('express');
const path = require('path');
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/register', (req, res) => {
    console.log('Home registration data:', req.body);
    // In a real app, you'd save this to a database
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Registration Successful</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <header>
                <nav>
                    <div class="logo">
                        <h1>Airbnb</h1>
                    </div>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/register">Register Home</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <div class="registration-container">
                    <h2>Registration Successful!</h2>
                    <p>Your home "${req.body.homeName}" has been registered successfully.</p>
                    <a href="/" class="submit-btn" style="text-decoration: none; display: inline-block; text-align: center;">Back to Home</a>
                </div>
            </main>
        </body>
        </html>
    `);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});