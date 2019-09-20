
export const ErrType = {
    loadingLocation: { code: 100, description: 'Failed to get the current location of the device'},
    loadingWeather: { code: 101, description: 'Failed to get weather data'},
}

export default class CustomError extends Error {
    constructor(etype = { code:'', description:'' }, ...params) {
      // Pass remaining arguments (including vendor specific ones) to parent constructor
      super(...params);
  
      // Maintains proper stack trace for where our error was thrown (only available on V8)
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, CustomError);
      }
  
      this.name = 'CustomError';
      // Custom debugging information
      this.code = etype.code;
      this.desc = etype.description;
      this.date = new Date();
    }
  }