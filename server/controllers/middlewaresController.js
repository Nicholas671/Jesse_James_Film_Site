import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const parseJson = (req, res, next) => {
    express.json()(req, res, next);
};

export const parseUrlEncoded = (req, res, next) => {
    express.urlencoded({extended: true})(req, res, next);
};

export const handleCors = (req, res, next) => {
    cors()(req, res, next);
};

export const authenticateAdmin = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
        return res.status(403).json({message: 'No token provided'});
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({message: 'Unauthorized'});
        } else if (decoded.role !== 'admin') {
            return res.status(403).json({message: 'Forbidden'});
        } else {
            req.userId = decoded.id;
            next();
        }
    });
};
