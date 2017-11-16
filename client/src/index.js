import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import App from './components/App';
import rootReducer from './reducers'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import './styles/App.css'
import './styles/button.css'
import './styles/content.css'
import './styles/detail.css'
import './styles/form.css'
import './styles/index.css'
import './styles/item.css'
import './styles/JobBoard.css'
import './styles/Lister.css'
import './styles/MainApplication.css'
import './styles/NavBar.css'
import './styles/PublicHomepage.css'
import './styles/Sidebar.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
