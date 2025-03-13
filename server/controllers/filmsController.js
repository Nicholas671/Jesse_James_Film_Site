// I'll use this import pool from './db.js';
// I'll use this import { getFilmsQuery, getFilmQuery, createFilmQuery, updateFilmQuery, deleteFilmQuery, deleteAllFilmsQuery } from './queries.js';
// I'll use this import pool from './db.js';

import pool from '../db/db.js';
import {
    getFilmsQuery,
    getFilmQuery,
    createFilmQuery,
    updateFilmQuery,
    deleteFilmQuery,
    deleteAllFilmsQuery
} from '../db/queries.js';

// Get all films
const getFilms = async (req, res) => {
    try {
        const response = await pool.query(getFilmsQuery);
        res.status(200).json(response.rows);
    } catch (err) {
        console.error('Error getting films:', err);
        res.status(500).json({ error: 'Error getting films' });
    }
};

// Get a single film by ID
const getFilm = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await pool.query(getFilmQuery, [id]);
        res.status(200).json(response.rows[0]);
    } catch (err) {
        console.error('Error getting film:', err);
        res.status(500).json({ error: 'Error getting film' });
    }
};

// Create a new film
const createFilm = async (req, res) => {
    const { title, year, director, rating, poster } = req.body;
    try {
        const response = await pool.query(createFilmQuery, [title, year, director, rating, poster]);
        res.status(201).json(response.rows[0]);
    } catch (err) {
        console.error('Error creating film:', err);
        res.status(500).json({ error: 'Error creating film' });
    }
};

// Update an existing film
const updateFilm = async (req, res) => {
    const { id } = req.params;
    const { title, year, director, rating, poster } = req.body;
    try {
        const response = await pool.query(updateFilmQuery, [title, year, director, rating, poster, id]);
        res.status(200).json(response.rows[0]);
    } catch (err) {
        console.error('Error updating film:', err);
        res.status(500).json({ error: 'Error updating film' });
    }
};

// Delete a film by ID
const deleteFilm = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query(deleteFilmQuery, [id]);
        res.status(200).json({ message: 'Film deleted successfully' });
    } catch (err) {
        console.error('Error deleting film:', err);
        res.status(500).json({ error: 'Error deleting film' });
    }
};

// Delete all films
const deleteAllFilms = async (req, res) => {
    try {
        await pool.query(deleteAllFilmsQuery);
        res.status(200).json({ message: 'All films deleted successfully' });
    } catch (err) {
        console.error('Error deleting all films:', err);
        res.status(500).json({ error: 'Error deleting all films' });
    }
};

export { getFilms, getFilm, createFilm, updateFilm, deleteFilm, deleteAllFilms };

