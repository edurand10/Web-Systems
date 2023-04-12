import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// files
import Signin from './pages/signin.js'
import Signup from './pages/signup.js'
import Snackbar from './pages/snackbar.js'
import ThankYou from './pages/thankyou.js'

import reportWebVitals from './reportWebVitals';
import {Route, BrowserRouter, Routes} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup2' element={<Signup/>}/>
        <Route path='/snackbar' element={<Snackbar/>}/>
        <Route path='/thankyou2' element={<ThankYou/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
