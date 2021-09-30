import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './home/App';
import {Provider} from "react-redux";
import {store} from './redux/store';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import FormProva from "./home/components/FormProva";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/" exact component={App}/>
                    <Route path="/form" exact component={FormProva}/>
                </Switch>
            </Router>
        </Provider>

    </React.StrictMode>,
    document.getElementById('root')
);
