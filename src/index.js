import React,{ Component } from 'react';
import ReactDOM from 'react-dom/client';
import { ParentClass } from './ClassParent';
// import First from './ParentH';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <First /> */}
    <ParentClass />
  </React.StrictMode>
);
