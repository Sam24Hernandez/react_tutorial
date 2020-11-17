import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Welcome from './Welcome';
import reportWebVitals from './reportWebVitals';

const welcome = {
  text: '¡Espero disfruten los proyectos con React!',
  author: {
    name: 'Sam Hernandez',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

 ReactDOM.render(
  <React.StrictMode>    
    <App />   
    <Welcome 
      text={welcome.text}
      author={welcome.author}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
