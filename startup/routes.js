import stations from '../api/index.js';
import express from 'express';

export function initRoutes(app) {
	app.use(express.json());
	app.use('/api/stations/', stations);
}