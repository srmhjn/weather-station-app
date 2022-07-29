import axios from 'axios';
import AppError from '../resources/AppError.js';
import { httpStatusCode, messages } from '../resources/config.js';
export const respondWithResult = function (data, res) {
	let message = messages.SUCCESS;
	let statusCode = httpStatusCode.SUCCESS;
	if (!data.length) {
		message = messages.NO_DATA_FOUND;
	}
	res.status(statusCode).send({ message, response: data });
};

export const respondWithError = function (res, error) {
	let message = error.message || messages.UNKNOWN_ERROR;
	let statusCode = error.statusCode || httpStatusCode.INTERNAL_SERVER_ERROR;
	res.status(statusCode).send({ message });
};

export const fetchData = async (url) => {
	try {
		const res = await axios.get(url);
		return res.data;
	} catch (error) {
		throw new AppError(messages.SERVICE_NOT_AVAILABLE, httpStatusCode.SERVICE_UNAVAILABLE);
	}
};