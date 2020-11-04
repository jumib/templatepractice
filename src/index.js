import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './modules';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import "assets/scss/material-kit-react.scss?v=1.9.0";


var history = createBrowserHistory();

const store = createStore(
  rootReducer,
  // If you use logger , the logger should be the last.
  composeWithDevTools(
    applyMiddleware(
      ReduxThunk.withExtraArgument({ history: history }),
      logger
    )
  )
); // You can apply multiple middleware.


ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
    <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);