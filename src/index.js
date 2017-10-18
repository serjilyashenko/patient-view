import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './app.css';
import PatientPage from './components/PatientPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PatientPage />, document.getElementById('root'));
registerServiceWorker();
