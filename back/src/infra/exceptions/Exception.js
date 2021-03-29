module.exports = class Exception extends Error {
    constructor(exception, ...params) {
        super(exception.message(...params));
        this.code = exception.code;
        this.type = exception.type;
        this.params = params;
    }
};
