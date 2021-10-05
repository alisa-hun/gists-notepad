import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
//import reportWebVitals from './reportWebVitals';


function App() {
  return React.createElement("div", {}, "Hello Disqo");
}


reactDom.render(App(), document.getElementById("root"));