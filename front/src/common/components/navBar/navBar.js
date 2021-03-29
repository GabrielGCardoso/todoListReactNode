import React from 'react';
export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }
    renderSignOutAndLogin() {
        if (localStorage.getItem('token')) {
            return (
                <button onClick={this.props.signOut} class='btn btn-outline-danger my-2 my-sm-0'>
                    Sign out
                </button>
            );
        }
        return (
            <>
                <button
                    onClick={this.props.singIn}
                    style={{ marginRight: '10px' }}
                    class='btn btn-outline-success my-2 my-sm-0'
                >
                    Sign in
                </button>
                <button onClick={this.props.logIn} class='btn btn-outline-success my-2 my-sm-0'>
                    Login
                </button>
            </>
        );
    }
    render() {
        return (
            <div className='navbar navbar-expand-lg navbar-light bg-light'>
                <a className='navbar-brand' href='#'>
                    TodoList
                </a>

                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav mr-auto'></ul>
                    <div class='form-inline my-2 my-lg-0'>{this.renderSignOutAndLogin()}</div>
                </div>
            </div>
        );
    }
}
