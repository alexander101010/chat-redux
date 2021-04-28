// external modules
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { logger } from "redux-logger";
import reduxPromise from "redux-promise";

// internal modules
import App from "./components/app";
import "../assets/stylesheets/application.scss";

// State and reducers
import messagesReducer from "./reducers/messages_reducer";
import selectedChannelReducer from "./reducers/selected_channel_reducer";
const identityReducer = (state = null) => state;

const initialState = {
  messages: [],
  channels: ["general", "react", "paris", "amsterdam"],
  selectedChannel: "general",
  currentUser:
    // prompt("What is your username?") || // comment out so i don't get prompted every page load in development
    `anonymous${Math.floor(10 + Math.random() * 90)}`,
};

const reducers = combineReducers({
  messages: messagesReducer,
  channels: identityReducer,
  selectedChannel: selectedChannelReducer,
  currentUser: identityReducer,
});

// Middlewares
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));

const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
