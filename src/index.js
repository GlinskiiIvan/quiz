import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App/App';
import {QuizProvider} from "./contexts/quiz";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QuizProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </QuizProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals