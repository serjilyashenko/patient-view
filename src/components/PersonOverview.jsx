import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PersonOverview extends Component {

  render() {
    const {condition, about} = this.props;

    return (
      <div>
        <div className="property-block property-block_overview">
          <div className="property-block__key">
            Condition:
          </div>
          <div className="property-block__value">
            {condition}
          </div>
        </div>
        <div className="property-block property-block_overview">
          <div className="property-block__key">
            Details:
          </div>
          <div className="property-block__value property-block__value_block">{about}</div>
        </div>
      </div>
    );
  }
}

PersonOverview.propTypes = {
  condition: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

export default PersonOverview;
