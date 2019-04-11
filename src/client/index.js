//start point for client side application
import React from 'react';
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Route'
// import * as serviceWorker from './serviceWorker';


ReactDom.hydrate(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
    , document.querySelector("#root"));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


