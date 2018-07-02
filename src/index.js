import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import App from './cont/App';
import registerServiceWorker from './registerServiceWorker';
import { robosearch } from './reduc'
import 'tachyons';


const History = createStore(robosearch)

ReactDOM.render(
                <Provider store={History}>
                <App />
                </Provider>
                , document.getElementById('root'));
registerServiceWorker();
