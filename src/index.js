import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import PatientPageContainer from 'containers/PatientPageContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PatientPageContainer />, document.getElementById('root'));
registerServiceWorker();
