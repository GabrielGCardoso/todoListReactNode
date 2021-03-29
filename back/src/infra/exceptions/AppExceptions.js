const { applicationError } = require('./ErrorTypes');

module.exports = {
    [applicationError.BUSINESS](error, error_code) {
        const defaultErrorCode = '422';

        error = this._buildError(error);

        const overwriteErrorCode = !!(error && error.error_code && error_code);
        if (overwriteErrorCode)
            error.error_code = this._buildErrorCode(error_code);

        error.error_type = applicationError.BUSINESS;
        error.error_code = error.error_code || this._buildErrorCode(error_code, defaultErrorCode);

        return error;
    },

    [applicationError.CONTRACT](error, error_code) {
        const defaultErrorCode = '400';

        error = this._buildError(error);

        const overwriteErrorCode = !!(error && error.error_code && error_code);
        if (overwriteErrorCode)
            error.error_code = this._buildErrorCode(error_code);

        error.error_type = applicationError.CONTRACT;
        error.error_code = error.error_code || this._buildErrorCode(error_code, defaultErrorCode);

        return error;
    },

    [applicationError.NOT_FOUND](error, error_code) {
        const defaultErrorCode = '404';

        error = this._buildError(error);

        const overwriteErrorCode = !!(error && error.error_code && error_code);
        if (overwriteErrorCode)
            error.error_code = this._buildErrorCode(error_code);

        error.error_type = applicationError.NOT_FOUND;
        error.error_code = error.error_code || this._buildErrorCode(error_code, defaultErrorCode);

        return error;
    },

    [applicationError.INTEGRATION](error, error_code) {
        const defaultErrorCode = '503';

        error = this._buildError(error);

        const overwriteErrorCode = !!(error && error.error_code && error_code);
        if (overwriteErrorCode)
            error.error_code = this._buildErrorCode(error_code);

        error.error_type = applicationError.INTEGRATION;
        error.error_code = error.error_code || this._buildErrorCode(error_code, defaultErrorCode);

        return error;
    },

    [applicationError.OPERATION](error, error_code) {
        const defaultErrorCode = '500';

        error = this._buildError(error);

        const overwriteErrorCode = error && error.error_code && error_code;
        if (overwriteErrorCode)
            error.error_code = this._buildErrorCode(error_code);

        error.error_type = applicationError.OPERATION;
        error.error_code = error.error_code || this._buildErrorCode(error_code, defaultErrorCode);

        return error;
    },

    _buildError(error) {
        if (typeof error === 'string') error = new Error(error);
        if (error instanceof Error) return error;

        return new Error('Unknown error');
    },

    _buildErrorCode(errorCode, defaultErrorCode) {
        return errorCode || defaultErrorCode;
    }
};
