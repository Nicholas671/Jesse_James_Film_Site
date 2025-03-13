// This is the database schema for the tables in the databasem, it follows the PostgreSQL syntax
// This is the schema for the tables in the database
// Currently the only table is the films table
// The films table has the following columns:
// - id: the unique id of the film
// - title: the title of the film
// - year: the year the film was released
// - director: the director of the film
// - rating: the rating of the film
// - poster: the poster of the film

import { Pool } from 'pg';
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'films',
    password: 'password',
    port: 5432
});

const createTables= async () => {
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


}




export { pool, createTables };