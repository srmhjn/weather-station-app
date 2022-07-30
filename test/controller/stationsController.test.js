import getFilteredStations from '../../controller/stationsController.js';
import getFilteredStationsServiceMock from '../mocks/serviceMock.js';
import messages from '../../../resources/config.js';
import servicemodule from '../../services/stationsService.js';

let expressMock = null;

describe('Stations Controller',() => {
    test('getFilteredStations : Positive', async () => {
		const _getFilteredStationsMock = new getFilteredStationsServiceMock();  
		jest.spyOn(servicemodule, 'getFilteredStationsService').mockImplementation(() => {
			return _getFilteredStationsMock.Positive();
		});
		await getFilteredStations(expressMock.req, expressMock.res);
		expect(expressMock.res.statusCode).toBe(200);
	});

	test('getFilteredStations : Negative', async () => {  
		try {
			const _getFilteredStationsMock = new getFilteredStationsServiceMock();  
			jest.spyOn(servicemodule, 'getFilteredStationsService').mockImplementation(() => {
				return _getFilteredStationsMock.Negative();
			});
			expressMock.req = {};
			expressMock.res = {"error":messages.UNKNOWN_ERROR};
			await getFilteredStations(expressMock.req,expressMock.res);
		} catch(err) {
			expect(err.message).toBe(messages.UNKNOWN_ERROR);
		}
	});
});