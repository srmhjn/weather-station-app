import { httpStatusCode } from "./config";

export default class AppError extends Error {
    message = "";
    statusCode = 0;
    constructor(message,statusCode) {
       super();
       Error.call(this);
       this.message = message;
       this.statusCode = statusCode || httpStatusCode.INTERNAL_SERVER_ERROR;
   }
}