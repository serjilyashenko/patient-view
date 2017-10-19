import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PersonShortInfo extends Component {

  render() {
    const {photo, name, gender, age, phone, birthday, email} = this.props.person;
    const genderSign = gender === 'male' ? 'M' : 'F';

    return (
      <div style={{clear: 'both', overflow: 'hidden'}}>
        <div style={{float: 'left'}}>
          <img src={photo} alt={name}/>
          <div>
            <span>Age {age}; </span>
            <span>Gender {genderSign}</span>
          </div>
        </div>
        <div style={{float: 'left', paddingLeft: 10}}>
          <div>{name}</div>
          <div>{phone}</div>
          <div>{birthday}</div>
          <div>Location: X</div>
          <div>{email}</div>
        </div>
      </div>
    );
  }
}

PersonShortInfo.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })
};

export default PersonShortInfo;
