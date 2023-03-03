import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Bootstrap from "./components/Bootstrap";
import Parent1 from './components/Parent1';
import Register from './components/Register';
import Login from './components/Login';
import ChangeState from './components/ChangeState';
import ChangeState1 from './components/ChangeState1';
import ConditionalRenduring from './components/ConditiionalRenduring';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConditionalRenduring />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
