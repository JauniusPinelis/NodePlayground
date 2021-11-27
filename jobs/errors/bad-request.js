class BadRequestError extends Error {
    constructor(message) {
        super(message)
        this.statusMessage = StatusCodes.BadRequestError;
    }
}