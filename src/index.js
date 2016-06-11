import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, hashHistory, browserHistory} from 'react-router';

import App from './components/App';
import DashBoard from './components/DashBoard';
import Todo from './components/Todo';
import Home from './components/Home';


render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={DashBoard}/>
            <Route path="home" component={Home}/>
            <Route path="todo" component={Todo}/>
        </Route>
    </Router>
),document.getElementById('root'))
