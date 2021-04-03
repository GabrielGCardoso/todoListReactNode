const { Errors, Exceptions } = require('src/infra/exceptions');

class AuthService {
    constructor() {
        this.jwt = require('jsonwebtoken');
    }

    async getToken({ user_name, password, id }) {
        const token = this.jwt.sign(
            {
                exp: Math.floor(Date.now() / 1000) + 60 * 60,
                data: { user_name, password, id },
            },
            'secret'
        );
        return { token };
    }

    async validateToken(token) {
        return this.jwt.verify(token, 'secret', function (err, decoded) {
            if (err) throw new Error(err);
            const now = Date.now().valueOf() / 1000;
            if (typeof decoded.exp !== 'undefined' && decoded.exp < now) {
                throw Exceptions.unauthorized('token expired, please make login again!');
            }
            return decoded.data;
        });
    }
}

module.exports = AuthService;
