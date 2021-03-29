import api from './api';

class AuthService {
    constructor(api) {
        this.api = api();
    }

    getToken(credential) {
        return new Promise((resolve, reject) => {
            this.api
                .post('/auth/login', credential)
                .then((resp) => resolve({ token: resp.data.token }))
                .catch((err) => resolve({ error: err }));
        });
    }

    singIn() {
        return new Promise((resolve) => {
            resolve({ success: 'user created successfully!' });
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
