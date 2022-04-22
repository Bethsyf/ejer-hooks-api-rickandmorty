import React from 'react';
import ReactDOM from 'react-dom/client';
import ApiFetch from './components/apiFetch';
import 'antd/dist/antd.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiFetch/>
  </React.StrictMode>
);