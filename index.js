// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import {Provider} from 'react-redux';
// import {createStore, combineReducers} from 'redux';
// import {reducer as formReducer} from 'redux-form';

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//     </Provider>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import store from "./store";
import showResults from "./showResults";
import SubmitValidationForm from "./SubmitValidationForm";

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Submit Validation</h2>

      <ul>
        <li>
          Usernames that will pass validation: <code>john</code>
          , <code>paul</code>
          , <code>george</code>
          , or <code>ringo</code>
          .
        </li>
        <li>
          Valid password for all users: <code>redux-form</code>.
        </li>
      </ul>

      <SubmitValidationForm onSubmit={showResults} />
      <Values form="submitValidation" />
    </div>
  </Provider>,
  rootEl
);
