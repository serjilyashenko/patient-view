import React, {Component} from 'react';
import PersonPage from 'components/PersonPage';
import patientList from 'dummy-data/patients.json';

class PatientPageContainer extends Component {

  render() {
    const patients = patientList || [];

    return <PersonPage persons={patients}/>;
  }
}

export default PatientPageContainer;
