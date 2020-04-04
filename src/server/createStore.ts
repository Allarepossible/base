import axios from 'axios';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

const axiosInstance = axios.create({
    baseURL: 'http://demo5795732.mockable.io',
});

const store = createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(axiosInstance)))
);

export default () => {
    console.log('------store')
    return store;
};