import pool from '../db/db.js';
import { createUserQuery } from '../db/queries.js';

// Create an admin user
const createAdminUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const response = await pool.query(createUserQuery, [username, password, true]);
        res.status(201).json(response.rows[0]);
    } catch (err) {
        console.error('Error creating admin user:', err);
        res.status(500).json({ error: 'Error creating admin user' });
    }
}

export { createAdminUser };
