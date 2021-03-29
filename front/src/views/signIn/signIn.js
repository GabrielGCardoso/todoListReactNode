import './signIn.css';
import React from 'react';

import ErrorFooter from './components/errorFooter';
import SignInButton from './components/signInButton';

import UserLogo from '../../assets/user.svg';

import AuthService from '../../services/authService';

export default class WeatherView extends React.Component {
    constructor(props) {
        super(props);
        let initState = {
            loading: true,
            error: null,
            user_name: null,
            password: null,
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

    async doSignIn() {
        this.setState({ loading: true });

        const { error } = await AuthService.singIn({ user_name: this.state.user_name, password: this.state.password });
        if (error) {
            this.setState({ loading: false, error });
            return;
        }
        alert('user created successfully!');
        //location to logIn
        window.location = `/`;
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
                            type='text'
                            onChange={({ target: { value } }) => this.setState({ user_name: value })}
                            id='login'
                            className='fadeIn second'
                            name='login'
                            placeholder='login'
                        />
                        <input
                            type='password'
                            onChange={({ target: { value } }) => this.setState({ password: value })}
                            id='password'
                            className='fadeIn third'
                            name='login'
                            placeholder='password'
                        />

                        <SignInButton
                            isDisabled={this.state.loading}
                            isLoading={this.state.isLoading}
                            onClick={this.doSignIn.bind(this)}
                        />
                        <ErrorFooter error={this.state.error} />
                    </div>
                </div>
            </div>
        );
    }
}
