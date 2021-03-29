import Login from './login/login';
import App from './viewApp/viewApp';
import NotFound from './notFound/notFound';
import SignIn from './signIn/signIn';

import Navbar from '../common/components/navBar/navBar';

import { Switch, Route } from 'react-router-dom';
import './App.css';

export default () => (
    <div>
        <Navbar
            logIn={async () => {
                window.location = '/';
            }}
            signOut={async () => {
                await localStorage.removeItem('token');
                window.location = '/';
            }}
            singIn={async () => {
                window.location = '/signIn';
            }}
        />
        <div className='center'>
            <Switch>
                <Route path='/' exact={true} component={Login} />
                <Route path='/signIn' exact={true} component={SignIn} />
                <Route path='/app' component={App} />
                <Route path='*' component={NotFound} />
            </Switch>
        </div>
    </div>
);
