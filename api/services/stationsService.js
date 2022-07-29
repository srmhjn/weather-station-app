import { fetchData } from '../util';
import { apiConfig, TEMP_THRESHOLD } from '../../resources/config';

export const getFilteredStationsService = async () => {
	try {
		const response = await fetchData(apiConfig.WEATHER_URL);
		return response?.observations?.data?.filter((e) => {
			return e.apparent_t > TEMP_THRESHOLD
		}).map((el) => {
			return {
				name: el.name,
				apparent_t: el.apparent_t,
				lat: el.lat,
				long: el.lon,
			}
		}).sort((a, b) => {
			return a.apparent_t - b.apparent_t
		});
	} catch (error) {
		console.error(error);
		throw error;
	}
}