
const applicationError = {
    BUSINESS: 'business',
    NOT_FOUND: 'notFound',
    CONTRACT: 'contract',
    INTEGRATION: 'integration',
    UNAUTHORIZED: 'unauthorized',
    OPERATION: 'operation'
};

const applicationErrorCode = {
    '422': 'business',
    '404': 'notFound',
    '401': 'unauthorized',
    '400': 'contract',
    '504': 'integration',
    '500': 'operation',
};

module.exports = { applicationError, applicationErrorCode };