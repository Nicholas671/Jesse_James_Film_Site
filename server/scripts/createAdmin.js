import pool from '../db/db.js';
import dotenv from 'dotenv';
import readline from 'readline';
import { createAdminUser } from '../controllers/usersController.js';

// Load environment variables
dotenv.config();

// Create readline interface to read input from the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to create an admin user standalone
const createAdminUserStandalone = async (username, password) => {
    const req = { body: { username, password } };
    const res = {
        status: (code) => ({
            json: (data) => console.log(`Status: ${code}, Data:`, data)
        }),
        json: (data) => console.log('Data:', data)
    };

    await createAdminUser(req, res);
};

// Prompt the user for the username and password
rl.question('Enter admin username: ', (username) => {
    rl.question('Enter admin password: ', (password) => {
        createAdminUserStandalone(username, password);
        rl.close();
    });
});
