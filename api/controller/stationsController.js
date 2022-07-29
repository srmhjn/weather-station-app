import { getFilteredStationsService } from '../services/stationsService';
import { respondWithResult, respondWithError } from '../util';

export const getFilteredStations = async (req, res) => {
	try {
		const data = await getFilteredStationsService(req, res);
		respondWithResult(data, res);
	} catch (error) {
		respondWithError(res, error);
	}
};