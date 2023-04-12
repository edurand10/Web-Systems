import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const product1 = {
  productname: "Sponge Daddy",
  productprice: 32.15,
  productcategory: "Household"
}

const product2 = {
  productname: "Sponge Donkey",
  productprice: 32.55,
  productcategory: "Household"
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className ='container'>
    <div><App passedproduct={product1}/></div>
    <div><App passedproduct={product2}/></div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
