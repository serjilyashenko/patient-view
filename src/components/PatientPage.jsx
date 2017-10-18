import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PatientPage extends Component {

  render() {
    const {patients} = this.props;
    const patientElements = patients.map(it => <div key={it.id}>{it.id} : {it.name}</div>)

    return (
      <div>{patientElements}</div>
    );
  }
}

PatientPage.propTypes = {
  patients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};

export default PatientPage;
