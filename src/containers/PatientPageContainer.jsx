import React, {Component} from 'react';
import PatientPage from 'components/PatientPage';
import patientList from 'dummy-data/patients.json';

class PatientPageContainer extends Component {

  render() {
    const patients = patientList || [];

    return <PatientPage patients={patients}/>;
  }
}

export default PatientPageContainer;
