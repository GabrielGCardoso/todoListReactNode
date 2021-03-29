class AuthService {
    async getToken({ user_name, password }) {
        console.log(user_name, password);
        return { token: `${user_name}${password}` };
    }
}

module.exports = AuthService;
