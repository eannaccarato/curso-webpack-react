import React from "react";
import ReactDOM from "react-dom/client";
import App from './components/App';
import './styles/global.scss';

const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(<App />);