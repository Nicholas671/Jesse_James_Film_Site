import express from 'express';
import { getFilms, getFilm, createFilm, updateFilm, deleteFilm, deleteAllFilms } from '../controllers/filmsController.js';
import { authenticateAdmin } from '../middlewares/middlewaresController.js';

const router = express.Router();

router.get('/films', authenticateAdmin, getFilms);
router.get('/films/:id', authenticateAdmin, getFilm);
router.post('/films', authenticateAdmin, createFilm);
router.put('/films/:id', authenticateAdmin, updateFilm);
router.delete('/films/:id', authenticateAdmin, deleteFilm);
router.delete('/films', authenticateAdmin, deleteAllFilms);

export default router;

