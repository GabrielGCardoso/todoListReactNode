import api from './api';

class AuthService {
    constructor(api) {
        this.api = api();
    }

    errorHandler = function (err) {
        if (err && err.response && err.response.data && err.response.data.message) {
            return { error: { message: err.response.data.message } };
        }
        return { error: err };
    };

    getToken(credential) {
        return new Promise((resolve) => {
            this.api
                .post('/auth/login', credential)
                .then((resp) => resolve({ token: resp.data.token }))
                .catch((err) => resolve(this.errorHandler(err)));
        });
    }

    singIn(credential) {
        return new Promise((resolve) => {
            this.api
                .post('/auth/sign-up', credential)
                .then((resp) => resolve({ token: resp.data.token }))
                .catch((err) => resolve(this.errorHandler(err)));
        });
    }

    revalidateToken(token) {
        return new Promise((resolve) => {
            if (!!token) {
                resolve({ token: '12341234' });
            }
            resolve({ error: 'token not found' });
        });
    }
}
export default new AuthService(api);
