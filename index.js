import { WEATHER_APP_PORT } from './resources/config';
import express from 'express';
import { initRoutes } from './startup/routes';

const app = express();
initRoutes(app);

const server = app.listen(WEATHER_APP_PORT, () => console.log(`Listening on port ${WEATHER_APP_PORT}...`));
export default server;