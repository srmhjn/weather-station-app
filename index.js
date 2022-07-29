import { WEATHER_APP_PORT } from './resources/config.js';
import express from 'express';
import { initRoutes } from './startup/routes.js';

const app = express();
initRoutes(app);
app.get('/',(req,res)=>res.send("<h1>WELCOME TO WEATHER STATION APP</h1>"));

const server = app.listen(process.env.PORT || WEATHER_APP_PORT, () => console.log(`Listening on port ${WEATHER_APP_PORT}...`));
export default server;
