import './login.css';
import React from 'react';

import ErrorFooter from './components/errorFooter';
import LoginButton from './components/loginButton';

import UserLogo from '../../assets/user.svg';

import AuthService from '../../services/authService';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        let initState = {
            loading: true,
            error: null,
            user_name: '',
            password: '',
        };
        this.state = { ...initState, ...props.location.state };
    }

    componentWillMount() {
        this.verifyToken();
    }

    async verifyToken() {
        let token = localStorage.getItem('token');
        if (token) {
            console.log(token);
            window.location = `/app`;
            return;
        }

        this.setState({ loading: false });
    }

    async doLogin() {
        this.setState({ loading: true });

        const { token, error } = await AuthService.getToken({
            user_name: this.state.user_name,
            password: this.state.password,
        });
        if (error) {
            this.setState({ loading: false, error });
            return;
        }
        await localStorage.setItem('token', token);
        window.location = `/app`;
    }

    renderLoading() {
        return <div>loading...</div>;
    }

    render() {
        if (this.state.isLoading) this.renderLoading();
        return (
            <div>
                <div className='wrapper fadeInDown'>
                    <div id='formContent'>
                        <div className='fadeIn first'>
                            <img src={UserLogo} height='130px' id='icon' alt='User Icon' />
                        </div>

                        <input
                            onChange={({ target: { value } }) => this.setState({ user_name: value })}
                            type='text'
                            id='login'
                            className='fadeIn second'
                            name='login'
                            placeholder='login'
                        />
                        <input
                            onChange={({ target: { value } }) => this.setState({ password: value })}
                            type='password'
                            id='password'
                            className='fadeIn third'
                            name='login'
                            placeholder='password'
                        />

                        <LoginButton isDisabled={this.state.loading} onClick={this.doLogin.bind(this)} />
                        <ErrorFooter error={this.state.error} />
                    </div>
                </div>
            </div>
        );
    }
}
