import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PersonShortInfo extends Component {

  render() {
    const {photo, name, gender, age, phone, birthday, email} = this.props.person;
    const birthdayFormat = new Date(birthday).toDateString();
    const genderSign = gender === 'male' ? 'M' : 'F';

    return (
      <div className="person-info">
        <div className="person-info__image-area">
          <img className="person-info__image" src={photo} alt={name}/>
          <div className="person-info__image-remark">
            <div className="person-info__age">
              <div className="property-block">
                <span className="property-block__key">Age:</span>
                <span className="property-block__value">{age}</span>
              </div>
            </div>
            <div className="person-info__gender">
              <div className="property-block">
                <div className="property-block__key">Gender:</div>
                <div className="property-block__value">{genderSign}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="person-info__contacts-area">
          <div className="person-info__title">{name}</div>
          <div className="person-info__contacts-area-left">
            <div className="person-info__contact-item">
              <span className="icon icon_phone"> </span>
              {phone}
            </div>
            <div className="person-info__contact-item">
              <span className="icon icon_calendar"> </span>
              {birthdayFormat}
            </div>
            <div className="person-info__contact-item">
              <span className="icon icon_location"> </span>
              Location: X
            </div>
          </div>
          <div className="person-info__contacts-area-right">
            <div className="person-info__contact-item">
              <span className="icon icon_mail"> </span>
              {email}
            </div>
          </div>
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
