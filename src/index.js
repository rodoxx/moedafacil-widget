import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var holder = document.getElementById('moedafacil-widget');
var store = holder.getAttribute('data-store');
var widget_type = holder.getAttribute('data-widget-type');

ReactDOM.render(<App store={store} type={widget_type}/>, document.getElementById('moedafacil-widget'));
registerServiceWorker();
