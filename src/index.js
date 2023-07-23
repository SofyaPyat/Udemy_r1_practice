import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// const elem = <h2>Hello, world!</h2>;
// const elem = React.createElement("h2", {className: "greetings"}, "Hello, world!")   //сначала название элемента, затем название класса для элемента, затем содержимое тега

const text = "Hello world";

const elem = (
  <div>
    <h2 className="text">Текст: {text}</h2>
    <input type = "text"/>
    <button tabIndex="0">Click here</button> 
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  elem
);


