import { messages } from "../../resources/config";

export const getFilteredStationsServiceMock = async function() {
	return {
		Positive: async function() {
            return [
                {
                  name: 'Sydney Olympic Park',
                  apparent_t: 16.9,
                  lat: -33.8,
                  long: 151.1
                },
                {
                  name: 'Sydney Olympic Park',
                  apparent_t: 17.9,
                  lat: -33.8,
                  long: 151.1
                }
              ]
		},
		Negative: async function(){
			throw new Error(messages.UNKNOWN_ERROR);
		}
	};
};
