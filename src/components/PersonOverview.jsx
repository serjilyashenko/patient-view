import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PersonOverview extends Component {

  render() {
    const {condition, about} = this.props;

    return (
      <div>
        <div><b>Condition:</b> {condition}</div>
        <div><b>Details:</b></div>
        <div style={{maxWidth: 500}}>{about}</div>
      </div>
    );
  }
}

PersonOverview.propTypes = {
  condition: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

export default PersonOverview;
