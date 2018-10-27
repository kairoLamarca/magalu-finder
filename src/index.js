import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './public/magalu-finder.css';
import App from './App';
import CadastroLojas from './Components/Admin/CadastroLojas';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/CadastroLojas" exact={true} component={CadastroLojas} />
        </Switch>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
