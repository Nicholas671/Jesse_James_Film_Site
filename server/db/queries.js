// This file I will use to manage the queries to the database

// Get all films query
const getFilmsQuery = 'SELECT * FROM films';
const getFilmQuery = 'SELECT * FROM films WHERE id = $1';
const createFilmQuery = 'INSERT INTO films (title, year, director, rating, poster) VALUES ($1, $2, $3, $4, $5) RETURNING *';
const updateFilmQuery = 'UPDATE films SET title = $1, year = $2, director = $3, rating = $4, poster = $5 WHERE id = $6 RETURNING *';
const deleteFilmQuery = 'DELETE FROM films WHERE id = $1';
const deleteAllFilmsQuery = 'DELETE FROM films';

export {
    getFilmsQuery,
    getFilmQuery,
    createFilmQuery,
    updateFilmQuery,
    deleteFilmQuery,
    deleteAllFilmsQuery
};
