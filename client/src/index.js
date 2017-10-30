import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import ConnectedApp from './containers/ConnectedApp';
// import App from './components/App';
import rootReducer from './reducers'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

ReactDOM.render(<Provider store={store}><ConnectedApp /></Provider>, document.getElementById('root'));
registerServiceWorker();
