import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PersonItem from './PersonListItem';

class PersonList extends Component {

  render() {
    const {persons, activePerson, onSelectPerson} = this.props;
    const patientElements = persons.map(({id, name, age, photo}) =>
      <PersonItem
        key={id}
        active={activePerson === id}
        name={name}
        remark={age + ' years'}
        photo={photo}
        onClick={() => onSelectPerson(id)}
      />);

    return (
      <div className="list__wrapper">
        <div className="list">
          {patientElements}
        </div>
      </div>
    );
  }
}

PersonList.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PersonList;
