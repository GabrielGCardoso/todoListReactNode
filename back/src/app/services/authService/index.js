class AuthService {
    constructor() {
        this.jwt = require('jsonwebtoken');
    }

    async getToken({ user_name, password, id }) {
        let token = this.jwt.sign(
            {
                exp: Math.floor(Date.now() / 1000) + 60 * 60,
                data: { user_name, password, id },
            },
            'secret'
        );
        return { token };
    }
}

module.exports = AuthService;
