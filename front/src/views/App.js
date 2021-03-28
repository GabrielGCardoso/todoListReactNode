import Login from './login/login';
import App from './viewApp/viewApp';
import NotFound from './notFound/notFound';

import Navbar from '../common/components/navBar/navBar';

// import WeatherBoardView from './weatherView/weatherView';
import { Switch, Route } from 'react-router-dom';
import './App.css';

export default () => (
    <div>
        <Navbar
            signOut={async () => {
                await localStorage.removeItem('token');
                window.location = '/';
            }}
        />
        <div className='center'>
            <Switch>
                <Route path='/' exact={true} component={Login} />
                <Route path='/app' component={App} />
                <Route path='*' component={NotFound} />
            </Switch>
        </div>
    </div>
);
