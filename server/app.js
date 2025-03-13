import express from 'express';
import dotenv from 'dotenv';
import filmsRoutes from './routes/filmsRoutes.js';
import { createTables } from './db/db.js';
import { parseJson, parseUrlEncoded, handleCors } from './middlewares/middlewaresAdmin.js';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(handleCors);
app.use(parseJson);
app.use(parseUrlEncoded);

// Function to initialize the app
const init = async () => {
    try {
        // Initialize database and create tables
        await createTables();

        // Routes
        app.use('/api', filmsRoutes);

        // Root route
        app.get('/', (req, res) => {
            res.send('Welcome to the Films API');
        });

        // Start the server
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (err) {
        console.error('Error during app initialization:', err);
        process.exit(1); // Exit the process with a failure code
    }
};

// Call the init function to start the app
init();
