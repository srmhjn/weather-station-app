import { getFilteredStationsService } from '../services/stationsService.js';
import { respondWithResult, respondWithError } from '../util.js';

export const getFilteredStations = async (req, res) => {
	try {
		const data = await getFilteredStationsService(req, res);
		respondWithResult(data, res);
	} catch (error) {
		respondWithError(res, error);
	}
};