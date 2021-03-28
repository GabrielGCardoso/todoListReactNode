const React = require('react');
const axios = require('axios');

export default new (class AuthService extends React.Component {
    constructor(props) {
        super(props);
        this.defaultURL = 'http://localhost:3000';
    }

    getToken() {
        return new Promise((resolve) => {
            resolve({ token: '120394123' });
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
})();
