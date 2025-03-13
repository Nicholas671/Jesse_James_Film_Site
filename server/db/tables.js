import pool from './db.js';

const createTables = async () => {
    const SQL = `
    DROP TABLE IF EXISTS films;
    DROP TABLE IF EXISTS users;
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(100) NOT NULL,
        password VARCHAR(100) NOT NULL,
        is_admin BOOLEAN NOT NULL
    );

    CREATE TABLE IF NOT EXISTS films (
        id SERIAL PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        year INTEGER NOT NULL,
        director VARCHAR(100) NOT NULL,
        rating INTEGER NOT NULL,
        poster VARCHAR(200) NOT NULL
    );
    `;
    await pool.query(SQL);
    console.log('Tables created successfully');
};

createTables().catch(err => console.error('Error creating tables:', err));

export { createTables };