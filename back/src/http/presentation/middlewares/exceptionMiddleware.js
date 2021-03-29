module.exports = (err, req, res, next) => {
    let { error_code, message, details = [], stack_trace } = err;

    error_code = error_code || 500;

    return res.status(error_code).json({
        error_code,
        message,
        details,
        stack_trace: stack_trace,
    });
};
