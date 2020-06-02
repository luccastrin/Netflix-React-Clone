import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
// import Movies from './Pages/Movies';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/profile" component={Profile} />
                {/* <Route path="/movies" component={Movies} /> */}
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;