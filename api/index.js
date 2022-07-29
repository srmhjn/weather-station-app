import { getFilteredStations } from './controller/stationsController.js';

import express from 'express';
const router = express.Router();

router.get('/list', getFilteredStations);
export default router;