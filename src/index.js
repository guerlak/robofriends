
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import "./containers/App.css";
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';

// var username = 'Utilizador';

ReactDOM.render(
    <App/>
     ,document.getElementById('root')
);

// ReactDOM.render(<Hello greeting={'Welcome to MyNetpress '+ username + ' !!!'}/>, document.getElementById('mancheteTitle'));

registerServiceWorker();
