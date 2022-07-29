import { getFilteredStations } from './controller/stationsController';

import express from 'express';
const router = express.Router();

router.get('/list', getFilteredStations);
export default router;